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

Artifacts go to `dist/` (any static host, or Vercel/Netlify with “static site” settings).

## Data files

| File | Purpose |
|------|---------|
| `src/data/courses.ts` | Course cards on Teaching |
| `src/data/impact.ts` | Impact initiatives: role, summary, outcomes, optional link |
| `src/data/publications.ts` | Publications list: optional `href` per row for DOI / ACM DL |
| `src/data/research.ts` | Research areas: agenda question + description + tags |
| `src/data/cv.ts` | Education, skills, positions, grants; `cvPdfHref` for PDF |
| `src/data/contact.ts` | Contact rows: set `active: true` and real `href` when ready |

## Assets

- Headshot: `public/daniel-mejia-headshot.png`
- CV PDF: `public/cv-daniel-mejia.pdf`

## Contact

Links render from `src/data/contact.ts` (email, LinkedIn, GitHub; Scholar when activated).

## Hosting

### GitHub Pages (this repo: `website`)

The workflow pushes **`dist/`** to the **`gh-pages`** branch (no `deploy-pages` API; avoids 404 if Actions wasn’t enabled as the Pages source).

1. Push **`main`** (or run the workflow manually). Wait for a green run.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` · Save.
4. Site: **`https://dmmejia2.github.io/website/`** (path includes `/website/`). Hard-refresh if needed.

If Actions can’t push: **Settings → Actions → General → Workflow permissions** → allow **Read and write**.

### Netlify / Vercel / Cloudflare Pages

Connect the repo; set **build command** to `npm run build` and **publish directory** to `dist`. Do **not** set `VITE_BASE` (defaults to `./`), or set `VITE_BASE=/` for a root deploy.

### Any static host

Run `npm run build` and upload the `dist/` folder.
