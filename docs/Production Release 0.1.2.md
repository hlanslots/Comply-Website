# COMPLY Website Production release 0.1.2

Released on 22 October 2026 (America/New_York). Production verification passed.

The home page headline now has a space before the en dash, with “helping you navigate customer, audit, or regulatory requirements” beginning on its own line. This also publishes the previously reviewed Preview marketing content, guides, and qualification form.

## Immutable identities

- Application SHA: `c0e5954633a2ace38a531d62e9073b833f3c0a7f`
- Version/tag: `v0.1.2`
- Preview: https://comply-website-hrfy03j7i-hans-lanslots-projects.vercel.app
- Preview deployment: `dpl_DBQ88vVPykzr53xaqFeR71JRdZtL`
- Production: https://mycomply.ai and https://www.mycomply.ai
- Production artifact: https://comply-website-fdfytgej3-hans-lanslots-projects.vercel.app
- Production deployment: `dpl_2RExwEwQh9T4JyzmMeWyRW1BVSVS`
- Production baseline/rollback source: `e476c2973e42f25b6cb7f562cacc096335441c9a`; ancestry passed.
- Pull request: https://github.com/hlanslots/Comply-Website/pull/3

The same application SHA was rebuilt using provider-managed Production configuration, deployed without routing the canonical domains, tested, and then promoted. User explicitly authorized completing the change and Production promotion with rollback in the request; the release manifest binds that instruction to this exact candidate.

## Verification

Lint, typecheck, optimized build, release regression, and GitHub verify CI passed. The npm test command contains zero test cases; acceptance instead included the local mock-send qualification flow and deployed browser/HTTP checks.

All 29 checked routes passed in Preview, staged Production, and live Production. Four contact validation/honeypot guards passed at each target without sending email. The configured environment-name inventories and public JavaScript marker checks passed. Desktop and mobile viewport headline checks passed. Live home and contact HTTP probes measured 523ms and 400ms, below the 3000ms threshold. The Production log scan contained 50 entries and no error/fatal entries.

Physical-device testing and real email delivery were not performed. Existing whole-page mobile overflow matches the reviewed baseline; the headline fits its viewport. PR #3 remains open; the deployed source is permanently recorded by the version tag. Consolidating main must preserve this tagged source and account for automatic deployment behavior.

## Rollback

The previous Production deployment is retained and was verified READY after release:

- Deployment: `dpl_EcwZvsjg2BSAshZZSQMdNjYrUXmX`
- Immutable URL: https://comply-website-ofkzueaqp-hans-lanslots-projects.vercel.app
- Previous headline and source were verified before promotion.

From this repository checkout, after confirming that Vercel resolves the comply-website project in hans-lanslots-projects, restore it with:

```sh
ROLLBACK_ARTIFACT_ID=dpl_EcwZvsjg2BSAshZZSQMdNjYrUXmX CONFIRM_ROLLBACK=YES ./release/rollback.sh
```

Then confirm both canonical domains resolve to that deployment, check the original home page and critical routes, inspect logs, and record the rollback in the manifest. This reverses the entire website release. No data/schema migration needs reversal. Rollback was prepared and verified for availability; it was not executed.

The machine-readable record is release/release-manifest.json. Detailed local QA artifacts are under artifacts/release-spacing/ and are intentionally Git-ignored. No temporary test records were created. Temporary browser credential files were removed and browser sessions closed; temporary Vercel share links expire automatically.
