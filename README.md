# Daniel M. Mejia — Personal Website (Vite)

Static site with **Vite 6**, **TypeScript**, and vanilla HTML/CSS. Content lives in `src/data/` so you can extend or later move the same modules into React/Next without rewriting copy.

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

Artifacts go to `dist/` (any static host, or Vercel/Netlify with “static site” settings).

## Data files

| File | Purpose |
|------|---------|
| `src/data/courses.ts` | Course cards |
| `src/data/projects.ts` | Projects — set `status: "link"` and `href` when URLs exist |
| `src/data/publications.ts` | Publications list — optional `href` per row |
| `src/data/research.ts` | Research area cards |
| `src/data/cv.ts` | Education, skills, positions, grants; `cvPdfHref` for PDF |
| `src/data/contact.ts` | Contact rows — `active: true` and real `href` when ready |

## Assets

- Headshot: `public/daniel-mejia-headshot.png`
- CV PDF: `public/cv-daniel-mejia.pdf`

## Contact form

Submit builds a **mailto:** to `dmmejia2@utep.edu`.

## Hosting

### GitHub Pages (this repo: `website`)

1. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`; the workflow **Deploy to GitHub Pages** builds with `VITE_BASE=/website/` and publishes `dist/`.
3. Site URL: `https://dmmejia2.github.io/website/` (adjust if you rename the repo).

### Netlify / Vercel / Cloudflare Pages

Connect the repo; set **build command** to `npm run build` and **publish directory** to `dist`. Do **not** set `VITE_BASE` (defaults to `./`), or set `VITE_BASE=/` for a root deploy.

### Any static host

Run `npm run build` and upload the `dist/` folder.
