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

The workflow pushes **`dist/`** to the **`gh-pages`** branch (no `deploy-pages` API — avoids404 if Actions wasn’t enabled as the Pages source).

1. Push **`main`** (or run the workflow manually). Wait for a green run.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` · Save.
4. Site: **`https://dmmejia2.github.io/website/`** (path includes `/website/`). Hard-refresh if needed.

If Actions can’t push: **Settings → Actions → General → Workflow permissions** → allow **Read and write**.

### Netlify / Vercel / Cloudflare Pages

Connect the repo; set **build command** to `npm run build` and **publish directory** to `dist`. Do **not** set `VITE_BASE` (defaults to `./`), or set `VITE_BASE=/` for a root deploy.

### Any static host

Run `npm run build` and upload the `dist/` folder.
