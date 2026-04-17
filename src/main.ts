import "./styles/main.css";
import { courses } from "./data/courses";
import { projects } from "./data/projects";
import { publications } from "./data/publications";
import { researchAreas } from "./data/research";
import { cvPdfHref, education, grants, positions, serviceEntries, skills } from "./data/cv";
import { contactLinks } from "./data/contact";

const PAGE_SLUGS = ["home", "about", "teaching", "research", "projects", "cv", "contact"] as const;
type PageSlug = (typeof PAGE_SLUGS)[number];

/** Hero tagline rotation (HTML is trusted; only <strong> used). */
const HERO_DESC_BLURBS: string[] = [
  "NSF S-STEM <strong>co-PI</strong> (~$4.98M, Sep 2022 – Aug 2028), <strong>PI</strong> on Google exploreCSR and TensorFlow awards, and <strong>CAHSI Lead</strong> for the GenAI in CS Education Consortium — connecting agile software engineering education, generative AI scholarship, and pathways for students at a Hispanic-Serving Institution.",
  "I teach core CS from <strong>first-year computing</strong> through our software engineering practicum—data structures, agile development, and professional orientation. My research spans <strong>agile-centered software engineering education</strong>, <strong>generative AI</strong> in the classroom, and earlier smart-city / knowledge-graph scholarship from my graduate work.",
  "I lead active <strong>PI-led studies</strong> on professional competencies in CS 4381, CS 5381, and CS 5389, and a UTEP <strong>generative AI</strong> study with M. Frias and N. Villanueva-Rosales. I am <strong>co-PI</strong> on NSF S-STEM with S. Salamah and M. Martin and was <strong>PI</strong> on Google exploreCSR ($24K) and TensorFlow ($6K) awards.",
  "From 2020–2024 I was <strong>Visiting Assistant Professor</strong> at UTEP, where I developed the <strong>Applied Agile Software Engineering</strong> curriculum, served as <strong>Google Faculty in Residence</strong> and Academic Lead for UTEP/Google Tech Exchange, and co-led the UTEP/VISA Financial Literacy course team. Recent publications include <strong>SIGCSE and ITiCSE 2025</strong> on GenAI in software engineering; an ITiCSE 2026 poster is accepted. I am a triple UTEP alumnus (B.S. cum laude, M.S., Ph.D.).",
  "I coordinate <strong>50+ teaching assistants</strong> each semester as TA Coordinator, support graduate programs including Fast Track, advise the Coding Interview Club, and serve as CodePath institutional liaison—alongside committee work from software-course leadership to the university Tech Enhanced Learning board. I care most about inclusive, industry-connected computing education at an <strong>HSI</strong> on the U.S.–Mexico border.",
];

