import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from "node:crypto";
import { Resend } from "resend";

import { getNewsletterSettings } from "@/lib/newsletter-config";

export type NewsletterAction = "subscribe" | "unsubscribe";

export type NewsletterContact = {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  title?: string;
};

type NewsletterTokenPayload = NewsletterContact & {
  action: NewsletterAction;
  expiresAt: number;
  version: 1;
};

type NewsletterConfig = {
  apiKey: string;
  confirmationSecret: string;
  fromEmail: string;
  replyTo?: string;
  segmentId: string;
  siteUrl: string;
  mock: boolean;
};

const tokenLifetimeMs = 48 * 60 * 60 * 1000;
const defaultFromEmail = "COMPLY <hello@mycomply.ai>";

export class NewsletterConfigurationError extends Error {
  constructor(message = "Newsletter delivery is not configured.") {
    super(message);
    this.name = "NewsletterConfigurationError";
  }
}

export function isNewsletterEnabled() {
  return process.env.NEWSLETTER_ENABLED !== "false";
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function textValue(value: unknown, maxLength = 200) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getConfig(): NewsletterConfig {
  const mock =
    process.env.NODE_ENV !== "production" &&
    process.env.NEWSLETTER_MOCK_SEND === "true";
  const newsletter = getNewsletterSettings();
  const apiKey = process.env.RESEND_API_KEY ?? "";
  const confirmationSecret = process.env.NEWSLETTER_CONFIRMATION_SECRET ?? "";
  const segmentId = newsletter.segmentId;

  if (!confirmationSecret) {
    throw new NewsletterConfigurationError(
      "NEWSLETTER_CONFIRMATION_SECRET is not configured.",
    );
  }

  if (!mock && (!apiKey || !segmentId)) {
    throw new NewsletterConfigurationError(
      "RESEND_API_KEY and NEWSLETTER_SEGMENT_ID are required.",
    );
  }

  return {
    apiKey,
    confirmationSecret,
    fromEmail: process.env.NEWSLETTER_FROM_EMAIL ?? defaultFromEmail,
    replyTo: process.env.NEWSLETTER_REPLY_TO,
    segmentId,
    siteUrl: newsletter.siteUrl,
    mock,
  };
}

function tokenKey(secret: string) {
  return createHash("sha256").update(secret).digest();
}

function toBase64Url(value: Buffer) {
  return value.toString("base64url");
}

function fromBase64Url(value: string) {
  return Buffer.from(value, "base64url");
}

export function createNewsletterToken(
  action: NewsletterAction,
  contact: NewsletterContact,
) {
  const config = getConfig();
  const payload: NewsletterTokenPayload = {
    ...contact,
    action,
    expiresAt: Date.now() + tokenLifetimeMs,
    version: 1,
  };
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", tokenKey(config.confirmationSecret), iv);
  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify(payload), "utf8"),
    cipher.final(),
  ]);

  return [iv, cipher.getAuthTag(), encrypted].map(toBase64Url).join(".");
}

