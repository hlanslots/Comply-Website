# Newsletter subscription rollback

The newsletter feature is intentionally isolated and can be disabled without reverting the existing contact-form changes.

For changing to a different newsletter while keeping the feature, see [Newsletter Configuration.md](<Newsletter Configuration.md>).

## Immediate disable switch

Set this environment variable to `false` in the hosting environment and redeploy:

```text
NEWSLETTER_ENABLED=false
```

The `/subscribe` page can remain online while the API returns an unavailable response. To hide the feature as well, remove the `/subscribe` links from the homepage and footer, then redeploy.

## Complete website rollback

Remove the newsletter-only files:

```text
src/app/api/newsletter/route.ts
src/app/api/newsletter/confirm/route.ts
src/app/subscribe/page.tsx
src/components/marketing/newsletter-form.tsx
src/lib/newsletter.ts
```

Then remove the newsletter additions from these existing files:

```text
src/app/page.tsx
src/components/marketing/site-footer.tsx
src/app/sitemap.ts
.env.example
.gitignore
```

Do not restore the whole worktree: the contact form and contact embed contain separate user changes.

## Stop scheduled delivery

Restore the digest automation to its Apple Mail configuration, or deactivate the scheduled task before removing the Resend configuration. The automation and skill files are outside this repository:

```text
/Users/hanslanslots/.codex/automations/mycomply-ai-daily-digest/automation.toml
/Users/hanslanslots/.codex/skills/mycomply-ai-daily-digest/SKILL.md
/Users/hanslanslots/.codex/skills/mycomply-ai-daily-digest/scripts/render_digest_email.rb
/Users/hanslanslots/.codex/skills/mycomply-ai-daily-digest/scripts/send_digest_broadcast.sh
```

The weekday schedule itself remains 8:00 AM, Monday through Friday; only its delivery target changes. If the feature is being abandoned, deactivate the task or restore its previous Apple Mail prompt before deleting the Resend segment.

## Resend cleanup

The implementation uses the Resend segment named `myComply.AI Daily Digest Subscribers`. Deleting the segment stops segment targeting but does not delete contacts. If the project is fully rolled back, remove the segment and review its contacts in Resend before taking any further action.

No live newsletter was sent during implementation. The local website uses `NEWSLETTER_MOCK_SEND=true`, so local subscribe/unsubscribe tests do not call Resend.