function normalizePageSlug(raw: string): PageSlug {
  const s = raw.replace(/^#/, "").trim().toLowerCase();
  if ((PAGE_SLUGS as readonly string[]).includes(s)) return s as PageSlug;
  return "home";
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Block dangerous URL schemes in user-controlled or data-file hrefs rendered into the DOM. */
function safeHref(href: string): string {
  const u = href.trim();
  if (!u) return "#";
  const lower = u.split(/[#?]/)[0]!.toLowerCase();
  if (
    lower.startsWith("javascript:") ||
    lower.startsWith("data:") ||
    lower.startsWith("vbscript:") ||
    lower.startsWith("file:")
  ) {
    return "#";
  }
  return href;
}

function renderCourses(): void {
  const root = document.getElementById("courses-grid");
  if (!root) return;
  root.innerHTML = courses
    .map(
      (c) => `
    <article class="course-card c-${c.accent} fade-up">
      <div class="course-code">${escapeHtml(c.code)}</div>
      <div class="course-name">${escapeHtml(c.title)}</div>
      <p class="course-desc">${escapeHtml(c.description)}</p>
      <span class="course-level">${escapeHtml(c.level)}</span>
    </article>
  `,
    )
    .join("");
}

function renderProjects(): void {
  const root = document.getElementById("projects-grid");
  if (!root) return;
  const cards = projects.map((p) => {
    const icon = `<div class="proj-icon" aria-hidden="true">${escapeHtml(p.icon)}</div>`;
    const body = `
      ${icon}
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.description)}</p>
    `;
    if (p.status === "link" && p.href) {
      const href = safeHref(p.href);
      return `
        <a class="project-card fade-up" href="${escapeHtml(href)}" rel="noopener noreferrer" target="_blank">
          ${body}
          <div class="proj-footer">
            <span class="proj-status live">${escapeHtml(p.linkLabel ?? "Open")}</span>
            <div class="proj-arrow" aria-hidden="true">→</div>
          </div>
        </a>
      `;
    }
    return `
      <article class="project-card fade-up">
        ${body}
        <div class="proj-footer">
          <span class="proj-status tba">Coming soon</span>
          <div class="proj-arrow" aria-hidden="true">→</div>
        </div>
      </article>
    `;
  });
  cards.push(`
    <div class="project-card proj-add fade-up">
      <div class="proj-add-icon" aria-hidden="true">+</div>
      <div class="proj-add-text">More projects coming soon</div>
    </div>
  `);
  root.innerHTML = cards.join("");
}

function renderResearch(): void {
  const root = document.getElementById("research-grid");
  if (!root) return;
  root.innerHTML = researchAreas
    .map(
      (r) => `
    <div class="r-card fade-up">
      <h3>${escapeHtml(r.title)}</h3>
      <p>${escapeHtml(r.description)}</p>
      <div class="r-tags">${r.tags.map((t) => `<span class="r-tag">${escapeHtml(t)}</span>`).join("")}</div>
    </div>
  `,
    )
    .join("");
}

function renderPublications(): void {
  const root = document.getElementById("publications-list");
  if (!root) return;
  root.innerHTML = publications
    .map((pub) => {
      const pubHref = pub.href ? safeHref(pub.href) : "";
      const titleInner = pubHref
        ? `<a class="pub-title pub-title-link" href="${escapeHtml(pubHref)}" rel="noopener noreferrer" target="_blank">${escapeHtml(pub.title)}</a>`
        : `<div class="pub-title">${escapeHtml(pub.title)}</div>`;
      const badge = escapeHtml(pub.venue).replace(/\s+/g, "<br />");
      return `
      <article class="pub-item fade-up">
        <div class="pub-badge">${badge}</div>
        <div>
          ${titleInner}
          <div class="pub-meta">${escapeHtml(pub.details)}</div>
        </div>
      </article>
    `;
    })
    .join("");
}

function iconSvg(kind: string): string {
  switch (kind) {
    case "email":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`;
    case "linkedin":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14h-2v-6H8v-2h4V9a4 4 0 0 1 4-4h2v2h-2a2 2 0 0 0-2 2v2h4l-1 2h-3v6z"/></svg>`;
    case "github":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
    case "scholar":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" opacity="0.9" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/></svg>`;
    default:
      return "";
  }
}

function renderContactLinks(): void {
  const root = document.getElementById("contact-links-root");
  if (!root) return;
  root.innerHTML = contactLinks
    .map((c) => {
      const inner = `
        <div class="c-icon">${iconSvg(c.kind)}</div>
        <div class="c-text">
          <strong>${escapeHtml(c.label)}</strong>
          <span>${escapeHtml(c.sublabel)}</span>
        </div>
      `;
      if (c.active) {
        const href = safeHref(c.href);
        const external = /^https?:\/\//i.test(href);
        const extra = external ? ' rel="noopener noreferrer" target="_blank"' : "";
        return `<a class="c-link" href="${escapeHtml(href)}"${extra}>${inner}</a>`;
      }
      return `<div class="c-link c-link--static">${inner}</div>`;
    })
    .join("");
}

function renderCv(): void {
  const root = document.getElementById("cv-layout-root");
  if (!root) return;

  const eduHtml = education
    .map(
      (e) => `
    <div class="cv-entry">
      <div class="cv-degree">${escapeHtml(e.degree)}</div>
      <div class="cv-school">${escapeHtml(e.school)}</div>
      <div class="cv-year">${escapeHtml(e.year)}</div>
      ${e.detail ? `<p class="cv-entry-detail">${escapeHtml(e.detail)}</p>` : ""}
    </div>
  `,
    )
    .join("");

  const skillsHtml = skills.map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`).join("");

  const positionsHtml = positions
    .map(
      (p) => `
    <div class="cv-entry">
      <div class="cv-entry-head">
        <span class="cv-entry-title">${escapeHtml(p.title)}</span>
        <span class="cv-year">${escapeHtml(p.period)}</span>
      </div>
      <div class="tl-org">${escapeHtml(p.org)}</div>
      ${p.body ? `<p class="tl-desc">${escapeHtml(p.body)}</p>` : ""}
    </div>
  `,
    )
    .join("");

  const serviceHtml = serviceEntries
    .map(
      (s) => `
    <div class="cv-entry">
      <div class="cv-entry-head">
        <span class="cv-entry-title">${escapeHtml(s.title)}</span>
        <span class="cv-year">${escapeHtml(s.period)}</span>
      </div>
      <div class="tl-org">${escapeHtml(s.org)}</div>
      ${s.body ? `<p class="tl-desc">${escapeHtml(s.body)}</p>` : ""}
    </div>
  `,
    )
    .join("");

  const grantsHtml = grants
    .map(
      (g) => `
    <div class="cv-entry cv-entry-grant">
      <div class="cv-entry-head">
        <span class="cv-entry-title">${escapeHtml(g.title)}</span>
        <span class="cv-year">${escapeHtml(g.period)}</span>
      </div>
      ${g.role ? `<p class="cv-grant-role">${escapeHtml(g.role)}</p>` : ""}
      <div class="tl-org">${escapeHtml(g.org)}</div>
      ${g.amount ? `<div class="grant-amount" aria-label="Award budget">${escapeHtml(g.amount)}</div>` : ""}
      ${g.body ? `<p class="tl-desc">${escapeHtml(g.body)}</p>` : ""}
    </div>
  `,
    )
    .join("");

  root.innerHTML = `
    <div class="cv-sidebar">
      <div class="cv-block">
        <div class="cv-block-title">Education</div>
        ${eduHtml}
      </div>
      <div class="cv-block">
        <div class="cv-block-title">Technical Skills</div>
        <div class="skill-tags">${skillsHtml}</div>
      </div>
      <a class="cv-dl" href="${escapeHtml(safeHref(cvPdfHref))}" download>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 12l-4-4h2.5V4h3v4H12L8 12zM2 13h12v1.5H2V13z"/></svg>
        Download Full CV (PDF)
      </a>
    </div>
    <div class="cv-main">
      <div class="cv-section">
        <div class="cv-section-title">Academic &amp; Professional Experience</div>
        ${positionsHtml}
      </div>
      <div class="cv-section">
        <div class="cv-section-title">University &amp; Departmental Service</div>
        ${serviceHtml}
      </div>
      <div class="cv-section">
        <div class="cv-section-title">Grants &amp; Sponsored Projects</div>
        ${grantsHtml}
      </div>
    </div>
  `;
}

function applyPage(slug: PageSlug): void {
  document.querySelectorAll(".page").forEach((panel) => {
    const id = panel.id.replace(/^page-/, "");
    const on = id === slug;
    panel.classList.toggle("is-active", on);
    panel.toggleAttribute("hidden", !on);
    panel.setAttribute("aria-hidden", on ? "false" : "true");
  });

  document.querySelectorAll("#nav-links [data-page], .nav-brand[data-page]").forEach((el) => {
    const link = el as HTMLAnchorElement;
    const p = link.getAttribute("data-page");
    const on = p === slug;
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
    link.classList.toggle("nav-link--active", on);
  });

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  bindFadeUpForActivePage();
}

let fadeUpObserver: IntersectionObserver | null = null;

function bindFadeUpForActivePage(): void {
  fadeUpObserver?.disconnect();
  fadeUpObserver = null;

  const active = document.querySelector(".page.is-active");
  if (!active) return;

  fadeUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          setTimeout(() => el.classList.add("visible"), i * 50);
          fadeUpObserver?.unobserve(el);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
  );

  active.querySelectorAll(".fade-up:not(.visible)").forEach((el) => fadeUpObserver!.observe(el));
}

function setupPageRouter(): void {
  const go = (slug: PageSlug, opts?: { replace?: boolean }): void => {
    const url = `${window.location.pathname}${window.location.search}#${slug}`;
    if (opts?.replace) history.replaceState({ page: slug }, "", url);
    else history.pushState({ page: slug }, "", url);
    applyPage(slug);
  };

  const raw = window.location.hash.slice(1).toLowerCase();
  const initial = normalizePageSlug(window.location.hash.slice(1));
  if (!window.location.hash || window.location.hash === "#" || raw !== initial) {
    go(initial, { replace: true });
  } else {
    applyPage(initial);
  }

  document.body.addEventListener("click", (e) => {
    const t = (e.target as Element).closest("[data-page]");
    if (!t || !(t instanceof HTMLAnchorElement)) return;
    const slug = t.getAttribute("data-page");
    if (!slug) return;
    const normalized = normalizePageSlug(slug);
    e.preventDefault();
    go(normalized);
    const drawer = document.getElementById("nav-drawer");
    const toggle = document.getElementById("nav-toggle");
    if (drawer?.classList.contains("is-open")) {
      drawer.classList.remove("is-open");
      document.getElementById("nav-overlay")?.classList.remove("is-visible");
      document.body.classList.remove("menu-open");
      const overlay = document.getElementById("nav-overlay");
      if (overlay) {
        overlay.hidden = true;
        overlay.setAttribute("aria-hidden", "true");
      }
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.setAttribute("aria-label", "Open menu");
    }
  });

  window.addEventListener("popstate", () => {
    applyPage(normalizePageSlug(window.location.hash.slice(1)));
  });
}

function setupNav(): void {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("nav-overlay");

  window.addEventListener("scroll", () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  function setOpen(open: boolean): void {
    toggle?.setAttribute("aria-expanded", String(open));
    drawer?.classList.toggle("is-open", open);
    overlay?.classList.toggle("is-visible", open);
    document.body.classList.toggle("menu-open", open);
    if (overlay) {
      overlay.hidden = !open;
      overlay.setAttribute("aria-hidden", String(!open));
    }
    if (toggle) toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  overlay?.addEventListener("click", () => setOpen(false));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function setupContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const note = document.getElementById("form-note");
  if (!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const role = String(fd.get("role") ?? "");
    const message = String(fd.get("message") ?? "").trim();
    if (!name || !email || !message) {
      note.textContent = "Please fill in name, email, and message.";
      return;
    }
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nI am: ${role}\n\n${message}\n`);
    note.textContent = "Opening your email app…";
    window.location.href = `mailto:dmmejia2@utep.edu?subject=${subject}&body=${body}`;
  });
}

function setFooterYear(): void {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupHeroDescRotation(): void {
  const inner = document.getElementById("hero-desc-inner");
  if (!inner || HERO_DESC_BLURBS.length < 2) return;

  const prefersReduced =
    typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  inner.innerHTML = HERO_DESC_BLURBS[0];
  let i = 0;
  const intervalMs = 6500;
  const fadeMs = 400;

  const step = (): void => {
    inner.classList.add("is-out");
    window.setTimeout(() => {
      i = (i + 1) % HERO_DESC_BLURBS.length;
      inner.innerHTML = HERO_DESC_BLURBS[i];
      inner.classList.remove("is-out");
    }, fadeMs);
  };

  window.setInterval(step, intervalMs);
}

function setupBackToTop(): void {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const prefersReducedMotion = (): boolean =>
    typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const update = (): void => {
    const show = window.scrollY > 520;
    btn.classList.toggle("is-visible", show);
    if (show) btn.removeAttribute("hidden");
    else btn.setAttribute("hidden", "");
  };

  window.addEventListener("scroll", update, { passive: true });
  update();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    btn.focus({ preventScroll: true });
  });
}

renderCourses();
renderProjects();
renderResearch();
renderPublications();
renderCv();
renderContactLinks();
setupNav();
setupPageRouter();
setupContactForm();
setFooterYear();
setupBackToTop();
setupHeroDescRotation();
