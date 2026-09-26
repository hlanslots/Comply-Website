import { NextResponse } from "next/server";

import {
  activateNewsletterSubscription,
  deactivateNewsletterSubscription,
  isNewsletterEnabled,
  readNewsletterToken,
} from "@/lib/newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function redirectToSubscribe(request: Request, status: string) {
  const url = new URL("/subscribe", request.url);
  url.searchParams.set("status", status);
  return NextResponse.redirect(url);
}

export async function GET(request: Request) {
  if (!isNewsletterEnabled()) {
    return redirectToSubscribe(request, "unavailable");
  }

  const token = new URL(request.url).searchParams.get("token");
  if (!token) {
    return redirectToSubscribe(request, "invalid");
  }

  let payload;

  try {
    payload = readNewsletterToken(token);
  } catch {
    return redirectToSubscribe(request, "invalid");
  }

  try {
    if (payload.action === "subscribe") {
      await activateNewsletterSubscription(payload);
      return redirectToSubscribe(request, "confirmed");
    }

    await deactivateNewsletterSubscription(payload.email);
    return redirectToSubscribe(request, "unsubscribed");
  } catch (error) {
    console.error("Newsletter confirmation failed", {
      action: payload.action,
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return redirectToSubscribe(request, "error");
  }
}
