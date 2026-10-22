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
Deployment: new Preview READY at https://comply-website-1m9img98h-hans-lanslots-projects.vercel.app, ID dpl_82TypBLSvWQuT9XyrzPTbxkpd2iT, candidate dc630ba427d06ed585ff9be0605344ee6b111bfa, version 0.1.1. Exact deployed replacement headline verified via authenticated Vercel HTTP; original headline absent. Production unchanged. Draft PR: https://github.com/hlanslots/Comply-Website/pull/2.
Next step: review the updated Preview. Production release requires separate full gate validation and approval. Local and deployed Preview browser visual checks passed. GitHub CI and Vercel checks passed.
Risk: baseline deployment has no source SHA metadata; broader Preview content has not been approved for Production by this request.

## 2026-10-22 headline split
User approved wording: “Expert-led security compliance for organizations across industries and stages of maturity—helping you navigate customer, audit, or regulatory requirements.”
The helping clause now starts on a separate line using two block spans within the existing H1; natural wrapping remains available on narrow screens. Existing headline typography is preserved.
Source baseline: 67ce693 on codex/homepage-headline, matching the previously reviewed Preview source. Changes scoped to src/app/page.tsx and this memory file; unrelated logo-animation work in the primary checkout is untouched.
Verification: lint, typecheck, optimized build, release regression, protected Preview HTML, desktop (1440px) and mobile (390px) browser checks passed. Both H1 spans display as blocks and the helping clause starts below the first. H1 stays within the mobile viewport. Contact route loads and browser error collection was empty. Existing page-wide mobile scroll width (620px at 390px viewport) also occurs in the baseline; unrelated sections were left unchanged. No data changes or form submissions are needed; configured Preview backend remains unchanged.
Preview READY: https://comply-website-8v2mw9dw2-hans-lanslots-projects.vercel.app, deployment dpl_2FLQnSn43vUQpoAvcyTrD21ccqgR, application source a9a5248c2e424ec76173c95bd4d743c2d469b0be. Preview configuration unchanged; only public page reads were exercised, with no form submissions or records created. Browser OIDC access returned TRUSTED_SOURCES_ENVIRONMENT_MISMATCH; temporary Vercel share links allowed browser verification without protection changes. Next step: user review. Production remains unchanged.

## 2026-10-22 en dash typography
Changed the home page headline separator from an em dash to an en dash, preserving the separate helping-clause line. Files: src/app/page.tsx and this memory. Verification/deployment pending; next step: inspect updated Preview. Production unchanged.
