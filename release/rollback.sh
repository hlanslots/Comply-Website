#!/usr/bin/env bash
set -euo pipefail

: "${ROLLBACK_ARTIFACT_ID:?ROLLBACK_ARTIFACT_ID is required}"
if [[ "${CONFIRM_ROLLBACK:-}" != "YES" ]]; then
  echo '{"status":"blocked","reason":"Rollback requires CONFIRM_ROLLBACK=YES"}'
  exit 1
fi

vercel promote "$ROLLBACK_ARTIFACT_ID" --yes
