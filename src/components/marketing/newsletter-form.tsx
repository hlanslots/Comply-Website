"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEFAULT_NEWSLETTER_NAME, DEFAULT_NEWSLETTER_FREQUENCY } from "@/lib/newsletter-defaults";

type NewsletterMode = "subscribe" | "unsubscribe";
type FormState = "idle" | "sending" | "sent" | "error";

type NewsletterFormProps = {
  initialStatus?: string;
  newsletterName?: string;
  newsletterFrequency?: string;
};

function initialStatusCopy(status: string | undefined, newsletterName: string) {
  switch (status) {
    case "confirmed":
      return {
        tone: "success" as const,
        message: "Your subscription is confirmed. The next digest will arrive on a workday.",
      };
    case "unsubscribed":
      return {
        tone: "success" as const,
        message: `You have been unsubscribed from the ${newsletterName}.`,
      };
    case "invalid":
      return {
        tone: "error" as const,
        message: "That confirmation link is invalid or has expired. Please request a new one.",
      };
    case "error":
      return {
        tone: "error" as const,
        message: "We could not complete that request. Please try again.",
      };
    case "unavailable":
      return {
        tone: "error" as const,
        message: "Newsletter subscriptions are temporarily unavailable.",
      };
    default:
      return { tone: "neutral" as const, message: "" };
  }
}

export function NewsletterForm({
  initialStatus,
  newsletterName = DEFAULT_NEWSLETTER_NAME,
  newsletterFrequency = DEFAULT_NEWSLETTER_FREQUENCY,
}: NewsletterFormProps) {
  const initialCopy = initialStatusCopy(initialStatus, newsletterName);
  const [mode, setMode] = useState<NewsletterMode>("subscribe");
  const [state, setState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState(initialCopy.message);
  const [statusTone, setStatusTone] = useState(initialCopy.tone);
  const [previewUrl, setPreviewUrl] = useState("");

  function switchMode(nextMode: NewsletterMode) {
    setMode(nextMode);
    setState("idle");
    setStatusMessage("");
    setPreviewUrl("");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const isSubscribe = mode === "subscribe";

    setState("sending");
    setStatusMessage("");
    setPreviewUrl("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: mode,
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          company: formData.get("company"),
          title: formData.get("title"),
          email: formData.get("email"),
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
        }),
      });
      const body = (await response.json().catch(() => null)) as {
        error?: string;
        previewUrl?: string;
      } | null;

      if (!response.ok) {
        setState("error");
        setStatusTone("error");
        setStatusMessage(body?.error ?? "Please try again later.");
        return;
      }

      form.reset();
      setState("sent");
      setStatusTone("success");
      setStatusMessage(
        isSubscribe
          ? "Check your inbox to confirm your subscription."
          : "Check your inbox to confirm your unsubscribe request.",
      );
      if (body?.previewUrl) {
        setPreviewUrl(body.previewUrl);
      }
    } catch {
      setState("error");
      setStatusTone("error");
      setStatusMessage("We could not process the request. Please try again later.");
    }
  }

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1" role="tablist" aria-label="Newsletter preferences">
        {(["subscribe", "unsubscribe"] as NewsletterMode[]).map((tab) => {
          const selected = mode === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                selected
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => switchMode(tab)}
            >
              {tab === "subscribe" ? "Subscribe" : "Unsubscribe"}
            </button>
          );
        })}
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          {mode === "subscribe" ? "Join C.O.M.P.L.Y. Daily digest" : "Manage your subscription"}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {mode === "subscribe"
            ? `Enter your details and we will send a confirmation link before adding you to the ${newsletterName} list.`
            : `Enter your email address and we will send a confirmation link to remove you from the ${newsletterName} list.`}
        </p>
      </div>

      <form className="grid gap-4" onSubmit={onSubmit}>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="newsletter-website">Website</label>
          <input id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {mode === "subscribe" ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium" htmlFor="newsletter-first-name">
                <span>
                  First name <span className="text-destructive">*</span>
                </span>
                <Input id="newsletter-first-name" name="firstName" autoComplete="given-name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium" htmlFor="newsletter-last-name">
                <span>
                  Last name <span className="text-destructive">*</span>
                </span>
                <Input id="newsletter-last-name" name="lastName" autoComplete="family-name" required />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium" htmlFor="newsletter-company">
                <span>
                  Company <span className="text-destructive">*</span>
                </span>
                <Input id="newsletter-company" name="company" autoComplete="organization" required />
              </label>
              <label className="grid gap-2 text-sm font-medium" htmlFor="newsletter-title">
                <span>
                  Job title <span className="text-muted-foreground">(optional)</span>
                </span>
                <Input id="newsletter-title" name="title" autoComplete="organization-title" />
              </label>
            </div>
          </>
        ) : null}

        <label className="grid gap-2 text-sm font-medium" htmlFor="newsletter-email">
          <span>
            Email address <span className="text-destructive">*</span>
          </span>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>

        {mode === "subscribe" ? (
          <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[var(--primary)]"
            />
            <span>
              I agree to receive the {newsletterName} {newsletterFrequency}. I understand I can
              unsubscribe at any time.
            </span>
          </label>
        ) : null}

        <Button type="submit" size="lg" className="rounded-md sm:w-fit" disabled={state === "sending"}>
          {state === "sending"
            ? "Working..."
            : mode === "subscribe"
              ? "Request subscription"
              : "Request unsubscribe"}
        </Button>
      </form>

      {statusMessage ? (
        <div
          className={`rounded-md border px-4 py-3 text-sm leading-6 ${
            statusTone === "error"
              ? "border-destructive/30 bg-destructive/10 text-destructive"
              : "border-primary/25 bg-primary/10 text-foreground"
          }`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
          {previewUrl ? (
            <a className="mt-2 block font-semibold underline" href={previewUrl}>
              Open the local confirmation link
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
