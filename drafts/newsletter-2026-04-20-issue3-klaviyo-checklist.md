# Klaviyo Upload Checklist: Wise Words Issue #3 (April 20, 2026)

Use this as a copy-paste runbook when you're ready to load the issue into Klaviyo. Everything you need is in this `drafts/` folder.

## Files

- **HTML** (paste into Klaviyo): `newsletter-2026-04-20-issue3.html`
- **Markdown** (for reference only, not for upload): `newsletter-2026-04-20-issue3.md`
- **Seller spotlight image**: `images/ff-union-guardians-kickstarter.jpg` (600×308, 65 KB)

## 1. Subject line and preview text

Paste into Klaviyo's subject line field:
```
🦉 18 years to build it. 14 minutes to fund it.
```

Paste into Klaviyo's preview text field:
```
Plus: Anthropic's $30B run rate, and the most thorough tax reference we've ever published.
```

Preview text is already inlined as a hidden preheader at the top of the HTML (first `<div>` inside `<body>`). Klaviyo should pick this up automatically, but setting it explicitly in the campaign settings is the safer path.

## 2. Create the campaign

1. Open Klaviyo → Campaigns → Create Campaign → Email
2. Select list: the Wise Words subscribers list (same one used for Issue #2)
3. Campaign name: `Wise Words by SendOwl - Issue 3 - April 20 2026`
4. Choose "Drag and Drop Editor" OR "Custom HTML" — for this newsletter, use **Custom HTML** (the template is hand-coded, and dropping it through the visual editor can break the table layout)

## 3. Paste the HTML

1. Open `newsletter-2026-04-20-issue3.html` in a text editor
2. Select all (Cmd+A) and copy
3. In Klaviyo's Custom HTML editor, paste into the HTML source view
4. Klaviyo will automatically inline the `<style>` block. That's expected.

## 4. Upload the seller spotlight image

1. In Klaviyo, go to Content → Images
2. Upload `images/ff-union-guardians-kickstarter.jpg`
3. Copy the Klaviyo-hosted URL (e.g., `https://d3k81ch9hvuctc.cloudfront.net/company/...`)
4. Back in the Custom HTML editor, find this line:
   ```
   <img src="images/ff-union-guardians-kickstarter.jpg" alt="The Guardians of the Crystal Kickstarter book by Final Fantasy Union"
   ```
5. Replace `images/ff-union-guardians-kickstarter.jpg` with the Klaviyo-hosted URL

**Do not hotlink from the SendOwl blog's Ghost CDN in production.** Email clients block external images aggressively. Klaviyo's CDN is the right host.

## 5. Verify the `{% unsubscribe %}` tag

Search the HTML for `{% unsubscribe %}`. It should appear once in the footer:
```html
<a href="{% unsubscribe %}" style="color: #6a6a8a; text-decoration: underline;">Unsubscribe</a>
```

Klaviyo renders this at send time. If it's missing, the campaign will not send (Klaviyo enforces compliance).

## 6. Preview and test

- Click Klaviyo's Preview button
- Check desktop view (email-container renders at 600px)
- Check mobile view (should stack to full-width with `@media` breakpoints)
- Specifically verify:
  - Header shows "Wise Words by SendOwl" and "April 20, 2026"
  - The Number displays `$30 billion` in large type
  - Section C reads "Hey, it's the SendOwl team!"
  - The Darryl / FF Union image loads correctly
  - All inline links open in a new tab
  - Footer shows the unsubscribe link

Send a test email to:
- Your own Gmail account
- Apple Mail (iPhone or Mac)
- Outlook (web client is fine)

Check all three for layout consistency. If something breaks in Outlook specifically, it's usually a `<div>` that should have been a `<table>`. The template is already table-based so this should render cleanly.

## 7. Final pre-send checklist

Before scheduling:

- [ ] Subject line set with 🦉 emoji prefix
- [ ] Preview text set in campaign settings
- [ ] From name: "SendOwl" (not "Dani" — this is the first issue under the team voice)
- [ ] From email: the same address used for Issue #2
- [ ] Reply-to: the same address used for Issue #2
- [ ] All images have Klaviyo-hosted URLs (no `images/` local paths remaining)
- [ ] `{% unsubscribe %}` tag is present in footer
- [ ] Total HTML size is under 102 KB (check Klaviyo's file size indicator)
- [ ] Preview tested on desktop and mobile
- [ ] Test email sent to Gmail, Apple Mail, Outlook and verified
- [ ] UTM parameters added if you track click-throughs (optional — Klaviyo adds them automatically if configured)

## 8. Schedule

- Send date: **Monday, April 20, 2026**
- Send time: match Issue #2's send time (check the Issue #2 campaign in Klaviyo for the timezone-specific slot)
- If no precedent exists, default to **9:00 AM Pacific / 12:00 PM Eastern** — standard creator newsletter slot

## 9. Post-send

After the email goes out:

- [ ] Check open rate at 24 hours (compare to Issue #1 and #2)
- [ ] Check click rate on the tax guide link (the Deep Dive's primary CTA)
- [ ] Watch for any bounce spikes or unsubscribe spikes
- [ ] Save a copy of the sent HTML to `public/newsletter-2026-04-20.html` for archive

## Notes and warnings

- **Voice shift**: This is the first issue under "The SendOwl team" byline. Section C header now reads "Hey, it's the SendOwl team!" instead of "Hey, it's Dani". The warm team voice continues throughout. If any subscriber replies asking "where's Dani", a soft response is fine — the shift is subtle by design.
- **Tax guide link**: The Deep Dive links to `https://www.sendowl.com/blog/tips-and-advice/tax-vat-basics-digital-sellers`. Verify this URL is live and resolves to the 22K-word pillar before sending. The post was published April 14 and has been updated with audit-verified patches.
- **FF Union case study**: Links to `https://www.sendowl.com/blog/seller-stories/ff-union-darryl-k`. Verify this is live (it is as of April 14).
- **Plumtree case study**: Link Stash references `https://www.sendowl.com/blog/seller-stories/julie-olsen-plumtree-baby`. This post is scheduled to publish April 16, which means it should be live by the April 20 send. If the scheduled publish slipped, this link will 404 — verify before sending.
- **Creator Economy News freshness**: The three items in this section were verified April 14. By the April 20 send date the news is 6 days old. If anything major happens in the creator economy between April 14 and April 20, swap in the newer story — the template makes it easy to find the section (marked by `<!-- SECTION H: CREATOR ECONOMY NEWS -->`).
