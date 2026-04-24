# SendOwl Newsletter Handoff

This folder is the production workspace for **Wise Words by SendOwl**, the monthly newsletter sent through Klaviyo.

Use it to draft issues, preview finished HTML, keep examples of past sends, and preserve the rules that make the newsletter sound consistent from month to month.

## Start Here

- `newsletter-guide.md`: voice, structure, production rules, and send checklist.
- `public/newsletter-template.html`: reusable HTML email template.
- `public/newsletters/`: final archived newsletter HTML files.
- `examples/`: organized working examples from past issues.
- `public/images/`: local preview images used by archived HTML.

## Monthly Workflow

1. Gather raw inputs: seller story, blog posts, product updates, creator economy news, and useful links.
2. Draft the issue in Markdown using `newsletter-guide.md`.
3. Build the email from `public/newsletter-template.html`.
4. Upload images to Klaviyo and replace local image paths with Klaviyo-hosted URLs.
5. Send a Klaviyo test email and check desktop, mobile, Gmail, Apple Mail, and Outlook when possible.
6. Save the final sent HTML into `public/newsletters/newsletter-YYYY-MM-DD.html`.
7. Save supporting drafts, checklists, and optimized images under `examples/YYYY-MM-DD/`.

## Preview App

Install dependencies once:

```bash
npm install
```

Run the local preview:

```bash
npm run dev
```

Open the local URL printed by Next.js. The homepage previews the latest archived newsletter and links to older archives.

Before handoff or a larger edit, run:

```bash
npm run build
```

## Working With Claude Code

Claude Code can work directly against this repo. A practical workflow is:

1. Ask Claude Code to draft the next issue using `newsletter-guide.md` and the examples in `examples/`.
2. Have it create a dated Markdown draft in `examples/YYYY-MM-DD/`.
3. Have it convert that draft into a finished HTML file using `public/newsletter-template.html`.
4. Preview the HTML in the Next.js app.
5. When the issue is ready, ask Claude Code to copy the final HTML to your clipboard so you can paste it into Klaviyo.

Use this phrasing when you want the clipboard path:

```text
Create the final newsletter HTML from this draft, save it to examples/YYYY-MM-DD/newsletter-YYYY-MM-DD-final.html, and copy the HTML to my clipboard for Klaviyo.
```

You can also copy the latest archived newsletter yourself:

```bash
npm run copy:newsletter
```

Or copy a specific file:

```bash
npm run copy:newsletter -- examples/YYYY-MM-DD/newsletter-YYYY-MM-DD-final.html
```

After the campaign is sent, archive the exact final HTML in `public/newsletters/newsletter-YYYY-MM-DD.html`.

## Klaviyo Rules

- Production email images should be hosted in Klaviyo, not from local paths.
- Keep `{% unsubscribe %}` in the footer.
- Set the subject line and preview text in Klaviyo, even when the HTML has a hidden preheader.
- Keep final HTML under 102 KB.
- Archive the exact final HTML after send.
