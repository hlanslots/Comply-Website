import {
  isEmail,
  isNewsletterEnabled,
  normalizeEmail,
  sendNewsletterConfirmation,
  textValue,
  type NewsletterAction,
  type NewsletterContact,
} from "@/lib/newsletter";

export const runtime = "nodejs";

type NewsletterRequest = {
  action?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  company?: unknown;
  title?: unknown;
  email?: unknown;
  consent?: unknown;
  website?: unknown;
};

function response(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  if (!isNewsletterEnabled()) {
    return response(
      { error: "Newsletter subscriptions are temporarily unavailable." },
      503,
    );
  }

  let payload: NewsletterRequest;

  try {
    payload = (await request.json()) as NewsletterRequest;
  } catch {
    return response({ error: "Invalid request." }, 400);
  }

  if (textValue(payload.website)) {
    return response({ ok: true });
  }

  const action: NewsletterAction =
    payload.action === "unsubscribe" ? "unsubscribe" : "subscribe";
  const email = normalizeEmail(textValue(payload.email, 320));

  if (!email || !isEmail(email)) {
    return response({ error: "Please enter a valid email address." }, 400);
  }

  if (action === "subscribe") {
    const firstName = textValue(payload.firstName, 80);
    const lastName = textValue(payload.lastName, 80);
    const company = textValue(payload.company, 160);
    const title = textValue(payload.title, 120);

    if (!firstName || !lastName || !company || payload.consent !== true) {
      return response(
        { error: "Please complete the required fields and consent to receive the digest." },
        400,
      );
    }

    const contact: NewsletterContact = {
      email,
      firstName,
      lastName,
      company,
      ...(title ? { title } : {}),
    };

    try {
      const result = await sendNewsletterConfirmation(action, contact);
      return response({ ok: true, previewUrl: result.previewUrl });
    } catch (error) {
      console.error("Newsletter subscription request failed", {
        message: error instanceof Error ? error.message : "Unknown error",
      });
      return response(
        { error: "We could not process the request. Please try again later." },
        500,
      );
    }
  }

  try {
    const result = await sendNewsletterConfirmation(action, { email });
    return response({ ok: true, previewUrl: result.previewUrl });
  } catch (error) {
    console.error("Newsletter unsubscribe request failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return response(
      { error: "We could not process the request. Please try again later." },
      500,
    );
  }
}
