# Dr. Daniel M. Mejía — Personal Website (Vite)

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

## Colors

The palette is defined as CSS variables at the top of `src/styles/main.css` (`:root`). Current theme: **violet** accent, **deep teal** secondary, **brass** highlights, **gallery-white** paper, and **ink** type (no coral or orange primaries). Adjust those tokens to re-theme the whole site.

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

- Headshot: replace `public/placeholder-avatar.svg` or point the hero `<img>` in `index.html` to your file.
- CV PDF: `public/cv-daniel-mejia.pdf` is the site copy of your dossier (October 2025). Replace that file when you update the CV and refresh grants, publications, and positions in `src/data/` as needed.

## Contact form

Submit builds a **mailto:** to `dmmejia2@utep.edu`. For Resend or EmailJS, add a small backend or serverless function and replace the handler in `src/main.ts` (`setupContactForm`).

## GitHub Pages

If the site is not at the domain root, set `base` in `vite.config.ts` (for example `base: '/your-repo/'`) and rebuild.