export function readNewsletterToken(token: string): NewsletterTokenPayload {
  const config = getConfig();
  const parts = token.split(".");

  if (parts.length !== 3) {
    throw new Error("Invalid newsletter confirmation token.");
  }

  const decipher = createDecipheriv(
    "aes-256-gcm",
    tokenKey(config.confirmationSecret),
    fromBase64Url(parts[0]),
  );
  decipher.setAuthTag(fromBase64Url(parts[1]));
  const decrypted = Buffer.concat([
    decipher.update(fromBase64Url(parts[2])),
    decipher.final(),
  ]);
  const payload = JSON.parse(decrypted.toString("utf8")) as NewsletterTokenPayload;

  if (
    payload.version !== 1 ||
    !payload.email ||
    !isEmail(payload.email) ||
    !["subscribe", "unsubscribe"].includes(payload.action) ||
    payload.expiresAt < Date.now()
  ) {
    throw new Error("Expired or invalid newsletter confirmation token.");
  }

  return {
    ...payload,
    email: normalizeEmail(payload.email),
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function confirmationUrl(token: string, siteUrl: string) {
  return `${siteUrl}/api/newsletter/confirm?token=${encodeURIComponent(token)}`;
}

export async function sendNewsletterConfirmation(
  action: NewsletterAction,
  contact: NewsletterContact,
) {
  const config = getConfig();
  const newsletter = getNewsletterSettings();
  const token = createNewsletterToken(action, contact);
  const url = confirmationUrl(token, config.siteUrl);
  const isSubscribe = action === "subscribe";
  const subject = isSubscribe
    ? `Confirm your ${newsletter.name} subscription`
    : `Confirm your ${newsletter.name} unsubscribe request`;
  const greeting = contact.firstName ? `Hi ${escapeHtml(contact.firstName)},` : "Hello,";
  const actionLabel = isSubscribe ? "Confirm subscription" : "Confirm unsubscribe";
  const description = isSubscribe
    ? `Please confirm that you want to receive the ${newsletter.name} ${newsletter.frequency}.`
    : `Please confirm that you want to stop receiving the ${newsletter.name}.`;
  const text = `${isSubscribe ? "Confirm your subscription" : "Confirm your unsubscribe request"}\n\n${description}\n\nOpen this link within 48 hours:\n${url}\n\nIf you did not request this, you can ignore this email.`;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#102a43;line-height:1.6">
      <p>${greeting}</p>
      <h1 style="font-size:24px;line-height:1.2">${escapeHtml(subject)}</h1>
      <p>${escapeHtml(description)}</p>
      <p><a href="${escapeHtml(url)}" style="display:inline-block;padding:12px 18px;border-radius:6px;background:#0f766e;color:#ffffff;text-decoration:none;font-weight:700">${actionLabel}</a></p>
      <p style="font-size:13px;color:#64748b">This link expires in 48 hours. If you did not request this, you can ignore this email.</p>
    </div>
  `;

  if (config.mock) {
    console.info("Mocked newsletter confirmation", { action });
    return { previewUrl: url };
  }

  const resend = new Resend(config.apiKey);
  const { error } = await resend.emails.send({
    from: config.fromEmail,
    ...(config.replyTo ? { replyTo: config.replyTo } : {}),
    to: contact.email,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(`Resend confirmation email failed: ${error.message}`);
  }

  return { previewUrl: undefined };
}

function isNotFound(error: { name?: string; statusCode?: number | null } | null) {
  return error?.name === "not_found" || error?.statusCode === 404;
}

function contactProperties(contact: NewsletterContact) {
  const newsletter = getNewsletterSettings();

  return {
    company: contact.company ?? null,
    ...(contact.title ? { title: contact.title } : {}),
    signup_source: `${newsletter.name} subscribe page`,
  };
}

export async function activateNewsletterSubscription(contact: NewsletterContact) {
  const config = getConfig();

  if (config.mock) {
    return;
  }

  const resend = new Resend(config.apiKey);
  const existing = await resend.contacts.get({ email: contact.email });

  if (existing.error && !isNotFound(existing.error)) {
    throw new Error(`Resend contact lookup failed: ${existing.error.message}`);
  }

  if (!existing.data) {
    const created = await resend.contacts.create({
      email: contact.email,
      firstName: contact.firstName,
      lastName: contact.lastName,
      unsubscribed: false,
      properties: contactProperties(contact),
      segments: [{ id: config.segmentId }],
    });

    if (created.error) {
      throw new Error(`Resend contact creation failed: ${created.error.message}`);
    }

    return;
  }

  const updated = await resend.contacts.update({
    email: contact.email,
    firstName: contact.firstName,
    lastName: contact.lastName,
    unsubscribed: false,
    properties: contactProperties(contact),
  });

  if (updated.error) {
    throw new Error(`Resend contact update failed: ${updated.error.message}`);
  }

  const memberships = await resend.contacts.segments.list({ email: contact.email });
  if (memberships.error) {
    throw new Error(`Resend segment lookup failed: ${memberships.error.message}`);
  }

  if (!memberships.data.data.some((segment) => segment.id === config.segmentId)) {
    const added = await resend.contacts.segments.add({
      email: contact.email,
      segmentId: config.segmentId,
    });

    if (added.error) {
      throw new Error(`Resend segment update failed: ${added.error.message}`);
    }
  }
}

export async function deactivateNewsletterSubscription(email: string) {
  const config = getConfig();

  if (config.mock) {
    return;
  }

  const resend = new Resend(config.apiKey);
  const existing = await resend.contacts.get({ email });

  if (existing.error) {
    if (isNotFound(existing.error)) {
      return;
    }
    throw new Error(`Resend contact lookup failed: ${existing.error.message}`);
  }

  const memberships = await resend.contacts.segments.list({ email });
  if (memberships.error) {
    throw new Error(`Resend segment lookup failed: ${memberships.error.message}`);
  }

  if (!memberships.data.data.some((segment) => segment.id === config.segmentId)) {
    return;
  }

  const removed = await resend.contacts.segments.remove({
    email,
    segmentId: config.segmentId,
  });

  if (removed.error) {
    throw new Error(`Resend segment removal failed: ${removed.error.message}`);
  }
}
