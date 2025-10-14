# Career Advice Consultancy — Next.js (App Router) + Tailwind

A modern marketing site with built-in SEO metadata and a contact API route.

## Quick Start

```bash
npm install
npm run dev
```

## Files
- `app/layout.tsx` — global SEO metadata (OpenGraph, Twitter, canonical)
- `app/page.tsx` — the single-page site (client component)
- `app/api/contact/route.ts` — POST endpoint for contact form
- `app/globals.css` — Tailwind styles
- `tailwind.config.ts`, `postcss.config.js` — Tailwind setup

## Deployment
Deploy to Vercel (recommended) or any Node host. Set `metadataBase` in `app/layout.tsx` to your real domain.

## Customise
- Update contact details in `app/page.tsx` (Contact section).
- Replace `/public/og-image.png` and `/public/favicon.ico` with real assets.
- Adjust brand colours by changing Tailwind classes.
