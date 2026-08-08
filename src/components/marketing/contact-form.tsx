"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
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
    setStatusMessage("Your message has been sent. We will be in touch soon.");
  }

  return (
    <form
      className="grid gap-4"
      aria-label="Schedule a consultation form"
      onSubmit={onSubmit}
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
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
      <Input name="phone" type="tel" placeholder="Phone" aria-label="Phone" />
      <Textarea
        name="message"
        placeholder="Message *"
        aria-label="Message, required"
        rows={7}
        required
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
            : "Schedule a Consultation"}
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
