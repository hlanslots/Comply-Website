#!/usr/bin/env bash
set -euo pipefail

: "${APPROVED_APPLICATION_SHA:?APPROVED_APPLICATION_SHA is required}"
if [[ "${CONFIRM_PRODUCTION_RELEASE:-}" != "YES" ]]; then
  echo '{"status":"blocked","reason":"Production release requires explicit user authorization and CONFIRM_PRODUCTION_RELEASE=YES"}'
  exit 1
fi
if [[ "$(git rev-parse HEAD)" != "$APPROVED_APPLICATION_SHA" || -n "$(git status --porcelain)" ]]; then
  echo '{"status":"failed","reason":"a clean checkout of the approved application SHA is required"}'
  exit 1
fi

case "${RELEASE_PHASE:-prepare}" in
  prepare)
    vercel pull --yes --environment production
    vercel build --prod
    vercel deploy --prebuilt --prod --skip-domain --yes --format=json \
      --meta "applicationSha=$APPROVED_APPLICATION_SHA" --meta releaseTarget=production
    ;;
  promote)
    : "${PRODUCTION_ARTIFACT_ID:?PRODUCTION_ARTIFACT_ID is required}"
    vercel promote "$PRODUCTION_ARTIFACT_ID" --yes
    ;;
  *)
    echo '{"status":"failed","reason":"RELEASE_PHASE must be prepare or promote"}'
    exit 1
    ;;
esac
