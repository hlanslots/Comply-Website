import "server-only";

import {
  DEFAULT_NEWSLETTER_CHOICE_DESCRIPTION,
  DEFAULT_NEWSLETTER_CONTEXT_DESCRIPTION,
  DEFAULT_NEWSLETTER_CONTEXT_LABEL,
  DEFAULT_NEWSLETTER_DELIVERY_DESCRIPTION,
  DEFAULT_NEWSLETTER_DELIVERY_LABEL,
  DEFAULT_NEWSLETTER_DESCRIPTION,
  DEFAULT_NEWSLETTER_FREQUENCY,
  DEFAULT_NEWSLETTER_NAME,
  DEFAULT_NEWSLETTER_PAGE_TITLE,
} from "@/lib/newsletter-defaults";

export type NewsletterSettings = {
  name: string;
  description: string;
  pageTitle: string;
  frequency: string;
  deliveryLabel: string;
  deliveryDescription: string;
  contextLabel: string;
  contextDescription: string;
  choiceDescription: string;
  segmentId: string;
  siteUrl: string;
};

function envValue(key: string, fallback: string) {
  const value = process.env[key]?.trim();
  return value || fallback;
}

export function getNewsletterSettings(): NewsletterSettings {
  const legacySegmentId = process.env.RESEND_DAILY_DIGEST_SEGMENT_ID?.trim() ?? "";

  return {
    name: envValue("NEWSLETTER_NAME", DEFAULT_NEWSLETTER_NAME),
    description: envValue("NEWSLETTER_DESCRIPTION", DEFAULT_NEWSLETTER_DESCRIPTION),
    pageTitle: envValue("NEWSLETTER_PAGE_TITLE", DEFAULT_NEWSLETTER_PAGE_TITLE),
    frequency: envValue("NEWSLETTER_FREQUENCY", DEFAULT_NEWSLETTER_FREQUENCY),
    deliveryLabel: envValue("NEWSLETTER_DELIVERY_LABEL", DEFAULT_NEWSLETTER_DELIVERY_LABEL),
    deliveryDescription: envValue(
      "NEWSLETTER_DELIVERY_DESCRIPTION",
      DEFAULT_NEWSLETTER_DELIVERY_DESCRIPTION,
    ),
    contextLabel: envValue("NEWSLETTER_CONTEXT_LABEL", DEFAULT_NEWSLETTER_CONTEXT_LABEL),
    contextDescription: envValue(
      "NEWSLETTER_CONTEXT_DESCRIPTION",
      DEFAULT_NEWSLETTER_CONTEXT_DESCRIPTION,
    ),
    choiceDescription: envValue(
      "NEWSLETTER_CHOICE_DESCRIPTION",
      DEFAULT_NEWSLETTER_CHOICE_DESCRIPTION,
    ),
    segmentId: envValue("NEWSLETTER_SEGMENT_ID", legacySegmentId),
    siteUrl: envValue(
      "NEWSLETTER_SITE_URL",
      process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://mycomply.ai",
    ).replace(/\/$/, ""),
  };
}
