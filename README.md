# Nexora — Company Website

Landing page for **Nexora AI & Software Technologies Ltd.** Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide icons.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Configuration

Copy `.env.example` to `.env.local` and fill in verified details only:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL, used for canonical and Open Graph links |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Enables the contact form (opens the visitor's email app) and shows the email in the footer |
| `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_X_URL` | Social links. Each one is hidden while blank |

These values are inlined at build time, so rebuild after changing them.

## Content

- Copy for services, impact areas, the process and projects lives in `src/lib/content.ts`.
- **Projects:** add entries with `status: "prototype"` or `"live"`, an optional `image` (put files in `public/projects/`) and an optional `href`. Once any entry is not `"exploring"`, the section heading switches to "Selected work".
- **Logo:** `src/components/logo.tsx` and `src/app/icon.svg` contain a temporary mark. Replace both with the official artwork when it is available.

## Structure

```
src/app/            layout (metadata, fonts), page, icon, Open Graph image
src/components/     header, footer, logo, UI primitives, illustrations
src/components/sections/  hero, services, solutions, approach, about, work, contact
src/lib/            site config and page content
```
