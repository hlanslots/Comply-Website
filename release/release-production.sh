#!/usr/bin/env bash
set -euo pipefail

: "${APPROVED_APPLICATION_SHA:?APPROVED_APPLICATION_SHA is required}"
if [[ "${CONFIRM_PRODUCTION_RELEASE:-}" != "YES" ]]; then
  echo '{"status":"blocked","reason":"Production release requires CONFIRM_PRODUCTION_RELEASE=YES and a later explicit approval"}'
  exit 1
fi

if [[ "$(git rev-parse HEAD)" != "$APPROVED_APPLICATION_SHA" ]]; then
  echo '{"status":"failed","reason":"checkout does not match approved application SHA"}'
  exit 1
fi

vercel pull --yes --environment production
vercel build --prod
vercel deploy --prebuilt --prod --yes
