# Cursor Prompt — Dr. Daniel M. Mejía Personal/Professional Website

## Project Overview

Build a beautiful, responsive, fully production-ready personal and professional website for **Dr. Daniel M. Mejía**, Assistant Professor of Instruction and Program Director for the M.S. Software Engineering program at **The University of Texas at El Paso (UTEP)**. He is also the Education, Workforce, and Professional Development Lead for the Institute for Applied AI Innovation (AAII).

The site should serve students, faculty, collaborators, and industry partners. It must feel warm, approachable, human-centered, and deeply professional.

---

## Tech Stack

Use **Next.js 14 (App Router)** with **TypeScript**. Style with **Tailwind CSS**. Use **Framer Motion** for animations. Use **Google Fonts** (DM Serif Display + Plus Jakarta Sans). Deploy-ready for **Vercel** or **GitHub Pages** (static export).

Optional enhancements:
- **Resend** or **EmailJS** for the contact form
- **MDX** for a future blog/notes section
- **next/image** for optimized photo loading

---

## Design System

### Color Palette

```css
--clay:        #E8623A   /* Primary accent — warm terracotta */
--clay-light:  #F2895E   /* Hover states */
--clay-pale:   #FBE8E0   /* Backgrounds, tags */
--forest:      #2C5F4A   /* Secondary — deep green */
--forest-mid:  #3D7A61
--forest-pale: #E4F0EC
--amber:       #D4914C   /* Tertiary warm accent */
--amber-pale:  #FBF0E3
--sage:        #7A9E8E   /* Muted green */
--ink:         #1A1A2E   /* Primary dark */
--ink-soft:    #2E2E45
--stone:       #6B7280   /* Muted text */
--mist:        #F5F3EF
--cream:       #FAF8F5   /* Page background */
--white:       #FEFEFE
```

### Typography

- Display / headings: `DM Serif Display` (serif, italic variant for emphasis)
- Body / UI: `Plus Jakarta Sans` (300, 400, 500, 600 weights)

### Aesthetic Direction

Warm and approachable academic. Think: premium university press meets modern EdTech. Terracotta + forest green + cream. Generous whitespace. Staggered scroll-triggered fade-up animations. Floating chip elements in hero. No dark backgrounds except the Research section (dark ink) and Contact section (forest green).

---

## Site Structure & Pages

### 1. Navigation (Sticky)
- Logo: "Dr. Daniel M. Mejía" (serif, terracotta last name)
- Links: About · Teaching · Research · Projects · CV · Contact
- Contact = CTA button (terracotta pill)
- Blur glass effect on scroll (`backdrop-filter: blur(12px)`)
- Mobile: hamburger menu with slide-in drawer

---

### 2. Hero Section

Full-viewport landing section with two-column layout.

**Left column:**
- Green "UTEP · Department of Computer Science" badge with animated pulse dot
- Large serif heading: "Dr. Daniel M." on line 1, italic terracotta "Mejía" on line 2
- Role block (left border accent): Assistant Professor of Instruction · Program Director, M.S. Software Engineering · Education Lead, AAII
- Short bio paragraph (1–2 sentences)
- Two CTA buttons: "Research & Publications" (filled) + "Get in Touch" (outlined)
- Stat row: 6+ Courses | NSF S-STEM | ACM · IEEE · SIGCSE

**Right column:**
- Avatar card (portrait placeholder — gradient background with illustrated silhouette)
- Floating chips: "AI Education Lead" · "NSF Co-PI" · "Google Grant Recipient" — each with colored dot and subtle float animation

**Background:**
- Radial gradient blobs (terracotta tint right, forest tint left)
- Dot grid pattern overlay (subtle)

---

### 3. About Section (white background)

Two-column layout:

**Left — bio text:**
Full bio paragraphs covering:
- AAII Education & Workforce Lead role
- Assistant Professor + M.S. Program Director role
- AI-integrated education mission
- Partnerships: Google, CAHSI, GenAI in CS Education Consortium
- NSF S-STEM Co-PI; multi-year Google grant
- Curriculum innovations: Applied Agile Software Development; Fundamentals of Financial Literacy
- Research: GenAI in CS ed, data-driven learning — featured in ACM SIGCSE, ITiCSE, IEEE Smart Cities
- UTEP alumnus (B.S., M.S., Ph.D. in Computer Science)
- Proud commitment to mentoring and socially impactful innovation

Tag pills below: Generative AI · Software Engineering · CS Education · Workforce Development · Hispanic-Serving Institution · UTEP Alumnus

**Right — highlight cards (4 cards):**
1. NSF S-STEM Award — Co-PI
2. Google Grant Recipient (multi-year)
3. Curriculum Innovation (Agile + Financial Literacy courses)
4. CAHSI & Industry Partnerships

Each card: colored icon background, bold title, brief description, hover lift + shadow.

---

### 4. Teaching Section (cream background)

Grid of course cards (auto-fill, min 300px). One colored top-border strip per card (rotating through clay, forest, amber, sage).

