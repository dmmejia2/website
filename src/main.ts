import "./styles/main.css";
import { courses } from "./data/courses";
import { impactInitiatives } from "./data/impact";
import { publications } from "./data/publications";
import { researchAreas } from "./data/research";
import { activeStudies } from "./data/studies";
import {
  cvPdfHref,
  education,
  externalServiceEntries,
  grants,
  positions,
  serviceEntries,
  skills,
} from "./data/cv";
import { contactLinks } from "./data/contact";

const PAGE_SLUGS = ["home", "about", "teaching", "research", "impact", "cv", "contact"] as const;
type PageSlug = (typeof PAGE_SLUGS)[number];

/** Old hash redirects so bookmarked #projects still works. */
const PAGE_ALIASES: Record<string, PageSlug> = {
  projects: "impact",
};

function normalizePageSlug(raw: string): PageSlug {
  const s = raw.replace(/^#/, "").trim().toLowerCase();
  if (s in PAGE_ALIASES) return PAGE_ALIASES[s]!;
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
    .map((c) => {
      const timesLabel =
        c.timesTaught === 1 ? "Taught 1 time" : `Taught ${c.timesTaught} times`;
      const timesExtra = c.timesNote ? ` · ${escapeHtml(c.timesNote)}` : "";
      return `
    <article class="course-card c-${c.accent} fade-up">
      <div class="course-code">${escapeHtml(c.code)}</div>
      <div class="course-name">${escapeHtml(c.title)}</div>
      <p class="course-desc">${escapeHtml(c.description)}</p>
      <div class="course-meta">
        <span class="course-level">${escapeHtml(c.level)}</span>
        <span class="course-times">${timesLabel}${timesExtra}</span>
      </div>
    </article>
  `;
    })
    .join("");
}

function impactArticleHtml(item: (typeof impactInitiatives)[number], extraClass = ""): string {
  const link =
    item.href && item.linkLabel
      ? `<a class="impact-link" href="${escapeHtml(safeHref(item.href))}" rel="noopener noreferrer" target="_blank">${escapeHtml(item.linkLabel)} →</a>`
      : "";
  const featured = item.tier === "featured" ? " impact-item--featured" : "";
  return `
      <article class="impact-item${featured}${extraClass ? ` ${extraClass}` : ""} fade-up">
        <span class="impact-role">${escapeHtml(item.role)}</span>
        <h3 class="impact-title">${escapeHtml(item.title)}</h3>
        <p class="impact-summary">${escapeHtml(item.summary)}</p>
        <p class="impact-outcomes">${escapeHtml(item.outcomes)}</p>
        ${link}
      </article>
    `;
}

function renderImpact(): void {
  const root = document.getElementById("impact-list");
  const toolsWrap = document.getElementById("impact-tools");
  const toolsList = document.getElementById("impact-tools-list");
  if (!root) return;

  const main = impactInitiatives.filter((i) => (i.tier ?? "standard") !== "tool");
  const tools = impactInitiatives.filter((i) => i.tier === "tool");

  const featured = main.filter((i) => i.tier === "featured");
  const rest = main.filter((i) => i.tier !== "featured");

  const featuredHtml = featured.length
    ? `<div class="impact-featured">${featured.map((item) => impactArticleHtml(item)).join("")}</div>`
    : "";
  const restHtml = rest.length
    ? `<div class="impact-rest">${rest.map((item) => impactArticleHtml(item)).join("")}</div>`
    : "";

  root.innerHTML = `${featuredHtml}${restHtml}`;

  if (toolsWrap && toolsList) {
    if (tools.length) {
      toolsWrap.hidden = false;
      toolsList.innerHTML = tools.map((item) => impactArticleHtml(item, "impact-item--tool")).join("");
    } else {
      toolsWrap.hidden = true;
      toolsList.innerHTML = "";
    }
  }
}

function renderResearch(): void {
  const root = document.getElementById("research-grid");
  if (!root) return;
  root.innerHTML = researchAreas
    .map(
      (r) => `
    <article class="r-card fade-up">
      <h3>${escapeHtml(r.title)}</h3>
      <p class="r-agenda">${escapeHtml(r.agenda)}</p>
      <p>${escapeHtml(r.description)}</p>
      <div class="r-tags">${r.tags.map((t) => `<span class="r-tag">${escapeHtml(t)}</span>`).join("")}</div>
    </article>
  `,
    )
    .join("");
}

function renderStudies(): void {
  const root = document.getElementById("studies-list");
  if (!root) return;
  root.innerHTML = activeStudies
    .map(
      (s) => `
    <article class="study-item fade-up">
      <div class="study-meta">
        <span class="study-role">${escapeHtml(s.role)}</span>
        <span class="study-period">${escapeHtml(s.period)}</span>
      </div>
      <h3 class="study-title">${escapeHtml(s.title)}</h3>
      <p class="study-summary">${escapeHtml(s.summary)}</p>
    </article>
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
        : `<span class="pub-title">${escapeHtml(pub.title)}</span>`;
      return `
      <article class="pub-item fade-up">
        <div class="pub-meta-line">
          <span class="pub-venue">${escapeHtml(pub.venue)}</span>
          <span class="pub-year">${escapeHtml(pub.year)}</span>
        </div>
        ${titleInner}
        <div class="pub-details">${escapeHtml(pub.details)}</div>
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
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
    case "github":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;
    case "scholar":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"/></svg>`;
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

  const renderService = (entries: typeof serviceEntries) =>
    entries
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

  const serviceHtml = renderService(serviceEntries);
  const externalServiceHtml = renderService(externalServiceEntries);

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
        <div class="cv-block-title">Research Interests</div>
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
        <div class="cv-section-title">External &amp; Professional Service</div>
        ${externalServiceHtml}
      </div>
      <div class="cv-section">
        <div class="cv-section-title">Grants &amp; Sponsored Projects</div>
        ${grantsHtml}
      </div>
    </div>
  `;
}

const PAGE_TITLES: Record<PageSlug, string> = {
  home: "Daniel M. Mejia, Ph.D. | UTEP Computer Science",
  about: "About | Daniel M. Mejia, Ph.D.",
  teaching: "Teaching | Daniel M. Mejia, Ph.D.",
  research: "Research | Daniel M. Mejia, Ph.D.",
  impact: "Impact | Daniel M. Mejia, Ph.D.",
  cv: "CV | Daniel M. Mejia, Ph.D.",
  contact: "Contact | Daniel M. Mejia, Ph.D.",
};

const PAGE_HEADING_IDS: Record<PageSlug, string> = {
  home: "hero-heading",
  about: "about-heading",
  teaching: "teaching-heading",
  research: "research-heading",
  impact: "impact-heading",
  cv: "cv-heading",
  contact: "contact-heading",
};

function applyPage(slug: PageSlug, opts?: { focusHeading?: boolean }): void {
  document.querySelectorAll(".page").forEach((panel) => {
    const id = panel.id.replace(/^page-/, "");
    const on = id === slug;
    panel.classList.toggle("is-active", on);
    panel.toggleAttribute("hidden", !on);
    panel.setAttribute("aria-hidden", on ? "false" : "true");
  });

  document.querySelectorAll("#nav-links [data-page]").forEach((el) => {
    const link = el as HTMLAnchorElement;
    const p = link.getAttribute("data-page");
    const on = p === slug;
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
    link.classList.toggle("nav-link--active", on);
  });

  document.title = PAGE_TITLES[slug];
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  updateScrollProgress();
  bindFadeUpForActivePage();
  if (slug === "home") setupCountUp();

  if (opts?.focusHeading) {
    const heading = document.getElementById(PAGE_HEADING_IDS[slug]);
    if (heading instanceof HTMLElement) {
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }
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
  const go = (slug: PageSlug, opts?: { replace?: boolean; focusHeading?: boolean }): void => {
    const url = `${window.location.pathname}${window.location.search}#${slug}`;
    if (opts?.replace) history.replaceState({ page: slug }, "", url);
    else history.pushState({ page: slug }, "", url);
    applyPage(slug, { focusHeading: opts?.focusHeading });
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
    go(normalized, { focusHeading: true });
    const drawer = document.getElementById("nav-drawer");
    const toggle = document.getElementById("nav-toggle");
    if (drawer?.classList.contains("is-open")) {
      drawer.classList.remove("is-open");
      document.getElementById("nav-overlay")?.classList.remove("is-visible");
      document.body.classList.remove("menu-open");
      toggle?.classList.remove("is-open");
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
    applyPage(normalizePageSlug(window.location.hash.slice(1)), { focusHeading: true });
  });
}

function setupTheme(): void {
  const KEY = "dmmejia-theme";
  type Theme = "light" | "dark";

  const systemTheme = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const readTheme = (): Theme =>
    document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

  const applyTheme = (theme: Theme, persist: boolean): void => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0d1929" : "#1b3a6e");
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      const next = theme === "dark" ? "light" : "dark";
      btn.setAttribute("aria-label", `Switch to ${next} mode`);
      btn.setAttribute("title", `${next[0]!.toUpperCase()}${next.slice(1)} mode`);
    }
    if (persist) {
      try {
        localStorage.setItem(KEY, theme);
      } catch {
        /* ignore quota / private mode */
      }
    }
  };

  let stored: string | null = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch {
    stored = null;
  }
  const initial: Theme = stored === "light" || stored === "dark" ? stored : systemTheme();
  applyTheme(initial, false);

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    applyTheme(readTheme() === "dark" ? "light" : "dark", true);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    let explicit: string | null = null;
    try {
      explicit = localStorage.getItem(KEY);
    } catch {
      explicit = null;
    }
    if (explicit === "light" || explicit === "dark") return;
    applyTheme(e.matches ? "dark" : "light", false);
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
    updateScrollProgress();
  }, { passive: true });

  function setOpen(open: boolean): void {
    toggle?.setAttribute("aria-expanded", String(open));
    drawer?.classList.toggle("is-open", open);
    overlay?.classList.toggle("is-visible", open);
    document.body.classList.toggle("menu-open", open);
    toggle?.classList.toggle("is-open", open);
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

function updateScrollProgress(): void {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
  bar.style.width = `${pct}%`;
}

function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function animateCount(el: HTMLElement): void {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const prefix = el.dataset.prefix ?? "";
  const suffix = el.dataset.suffix ?? "";
  const decimals = Number(el.dataset.decimals ?? 0);
  const formatInt = el.dataset.format === "int";
  const duration = 1100;
  const start = performance.now();

  const format = (n: number): string => {
    if (formatInt) return Math.round(n).toLocaleString("en-US");
    return n.toFixed(decimals);
  };

  if (prefersReducedMotion()) {
    el.textContent = `${prefix}${format(target)}${suffix}`;
    return;
  }

  const tick = (now: number): void => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${prefix}${format(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function setupCountUp(): void {
  const els = document.querySelectorAll<HTMLElement>("[data-count]");
  els.forEach((el) => {
    if (el.dataset.counted === "true") return;
    el.dataset.counted = "true";
    animateCount(el);
  });
}

function setFooterYear(): void {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupBackToTop(): void {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

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
renderImpact();
renderResearch();
renderStudies();
renderPublications();
renderCv();
renderContactLinks();
setupTheme();
setupNav();
setupPageRouter();
setFooterYear();
setupBackToTop();
