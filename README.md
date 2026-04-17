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

## GitHub Pages

If the site is not at the domain root, set `base` in `vite.config.ts` (for example `base: '/website/'` for repo `website`) and rebuild. This project currently uses `base: './'` which works for many static hosts; for GitHub **project** Pages you typically need `base: '/website/'` and deploy the contents of `dist/`.
