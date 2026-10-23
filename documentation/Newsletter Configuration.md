# Newsletter configuration

The website and the Resend Broadcast workflow use one active-newsletter configuration. To switch to another newsletter, change the `NEWSLETTER_*` values in the local `.env.local` file used by the scheduled task and in the production environment, then redeploy the website.

## Values to change

```text
NEWSLETTER_NAME
NEWSLETTER_DESCRIPTION
NEWSLETTER_PAGE_TITLE
NEWSLETTER_FREQUENCY
NEWSLETTER_BRAND
NEWSLETTER_STRAPLINE
NEWSLETTER_PREFERENCES_URL
NEWSLETTER_SEGMENT_ID
```

`NEWSLETTER_SEGMENT_ID` is the Resend segment that receives confirmed subscribers and Broadcasts. The old `RESEND_DAILY_DIGEST_SEGMENT_ID` variable remains as a backward-compatible fallback, but new newsletters should use `NEWSLETTER_SEGMENT_ID`.

The sender and reply-to address are also configurable with `NEWSLETTER_FROM_EMAIL` and `NEWSLETTER_REPLY_TO`. The confirmation secret and Resend API key do not need to change when switching lists.

## What changes automatically

- The subscribe page, consent text, confirmation emails, unsubscribe messages, and status messages use the configured newsletter name.
- Confirmed contacts are added to the configured Resend segment.
- Unsubscribe confirmations remove contacts from that segment only.
- The scheduled Broadcast targets the configured segment and uses the configured name and branding.

Changing the editorial subject matter requires updating the digest automation’s research instruction or selecting the appropriate digest skill. The subscription, confirmation, Resend, and delivery code does not need to change.
