import { Resend } from "resend";

const recipientEmail = process.env.CONTACT_TO_EMAIL ?? "sburd@ansecgroup.com";
const senderEmail =
  process.env.CONTACT_FROM_EMAIL ?? "COMPLY Website <hello@mycomply.ai>";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  title?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
  source?: unknown;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSourceLabel(source: string) {
  return source.toLowerCase() === "ansec" ? "ANSEC" : "COMPLY";
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const mockSend =
    process.env.NODE_ENV !== "production" &&
    process.env.CONTACT_FORM_MOCK_SEND === "true";

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (asText(payload.website)) {
    return Response.json({ ok: true });
  }

  const name = asText(payload.name);
  const company = asText(payload.company);
  const title = asText(payload.title);
  const email = asText(payload.email);
  const phone = asText(payload.phone);
  const message = asText(payload.message);
  const sourceLabel = getSourceLabel(asText(payload.source));

  if (!name || !company || !email || !message) {
    return Response.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const fields = [
    ["Origin", sourceLabel],
    ["Name", name],
    ["Company", company],
    ["Title", title || "Not provided"],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Message", message],
  ];

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = `
    <h1>New ${sourceLabel} conversation request</h1>
    ${fields
      .map(
        ([label, value]) => `
          <p>
            <strong>${escapeHtml(label)}</strong><br />
            ${escapeHtml(value).replaceAll("\n", "<br />")}
          </p>
        `,
      )
      .join("")}
  `;

  if (mockSend) {
    console.info("Mocked COMPLY contact email", {
      to: recipientEmail,
      replyTo: email,
      subject: `[${sourceLabel}] conversation request from ${name}`,
    });

    return Response.json({ ok: true, mocked: true });
  }

  if (!resendApiKey) {
    return Response.json(
      { error: "Email delivery is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);
  const { error } = await resend.emails.send({
    from: senderEmail,
    to: recipientEmail,
    replyTo: email,
    subject: `[${sourceLabel}] conversation request from ${name}`,
    text,
    html,
  });

  if (error) {
    console.error("Resend contact email failed", {
      name: error.name,
      message: error.message,
    });

    return Response.json(
      { error: "The message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
