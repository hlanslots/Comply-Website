"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "sending" | "sent" | "error";

type ContactFormProps = {
  source?: string;
};

export function ContactForm({ source = "comply" }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");
    setStatusMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      setState("error");
      setStatusMessage(
        body?.error ?? "The message could not be sent. Please try again.",
      );
      return;
    }

    form.reset();
    setState("sent");
    setStatusMessage("Your message has been sent. We will review the details and prepare the next step.");
  }

  return (
    <form
      className="grid gap-4"
      aria-label="Schedule a conversation form"
      onSubmit={onSubmit}
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="source" value={source} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          name="name"
          placeholder="Name *"
          aria-label="Name, required"
          required
        />
        <Input
          name="company"
          placeholder="Company *"
          aria-label="Company, required"
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="title" placeholder="Title" aria-label="Title" />
        <Input
          name="email"
          type="email"
          placeholder="Email *"
          aria-label="Email, required"
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <select
          name="companySize"
          aria-label="Company size"
          defaultValue=""
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <option value="">Company size</option>
          <option value="1-25">1–25 employees</option>
          <option value="26-100">26–100 employees</option>
          <option value="101-500">101–500 employees</option>
          <option value="501+">501+ employees</option>
        </select>
        <Input name="industry" placeholder="Industry" aria-label="Industry" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <select
          name="complianceNeed"
          aria-label="Framework or compliance requirement"
          defaultValue=""
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <option value="">Framework or requirement</option>
          <option value="ISO 27001">ISO 27001</option>
          <option value="ISO 42001">ISO 42001</option>
          <option value="SOC 2">SOC 2</option>
          <option value="PCI DSS">PCI DSS</option>
          <option value="NIST">NIST</option>
          <option value="CIS Controls">CIS Controls</option>
          <option value="DORA">DORA</option>
          <option value="GDPR">GDPR</option>
          <option value="Multiple or not sure">Multiple or not sure</option>
        </select>
        <Input
          name="deadline"
          placeholder="Important deadline (optional)"
          aria-label="Important deadline"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          name="trigger"
          placeholder="What prompted this now?"
          aria-label="What prompted this now"
        />
        <select
          name="currentState"
          aria-label="Current compliance state"
          defaultValue=""
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <option value="">Current compliance state</option>
          <option value="Starting from scratch">Starting from scratch</option>
          <option value="Some controls and evidence exist">Some controls and evidence exist</option>
          <option value="Existing program needs improvement">Existing program needs improvement</option>
          <option value="Preparing for assessment or audit">Preparing for assessment or audit</option>
        </select>
      </div>
      <Input
        name="desiredOutcome"
        placeholder="Desired outcome (optional)"
        aria-label="Desired outcome"
      />
      <Input name="phone" type="tel" placeholder="Phone (optional)" aria-label="Phone" />
      <Textarea
        name="message"
        placeholder="Anything else we should know? (optional)"
        aria-label="Anything else we should know"
        rows={7}
      />
      <p className="text-xs text-muted-foreground">* Required fields</p>
      <div className="grid gap-3 sm:flex sm:items-center">
        <Button
          type="submit"
          size="lg"
          className="rounded-md sm:w-fit"
          disabled={state === "sending"}
        >
          {state === "sending"
            ? "Sending..."
            : "Book a Compliance Clarity Conversation"}
        </Button>
        {statusMessage ? (
          <p
            className={
              state === "error"
                ? "text-sm text-destructive"
                : "text-sm text-muted-foreground"
            }
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
