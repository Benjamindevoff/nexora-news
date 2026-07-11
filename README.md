# Nexora News

Professional English-language news network demo built with Next.js App Router,
TypeScript and Tailwind CSS. It is configured for Vercel and for the custom
domain `nexoranews.xyz`.

## Included

- Responsive editorial homepage with dark mode
- AI, Cybersecurity, Programming, Politics, World News, Opinion and Latest routes
- Article pages with labels, sources, related stories and sharing controls
- Search, newsletter validation, cookie consent and advertising placeholders
- About, Contact, Editorial, Corrections, Privacy, Terms, Cookies, Ethics,
  Advertising and DMCA pages
- Demonstration newsroom at `/admin`
- `sitemap.xml`, Google News sitemap, `robots.txt`, RSS and JSON-LD
- Baseline security headers

All sample stories are clearly labeled as fictional demonstration content.

## Local development

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production validation

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep **Framework Preset: Next.js**, the root directory `/`, and the default
   `npm run build` command.
4. Deploy. The current demonstration does not require environment variables.
5. In **Project → Settings → Domains**, add `nexoranews.xyz` and
   `www.nexoranews.xyz`.
6. Copy the exact DNS records Vercel displays into the dashboard of the domain
   registrar. Preserve MX and TXT records if the domain is used for email.
7. Choose one hostname as primary and redirect the other to it.

## Production backend

The current `/admin`, newsletter and contact flows are frontend demonstrations.
Before accepting real users or publishing live reporting, connect Supabase
authentication, database and storage. Store server-only keys in Vercel
Environment Variables and never expose a Supabase service-role key with a
`NEXT_PUBLIC_` prefix.
