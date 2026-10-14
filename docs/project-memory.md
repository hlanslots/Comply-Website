# COMPLY Website project memory

## Goal and scope
Public marketing site for COMPLY security compliance services and practitioner Workbenches.

## Architecture and backend
Next.js 16 App Router, React 19, TypeScript, Tailwind. Contact and newsletter handlers use Resend. No Convex dependency is declared in package.json; this copy change does not introduce a backend.

## Deployment and source
Vercel project: comply-website, team hans-lanslots-projects.
Production: https://mycomply.ai. Verified source e476c2973e42f25b6cb7f562cacc096335441c9a, deployment dpl_EcwZvsjg2BSAshZZSQMdNjYrUXmX.
User-selected Preview baseline: https://comply-website-7x8gtce5d-hans-lanslots-projects.vercel.app (dpl_huS4zGEevUVnBUfYvuuPWLj6kkYu).
The Preview has no source metadata. Its original headline was verified through authenticated Vercel HTTP access; matching content is in codex/website-content-alignment at 6eef0f9. Branch descends from Production.

## UI decisions and preferences
Use the user-selected Preview content, preserving existing layout and styling. Scope this task to the home page headline. Deployments are immutable; an update requires a new Preview URL. Production requires a separate release request and candidate approval.

## 2026-10-14 headline update
Changed src/app/page.tsx to: “Expert-led security compliance for organizations across industries and stages of maturity, navigating customer, audit, or regulatory requirements.”
Files touched: src/app/page.tsx, package.json, package-lock.json, AGENTS.md, and this memory file.
Verification: original Preview headline and Production ancestry confirmed; npm ci, lint, typecheck, build, and release regression checks passed. npm test found no tests.
Deployment: new Preview pending; Production unchanged.
Next step: complete local verification and deploy/check new Preview.
Risk: baseline deployment has no source SHA metadata; broader Preview content has not been approved for Production by this request.
