# Daniel M. Mejia | Personal Website (Vite)

Static site with **Vite 6**, **TypeScript**, and vanilla HTML/CSS. Hybrid multipage layout: brand-led Home plus deep pages for About, Teaching, Research, Impact, CV, and Contact. Content lives in `src/data/` so you can update copy without touching layout code.

## Commands

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Artifacts go to `dist/`.

## Data files

| File | Purpose |
|------|---------|
| `src/data/courses.ts` | Course cards on Teaching |
| `src/data/impact.ts` | Impact initiatives: tier, role, summary, outcomes, optional link |
| `src/data/studies.ts` | Active IRB / sponsored studies on Research |
| `src/data/publications.ts` | Publications list: optional `href` per row for DOI / ACM DL |
| `src/data/research.ts` | Research areas: agenda question + description + tags |
| `src/data/cv.ts` | Education, skills, positions, grants; `cvPdfHref` for PDF |
| `src/data/now.ts` | Dated updates (home preview + `#updates`) |
| `src/data/students.ts` | Office hours + advising pathways |
| `src/data/contact.ts` | Contact rows and form audiences |

## Assets

- Headshot: `public/daniel-mejia-headshot.png`
- CV PDF: `public/cv-daniel-mejia.pdf`

## Contact

Links render from `src/data/contact.ts` (email, LinkedIn, GitHub, Google Scholar).

## Hosting (Vercel)

Connect the repo in Vercel. `vercel.json` sets **framework** to Vite, **build command** to `npm run build`, and **output directory** to `dist`. Leave **Root Directory** as the repo root.

After the first deploy, optionally attach a custom domain in the Vercel dashboard. Then set absolute `og:url`, `og:image`, `canonical`, and JSON-LD URLs in `index.html` to that origin (social crawlers prefer absolute URLs).