**Courses:**

| Code | Title | Level |
|---|---|---|
| CS 1301 | Introduction to Computing | UG · Lower Division |
| CS 2302 | Data Structures | UG · Core |
| CS 3331 | Advanced Object-Oriented Programming | UG · Upper Division |
| CS 3195 | Applied Agile Software Development | UG · Upper Division |
| CS 4381 / 5381 | Topics in Software Engineering | UG + Graduate |
| CS 5389 | Graduate Topics in Computer Science | Graduate |

Each card: course number, serif title, description, level badge. Hover: lift + shadow.

---

### 5. Research Section (dark ink background)

Dark section with light text.

**4-card grid — Research Areas:**
1. Generative AI in CS Education
2. Data-Driven Learning & Analytics
3. Workforce Development & Equity (HSI focus)
4. Software Engineering Education

Each card: semi-transparent background, tag pills, hover border highlight (terracotta glow).

**Selected Publications list below:**
Three publications (styled with venue badge + title + details):
- ACM SIGCSE — GenAI in CS Education
- ACM ITiCSE — Data-Driven Learning Design
- IEEE Smart Cities — Smart Cities & Computing Education

Note: Publications should be loaded from a JSON/MDX data file so they're easy to update.

---

### 6. Projects Section (cream background)

Grid of project cards. Each card: emoji icon, title, description, link button (or "Coming soon" dashed badge).

**Projects (all TBA — use placeholder structure):**
1. AI Innovation Institute (AAII) — institutional link
2. CS 2302 Course Hub — student resource
3. M.S. Software Engineering Program — program info
4. GenAI in CS Education Consortium — collaborative initiative
5. NSF S-STEM Initiative — scholarship program
6. +1 placeholder "More coming soon" card (dashed border)

**Important:** Projects should be driven from a `data/projects.ts` config file so Daniel can easily add/update URLs and descriptions without touching component code.

---

### 7. CV Section (white background)

Two-column layout with sidebar + main content.

**Sidebar:**
- Education (B.S., M.S., Ph.D. — all UTEP)
- Key skills (tag chips)
- Download CV button (PDF link)

**Main:**
- Academic Positions (Assistant Professor · AAII Lead · Program Director)
- Grants & Awards (NSF S-STEM · Google Grant)

---

### 8. Contact Section (forest green background)

Two-column layout.

**Left — contact info:**
- Intro paragraph
- Clickable contact links (email, LinkedIn, GitHub, Google Scholar) — with icons, each as a styled row with hover slide-right effect
- Email: dmmejia@utep.edu (only confirmed detail; others TBA)

**Right — contact form:**
- Name, Email, "I am a..." dropdown, Message textarea
- Submit button (terracotta)
- Wire to Resend or EmailJS (add .env.local setup instructions in README)

---

### 9. Footer

Dark ink background. Logo left, copyright center, tagline right.

---

## Animations & Interactions

- **Page load:** Hero content fades up staggered (badge → name → role → bio → buttons → stats)
- **Scroll-triggered:** All section content uses `IntersectionObserver` (or Framer Motion `whileInView`) for fade-up reveals
- **Floating chips:** CSS keyframe float animation, each with different delay
- **Hover states:** Cards lift 4–6px with enhanced shadow; links underline from left; buttons scale slightly
- **Nav:** Smooth backdrop blur appears after 40px scroll
- **Mobile:** All layouts collapse to single column; nav becomes hamburger drawer

---

## File Structure

```
/app
  /page.tsx              ← main single-page layout
  /layout.tsx            ← font imports, metadata
/components
  /Nav.tsx
  /Hero.tsx
  /About.tsx
  /Teaching.tsx
  /Research.tsx
  /Projects.tsx
  /CV.tsx
  /Contact.tsx
  /Footer.tsx
/data
  /courses.ts            ← course list config
  /projects.ts           ← project links config (easy to update)
  /publications.ts       ← publications list
  /cv.ts                 ← CV entries
/public
  /placeholder-avatar.svg
  /cv-daniel-mejia.pdf   ← placeholder, replace with real CV
/styles
  /globals.css           ← Tailwind base + CSS variables
```

---

## README Instructions

Include setup instructions for:
1. `npm install` + `npm run dev`
2. How to update projects in `data/projects.ts`
3. How to add publications in `data/publications.ts`
4. How to wire contact form with Resend or EmailJS (`.env.local` variables)
5. How to swap in a real headshot (replace `public/placeholder-avatar.svg`)
6. Deployment to Vercel or GitHub Pages (static export)

---

## Additional Notes

- All sections must be fully accessible (ARIA labels, keyboard navigation, skip-to-content link)
- Images use `next/image` with proper alt text
- SEO: metadata in `layout.tsx` — name, title, description, OpenGraph
- Colors are defined as Tailwind custom tokens in `tailwind.config.ts` matching the palette above
- The site must look beautiful at 320px (mobile), 768px (tablet), and 1440px (desktop)
- Contact info is partially TBA — use placeholder structure that's clearly marked for easy update
