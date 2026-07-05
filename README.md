# Yashrajsinh Jadeja — Portfolio

A personal portfolio for **Yashrajsinh Jadeja** (Full Stack Developer & Team
Lead), built with **Next.js (App Router)** and deployed on **Vercel**.
Server-rendered with dynamic SEO — per-route metadata, structured data, a
generated sitemap/robots/manifest, dynamic Open Graph images, and a server-side
contact form.

No third-party styling libraries: every component is hand-built with **CSS
Modules** and CSS-variable design tokens. Fonts are self-hosted via `next/font`.

## Tech stack

- **Next.js 15** (App Router, SSR) + **React 19** + **TypeScript** (strict)
- **CSS Modules** + design tokens (`src/app/globals.css`) — no Tailwind / styled-components / Bootstrap
- **next/font** — self-hosted Space Grotesk, IBM Plex Sans, IBM Plex Mono
- **next/og** — dynamically generated OG / Twitter images
- **Nodemailer** — contact-form email via the `/api/contact` route

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## Environment variables

Set these in `.env.local` for local dev and in your Vercel project settings.

| Variable               | Purpose                                                              |
| ---------------------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL for SEO. On Vercel it falls back to the production domain if unset, but set it explicitly. |
| `SMTP_HOST`            | SMTP server host (e.g. `smtp.gmail.com`)                            |
| `SMTP_PORT`            | SMTP port (`465` SSL / `587` STARTTLS)                              |
| `SMTP_SECURE`          | `true` for port 465, else `false`                                  |
| `SMTP_USER`            | SMTP username / sending address                                     |
| `SMTP_PASS`            | SMTP password — for Gmail use an **App Password**                   |
| `CONTACT_TO`           | Where contact messages are delivered                               |
| `CONTACT_FROM`         | `From` header on delivered messages                                |

> Keep secrets in `.env.local` (git-ignored) and in Vercel — never in
> `.env.example` (which holds placeholders only). If SMTP is unset, the contact
> API returns a friendly error and the form degrades gracefully.

## Deployment (Vercel)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new) — Vercel
   auto-detects Next.js (build `next build`, no extra config).
2. Add the environment variables above (Production + Preview).
3. Every push to `main` deploys automatically; PRs get preview URLs.

Uses SSR + serverless functions (the `/api/contact` route) + on-demand image
optimization — all native on Vercel, no configuration needed.

## SEO

- **Per-route metadata** via `generateMetadata` — each `/projects/[slug]` case
  study gets a unique title/description/canonical/OG.
- **JSON-LD** — `Person` + `WebSite` on the home page, `CreativeWork` +
  `BreadcrumbList` on project pages.
- **`sitemap.xml`**, **`robots.txt`**, **`manifest.webmanifest`** — generated
  from the project data.
- **Open Graph images** for the home page and every project, rendered with `next/og`.

## Editing content

All content lives in one typed file: **`src/data/portfolio.ts`** (profile,
snapshot, skills, experience, projects, awards, education, languages). The home
page, project routes, sitemap, and OG images read from it — edit once, update
everywhere. Case studies are keyed by `slug` (the `/projects/<slug>` URL).

Assets: `public/awards/*.webp` and `public/Yashrajsinh_Jadeja_Resume.pdf`.

## Project structure

```
src/
  app/
    layout.tsx              root layout: fonts, base metadata, Nav + Footer
    page.tsx                home page (all sections + Person/WebSite JSON-LD)
    globals.css             design tokens, reset, keyframes
    opengraph-image.tsx     home OG image
    twitter-image.tsx       re-uses the OG image
    sitemap.ts robots.ts manifest.ts   generated SEO routes
    not-found.tsx           styled 404
    api/contact/route.ts    contact email endpoint (Nodemailer)
    projects/[slug]/
      page.tsx              case-study page (generateStaticParams + generateMetadata)
      opengraph-image.tsx   per-project OG image
  components/               Nav, Hero, Snapshot, About, Skills, Experience,
                            Projects, Awards, EducationLanguages, Contact,
                            Footer, Modal/*, Interactions  (each with a .module.css)
  context/ModalContext.tsx  case-study / award modal state
  data/portfolio.ts         single source of truth for all content
  lib/                      site.ts (config), seo.ts, jsonld.ts, og.tsx
```
