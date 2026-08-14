import "./styles/main.css";
import { courses, currentCourses, CURRENT_TERM, isCurrentCourse, type Course } from "./data/courses";
import { courseSiteFor, COURSE_TABS, courseTabHash, normalizeCourseTab, type CourseTabId } from "./data/courseSites";
import { impactInitiatives, partnerMarks } from "./data/impact";
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
import { contactAudiences, contactLinks } from "./data/contact";
import { nowItems } from "./data/now";
import { advisingPathways, CONTACT_EMAIL, officeHours, studentPrograms } from "./data/students";

const PAGE_SLUGS = ["home", "updates", "teaching", "research", "impact", "cv", "contact"] as const;
type PageSlug = (typeof PAGE_SLUGS)[number];

interface Route {
  slug: PageSlug;
  raw: string;
  scrollId?: string;
  courseId?: string;
  courseTab?: CourseTabId;
}

/** Old hash redirects so bookmarked #projects still works. */
const PAGE_ALIASES: Record<string, PageSlug> = {
  projects: "impact",
  now: "updates",
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

function closestFromEvent(e: Event, selector: string): Element | null {
  const node = e.target;
  if (node instanceof Element) return node.closest(selector);
  if (node instanceof Node) return node.parentElement?.closest(selector) ?? null;
  return null;
}

function parseRoute(raw: string): Route {
  const trimmed = raw.replace(/^#/, "").trim().toLowerCase();
  const [head, ...rest] = trimmed.split("/");
  if (head === "students") {
    return { slug: "teaching", raw: "teaching/start" };
  }
  if (head === "about") {
    return { slug: "home", raw: "about" };
  }
  if (head === "synergy") {
    return { slug: "impact", raw: "synergy" };
  }
  const slug = normalizePageSlug(head ?? "");
  const sub = rest.filter(Boolean).join("/");
  if (slug === "teaching" && sub === "start") {
    return { slug, raw: "teaching/start" };
  }
  if (slug === "teaching" && rest[0] && rest[0] !== "start") {
    const courseId = rest[0];
    const courseTab = normalizeCourseTab(rest[1]);
    return { slug, raw: courseTabHash(courseId, courseTab), courseId, courseTab };
  }
  return { slug, raw: slug };
}

function catalogSearchHref(code: string): string | undefined {
  const m = code.trim().match(/([A-Za-z]+)\s*(\d{4})/);
  if (!m) return undefined;
  return `https://catalog.utep.edu/search/?P=${encodeURIComponent(`${m[1]!.toUpperCase()} ${m[2]}`)}`;
}

function mailtoHref(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatMonthYear(iso: string): string {
  const d = new Date(`${iso.slice(0, 10)}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function announce(message: string): void {
  const live = document.getElementById("route-live");
  if (live) live.textContent = message;
}

function renderCourses(): void {
  const root = document.getElementById("courses-grid");
  if (!root) return;
  root.innerHTML = courses
    .map((c) => {
      const timesLabel =
        c.timesTaught === 0
          ? escapeHtml(c.timesNote ?? CURRENT_TERM)
          : c.timesTaught === 1
            ? "Taught 1 time"
            : `Taught ${c.timesTaught} times`;
      const timesExtra = c.timesTaught > 0 && c.timesNote ? ` · ${escapeHtml(c.timesNote)}` : "";
      const site = isCurrentCourse(c.id);
      const open = site ? `<span class="course-open">Course site →</span>` : "";
      const inner = `
      <div class="course-code">${escapeHtml(c.code)}</div>
      <div class="course-name">${escapeHtml(c.title)}</div>
      <p class="course-desc">${escapeHtml(c.description)}</p>
      <div class="course-meta">
        <span class="course-level">${escapeHtml(c.level)}</span>
        <span class="course-times">${timesLabel}${timesExtra}</span>
      </div>
      ${open}`;
      if (site) {
        return `<a class="course-card c-${c.accent} fade-up" href="#teaching/${escapeHtml(c.id)}" data-page="teaching">${inner}</a>`;
      }
      return `<article class="course-card c-${c.accent} fade-up">${inner}</article>`;
    })
    .join("");
}

function renderCurrentCourses(): void {
  const root = document.getElementById("current-courses-grid");
  if (!root) return;
  root.innerHTML = currentCourses()
    .map((c) => {
      const label = c.studentTitle ?? c.title;
      return `
    <a class="current-course c-${c.accent}" href="#teaching/${escapeHtml(c.id)}" data-page="teaching">
      <span class="current-course-term">${escapeHtml(CURRENT_TERM)}</span>
      <span class="course-code">${escapeHtml(c.code)}</span>
      <span class="course-name">${escapeHtml(label)}</span>
      <span class="course-desc">${escapeHtml(c.description)}</span>
      <span class="course-open">Open site →</span>
    </a>`;
    })
    .join("");
}

function renderLoadViz(): void {
  const roots = [document.getElementById("load-viz"), document.getElementById("home-load-viz")].filter(
    (el): el is HTMLElement => !!el,
  );
  if (!roots.length) return;
  // Lecture sections in the dossier table (excludes the Google Tech Exchange studio).
  const taught = courses.filter((c) => c.timesTaught > 0 && c.id !== "tech-ex");
  const max = Math.max(...taught.map((c) => c.timesTaught), 1);
  const total = taught.reduce((sum, c) => sum + c.timesTaught, 0);
  const html = `
    <p class="load-viz-lead">${taught.length} courses · ${total} lecture sections · Fall 2019–Spring 2026</p>
    <ul class="load-bars">
      ${taught
        .map((c) => {
          const pct = Math.max(6, (c.timesTaught / max) * 100);
          return `<li class="load-row">
            <span class="load-code">${escapeHtml(c.code)}</span>
            <span class="load-track" aria-hidden="true"><span class="load-fill c-${c.accent}" style="width:${pct}%"></span></span>
            <span class="load-n">${c.timesTaught}</span>
          </li>`;
        })
        .join("")}
    </ul>`;
  roots.forEach((root) => {
    root.innerHTML =
      root.id === "home-load-viz" ? `<p class="home-load-kicker">Teaching load</p>${html}` : html;
  });
}

function nowCardHtml(item: (typeof nowItems)[number], extraClass = ""): string {
  const link =
    item.href && item.linkLabel
      ? `<a class="now-link" href="${escapeHtml(safeHref(item.href))}" rel="noopener noreferrer" target="_blank">${escapeHtml(item.linkLabel)} →</a>`
      : "";
  return `
    <article class="now-item ${extraClass} fade-up">
      <div class="now-meta">
        <span class="now-tag">${escapeHtml(item.tag)}</span>
        <time datetime="${escapeHtml(item.date)}">${escapeHtml(formatMonthYear(item.date))}</time>
      </div>
      <h3 class="now-title">${escapeHtml(item.title)}</h3>
      <p class="now-summary">${escapeHtml(item.summary)}</p>
      ${link}
    </article>`;
}

function renderNow(): void {
  const preview = document.getElementById("now-preview");
  const feed = document.getElementById("now-feed");
  const latest = nowItems[0];
  if (preview && latest) {
    const link =
      latest.href && latest.linkLabel
        ? `<a class="now-link" href="${escapeHtml(safeHref(latest.href))}" rel="noopener noreferrer" target="_blank">${escapeHtml(latest.linkLabel)} →</a>`
        : "";
    preview.innerHTML = `
      <p class="hero-featured-kicker">Latest</p>
      <p class="hero-featured-title">${escapeHtml(latest.title)}</p>
      <p class="hero-featured-meta"><time datetime="${escapeHtml(latest.date)}">${escapeHtml(formatMonthYear(latest.date))}</time> · ${escapeHtml(latest.tag)}</p>
      ${link}
      <a class="text-link" href="#updates" data-page="updates">All updates →</a>
    `;
  }
  if (feed) {
    feed.innerHTML = nowItems.map((item) => nowCardHtml(item)).join("");
  }
}

function hoursCardHtml(): string {
  return `
    <p class="hours-kicker">${escapeHtml(officeHours.term)}</p>
    <p class="hours-status">${escapeHtml(officeHours.status)}</p>
    <p class="hours-loc">${escapeHtml(officeHours.location)}</p>
    <p class="hours-note">${escapeHtml(officeHours.note)}</p>
    <a class="text-link" href="#teaching/start" data-page="teaching" data-scroll="advising-heading">Ask for a time →</a>
  `;
}

function renderOfficeHours(): void {
  document.querySelectorAll("[data-office-hours]").forEach((root) => {
    root.innerHTML = hoursCardHtml();
  });
}

function renderStudentPrograms(): void {
  const root = document.getElementById("student-path-grid");
  if (!root) return;
  root.innerHTML = studentPrograms
    .map((item) => {
      const title = escapeHtml(item.title);
      const blurb = escapeHtml(item.blurb);
      if (item.pathwayId) {
        return `<button type="button" class="student-path" data-pathway="${escapeHtml(item.pathwayId)}">
          <strong>${title}</strong>
          <span>${blurb}</span>
        </button>`;
      }
      return `<article class="student-path student-path--static">
        <strong>${title}</strong>
        <span>${blurb}</span>
      </article>`;
    })
    .join("");
}

function extLink(href: string | undefined, label: string, fallback: string): string {
  if (href) {
    return `<a class="text-link" href="${escapeHtml(safeHref(href))}" rel="noopener noreferrer" target="_blank">${escapeHtml(label)} →</a>`;
  }
  return `<p class="site-fallback">${escapeHtml(fallback)}</p>`;
}

const COURSE_TAB_LABELS: Record<CourseTabId, string> = {
  "this-week": "This week",
  schedule: "Schedule",
  syllabus: "Syllabus",
  resources: "Resources",
  help: "Help",
};

function setCourseTab(tab: CourseTabId): void {
  const root = document.getElementById("course-site-root");
  if (!root) return;
  root.querySelectorAll("[data-course-tab]").forEach((el) => {
    const on = el.getAttribute("data-course-tab") === tab;
    el.classList.toggle("is-active", on);
    el.setAttribute("aria-selected", String(on));
    el.setAttribute("tabindex", on ? "0" : "-1");
  });
  root.querySelectorAll("[data-tab-panel]").forEach((el) => {
    const on = el.getAttribute("data-tab-panel") === tab;
    el.toggleAttribute("hidden", !on);
  });
}

function renderCourseSite(id: string, tab: CourseTabId = "this-week"): void {
  const root = document.getElementById("course-site-root");
  if (!root) return;
  const course = courses.find((c) => c.id === id);
  const site = courseSiteFor(id);
  if (!course || !site) {
    root.innerHTML = `
      <section class="course-site">
        <div class="page-header">
          <div class="container page-header-inner">
            <p class="eyebrow">Course</p>
            <h2 class="page-title" id="course-site-title">Page not found</h2>
            <p class="page-lede">That course site is not on this term’s list.</p>
            <a class="text-link" href="#teaching/start" data-page="teaching">Back to current courses →</a>
          </div>
        </div>
      </section>`;
    return;
  }

  const title = course.studentTitle ?? course.title;
  const catalogHref = site.catalogHref ?? catalogSearchHref(course.code);
  const bbHref = site.blackboardHref;
  const mailHref = mailtoHref(
    `${course.code} ${site.term}`,
    `Name: \nCourse: ${course.code} ${title}\nTerm: ${site.term}\n\n`,
  );
  const hours = `<aside class="hours-card" data-office-hours aria-label="Office hours">${hoursCardHtml()}</aside>`;
  const weekWord = site.weekKind === "sprint" ? "Sprint" : "Week";

  const dueHtml = site.due.length
    ? `<ul class="due-list">${site.due
        .map((d) => {
          const name = d.href
            ? `<a href="${escapeHtml(safeHref(d.href))}" rel="noopener noreferrer" target="_blank">${escapeHtml(d.title)}</a>`
            : escapeHtml(d.title);
          return `<li><span class="due-when">${escapeHtml(d.date)}</span><span class="due-what">${name}</span></li>`;
        })
        .join("")}</ul>`
    : `<p class="site-fallback">No upcoming due dates posted yet. Check Blackboard.</p>`;

  const weeksHtml = site.weeks.length
    ? `<ol class="week-list">${site.weeks
        .map((w) => {
          const current = site.currentWeek === w.n ? " is-current" : "";
          const label = w.label ?? `${weekWord} ${w.n}`;
          const note = w.note ? `<span class="week-note">${escapeHtml(w.note)}</span>` : "";
          return `<li class="week-row${current}">
            <span class="week-n">${escapeHtml(label)}</span>
            <span class="week-dates">${escapeHtml(w.dates)}</span>
            <span class="week-topic">${escapeHtml(w.topic)}</span>
            ${note}
          </li>`;
        })
        .join("")}</ol>`
    : `<p class="site-fallback">${escapeHtml(site.blackboardNote ?? "Weekly schedule on Blackboard.")}</p>`;

  const syllabusLink = site.syllabusHref
    ? extLink(site.syllabusHref, "Syllabus (PDF)", "")
    : `<p class="site-fallback">${escapeHtml(site.syllabusNote ?? "Link forthcoming.")}</p>`;

  const policyBits = [
    site.policies.late ? ["Late work", site.policies.late] : null,
    site.policies.collaboration ? ["Collaboration", site.policies.collaboration] : null,
    site.policies.attendance ? ["Attendance", site.policies.attendance] : null,
  ].filter((row): row is [string, string] => !!row);

  const policiesHtml = policyBits.length
    ? `<dl class="policy-list">${policyBits
        .map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`)
        .join("")}</dl>`
    : `<p class="site-fallback">See the syllabus.</p>`;

  const resourcesHtml = site.resources.length
    ? `<ul class="resource-list">${site.resources
        .map((r) => {
          const label = r.href
            ? `<a href="${escapeHtml(safeHref(r.href))}" rel="noopener noreferrer" target="_blank">${escapeHtml(r.label)} →</a>`
            : escapeHtml(r.label);
          const note = r.note ? `<span class="resource-note">${escapeHtml(r.note)}</span>` : "";
          return `<li>${label}${note}</li>`;
        })
        .join("")}</ul>`
    : `<p class="site-fallback">${escapeHtml(site.blackboardNote ?? "Posted on Blackboard.")}</p>`;

  const bbJump = bbHref
    ? `<a href="${escapeHtml(safeHref(bbHref))}" rel="noopener noreferrer" target="_blank">Blackboard</a>`
    : `<span class="site-jump-muted">Blackboard</span>`;
  const catJump = catalogHref
    ? `<a href="${escapeHtml(safeHref(catalogHref))}" rel="noopener noreferrer" target="_blank">Catalog</a>`
    : "";
  const mailJump = `<a href="${escapeHtml(mailHref)}">Email</a>`;

  const tabs = COURSE_TABS.map((id) => {
    const selected = id === tab;
    return `<button type="button" class="site-tab${selected ? " is-active" : ""}" role="tab" id="tab-${id}" data-course-tab="${id}" aria-controls="panel-${id}" aria-selected="${selected}" tabindex="${selected ? "0" : "-1"}">${COURSE_TAB_LABELS[id]}</button>`;
  }).join("");

  const bbBtn = bbHref
    ? `<a class="btn btn-primary" href="${escapeHtml(safeHref(bbHref))}" rel="noopener noreferrer" target="_blank">Open Blackboard</a>`
    : `<p class="site-fallback">${escapeHtml(site.blackboardNote ?? "Course materials are on Blackboard.")}</p>`;

  const catchUp = site.catchUp
    ? `<div class="site-callout"><h4>If you are behind</h4><p>${escapeHtml(site.catchUp)}</p></div>`
    : "";

  root.innerHTML = `
    <section class="course-site" aria-labelledby="course-site-title" data-course-id="${escapeHtml(id)}">
      <div class="page-header site-mast">
        <div class="container page-header-inner">
          <a class="site-back" href="#teaching/start" data-page="teaching">← Current courses</a>
          <p class="eyebrow">${escapeHtml(site.term)}</p>
          <h2 class="page-title" id="course-site-title">${escapeHtml(course.code)} · <em>${escapeHtml(title)}</em></h2>
          <p class="page-lede">${escapeHtml(site.overview)}</p>
          <p class="site-jumps">${bbJump}${catJump ? ` · ${catJump}` : ""} · ${mailJump}</p>
        </div>
        <div class="site-tabbar">
          <div class="container">
            <div class="site-tabs" role="tablist" aria-label="${escapeHtml(course.code)} sections">${tabs}</div>
          </div>
        </div>
      </div>
      <div class="container section-block site-body">
        <div class="site-panel" id="panel-this-week" role="tabpanel" data-tab-panel="this-week" aria-labelledby="tab-this-week">
          <p class="now-kicker">Now</p>
          <p class="now-lead">${escapeHtml(site.now)}</p>
          ${site.behindCue ? `<p class="behind-cue">${escapeHtml(site.behindCue)}</p>` : ""}
          <h3 class="block-title">What’s due</h3>
          ${dueHtml}
          <div class="site-panel-actions">${bbBtn}</div>
        </div>
        <div class="site-panel" id="panel-schedule" role="tabpanel" data-tab-panel="schedule" aria-labelledby="tab-schedule" hidden>
          <h3 class="block-title">${site.weekKind === "sprint" ? "Sprints" : "Week by week"}</h3>
          ${weeksHtml}
        </div>
        <div class="site-panel" id="panel-syllabus" role="tabpanel" data-tab-panel="syllabus" aria-labelledby="tab-syllabus" hidden>
          <h3 class="block-title">Syllabus</h3>
          ${syllabusLink}
          ${policiesHtml}
          ${
            site.genAi
              ? `<div class="site-callout site-callout--genai"><h4>Generative AI</h4><p>${escapeHtml(site.genAi)}</p></div>`
              : ""
          }
        </div>
        <div class="site-panel" id="panel-resources" role="tabpanel" data-tab-panel="resources" aria-labelledby="tab-resources" hidden>
          <h3 class="block-title">Resources</h3>
          ${resourcesHtml}
          ${site.blackboardNote ? `<p class="site-fallback">${escapeHtml(site.blackboardNote)}</p>` : ""}
        </div>
        <div class="site-panel" id="panel-help" role="tabpanel" data-tab-panel="help" aria-labelledby="tab-help" hidden>
          <h3 class="block-title">Office hours</h3>
          ${hours}
          ${catchUp}
          <div class="help-actions">
            <a class="btn btn-primary" href="#teaching/start" data-page="teaching" data-scroll="advising-heading" data-hub-course="${escapeHtml(course.id)}">Ask about this course</a>
            <a class="btn btn-ghost" href="https://attendance-tracker-live.web.app/" rel="noopener noreferrer" target="_blank">Attendance Tracker</a>
            <a class="btn btn-ghost" href="${escapeHtml(mailHref)}">Email Dr. Mejia</a>
          </div>
        </div>
      </div>
    </section>`;

  setCourseTab(tab);
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

function renderPartners(): void {
  const root = document.getElementById("partner-strip");
  if (!root) return;
  root.innerHTML = `
    <p class="partner-kicker">Scale</p>
    <ul class="partner-marks">
      ${partnerMarks
        .map(
          (p) => `
        <li class="partner-mark">
          <span class="partner-name">${escapeHtml(p.name)}</span>
          <span class="partner-line">${escapeHtml(p.line)}</span>
        </li>`,
        )
        .join("")}
    </ul>`;
}

function renderPublications(): void {
  const root = document.getElementById("publications-list");
  const filters = document.getElementById("pub-filters");
  if (!root) return;

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => Number(b) - Number(a));
  const chips: { id: string; label: string; kind: "all" | "theme" | "year"; value?: string }[] = [
    { id: "all", label: "All", kind: "all" },
    { id: "genai", label: "GenAI", kind: "theme", value: "genai" },
    { id: "csed", label: "CS Ed", kind: "theme", value: "csed" },
    { id: "smartcities", label: "Smart cities", kind: "theme", value: "smartcities" },
    ...years.map((y) => ({ id: `y-${y}`, label: y, kind: "year" as const, value: y })),
  ];

  let active = "all";

  const paint = (): void => {
    const list = publications.filter((p) => {
      if (active === "all") return true;
      if (active === "genai" || active === "csed" || active === "smartcities") {
        return p.themes.includes(active);
      }
      return p.year === active.replace(/^y-/, "");
    });
    root.innerHTML = list
      .map((pub, i) => {
        const pubHref = pub.href ? safeHref(pub.href) : "";
        const featured = pub.featured ? " pub-item--featured" : "";
        const link = pubHref
          ? `<a class="pub-open" href="${escapeHtml(pubHref)}" rel="noopener noreferrer" target="_blank">Open work →</a>`
          : "";
        return `
      <article class="pub-item${featured}" data-pub-index="${publications.indexOf(pub)}">
        <button type="button" class="pub-head" aria-expanded="false" data-pub-toggle="${i}">
          <div class="pub-meta-line">
            <span class="pub-venue">${escapeHtml(pub.venue)}</span>
            <span class="pub-year">${escapeHtml(pub.year)}</span>
          </div>
          <span class="pub-title">${escapeHtml(pub.title)}</span>
        </button>
        <div class="pub-panel" hidden>
          <p class="pub-details">${escapeHtml(pub.details)}</p>
          <div class="pub-actions">
            ${link}
            <button type="button" class="pub-cite" data-cite="${escapeHtml(pub.cite)}">Copy citation</button>
          </div>
        </div>
      </article>`;
      })
      .join("");
  };

  if (filters && !filters.dataset.ready) {
    filters.dataset.ready = "true";
    filters.innerHTML = chips
      .map(
        (c, i) =>
          `<button type="button" class="pub-chip${i === 0 ? " is-active" : ""}" data-filter="${escapeHtml(c.id)}" aria-pressed="${i === 0}">${escapeHtml(c.label)}</button>`,
      )
      .join("");
    filters.addEventListener("click", (e) => {
      const btn = closestFromEvent(e, "[data-filter]");
      if (!(btn instanceof HTMLElement)) return;
      const id = btn.getAttribute("data-filter");
      if (!id) return;
      active = id;
      filters.querySelectorAll(".pub-chip").forEach((el) => {
        const on = el.getAttribute("data-filter") === id;
        el.classList.toggle("is-active", on);
        el.setAttribute("aria-pressed", String(on));
      });
      paint();
    });
  }

  root.onclick = (e) => {
    const toggle = closestFromEvent(e, "[data-pub-toggle]");
    if (toggle instanceof HTMLElement) {
      const article = toggle.closest(".pub-item");
      const panel = article?.querySelector(".pub-panel");
      if (!(panel instanceof HTMLElement) || !(article instanceof HTMLElement)) return;
      const open = toggle.getAttribute("aria-expanded") === "true";
      root.querySelectorAll("[data-pub-toggle]").forEach((el) => el.setAttribute("aria-expanded", "false"));
      root.querySelectorAll(".pub-panel").forEach((el) => el.setAttribute("hidden", ""));
      if (!open) {
        toggle.setAttribute("aria-expanded", "true");
        panel.removeAttribute("hidden");
      }
      return;
    }
    const citeBtn = closestFromEvent(e, "[data-cite]");
    if (citeBtn instanceof HTMLElement) {
      const text = citeBtn.getAttribute("data-cite") ?? "";
      if (!text) return;
      const markCopied = (): void => {
        const prev = citeBtn.textContent;
        citeBtn.textContent = "Copied";
        setTimeout(() => {
          citeBtn.textContent = prev;
        }, 1600);
      };
      if (navigator.clipboard?.writeText) {
        void navigator.clipboard.writeText(text).then(markCopied).catch(() => {
          citeBtn.textContent = "Copy failed";
        });
      }
    }
  };

  paint();
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
        <span class="cv-dl-kicker">Document</span>
        <span class="cv-dl-title">Curriculum vitae</span>
        <span class="cv-dl-meta">PDF · July 2026</span>
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
  updates: "Updates | Daniel M. Mejia, Ph.D.",
  teaching: "Teaching | Daniel M. Mejia, Ph.D.",
  research: "Research | Daniel M. Mejia, Ph.D.",
  impact: "Synergistic | Daniel M. Mejia, Ph.D.",
  cv: "CV | Daniel M. Mejia, Ph.D.",
  contact: "Contact | Daniel M. Mejia, Ph.D.",
};

const PAGE_HEADING_IDS: Record<PageSlug, string> = {
  home: "hero-heading",
  updates: "updates-heading",
  teaching: "teaching-heading",
  research: "research-heading",
  impact: "impact-heading",
  cv: "cv-heading",
  contact: "contact-heading",
};

let currentRoute: Route = { slug: "home", raw: "home" };

function activePanelId(route: Route): string {
  if (route.courseId) return "page-course";
  if (route.raw === "teaching/start") return "page-students";
  return `page-${route.slug}`;
}

function applyPage(route: Route, opts?: { focusHeading?: boolean; preserveScroll?: boolean }): void {
  const slug = route.slug;
  const prev = currentRoute;
  const tabOnly = !!(prev.courseId && route.courseId && prev.courseId === route.courseId);
  currentRoute = route;

  if (route.courseId) {
    if (tabOnly && document.querySelector("[data-tab-panel]")) {
      setCourseTab(route.courseTab ?? "this-week");
    } else {
      renderCourseSite(route.courseId, route.courseTab ?? "this-week");
    }
  }

  document.querySelectorAll(".page").forEach((panel) => {
    const on = panel.id === activePanelId(route);
    panel.classList.toggle("is-active", on);
    panel.toggleAttribute("hidden", !on);
    panel.setAttribute("aria-hidden", on ? "false" : "true");
  });

  document.querySelectorAll("#nav-links > li > a[data-page]").forEach((el) => {
    const link = el as HTMLAnchorElement;
    const p = link.getAttribute("data-page");
    const href = link.getAttribute("href") || "";
    let on = p === slug;
    if (p === "home") {
      on = slug === "home";
    } else if (p === "teaching") {
      if (href === "#teaching/start") {
        on = route.raw === "teaching/start" || !!route.courseId;
      } else if (href === "#teaching") {
        on = route.raw === "teaching";
      } else {
        on = false;
      }
    }
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
    link.classList.toggle("nav-link--active", on);
  });

  syncBioFold(route);

  if (route.courseId) {
    const course = courses.find((c) => c.id === route.courseId);
    document.title = course ? `${course.code} | ${CURRENT_TERM}` : PAGE_TITLES.teaching;
  } else if (route.raw === "teaching/start") {
    document.title = "Students | Daniel M. Mejia, Ph.D.";
  } else if (route.raw === "about") {
    document.title = "About | Daniel M. Mejia, Ph.D.";
  } else {
    document.title = PAGE_TITLES[slug];
  }

  if (!opts?.preserveScroll && !tabOnly && route.raw !== "about") {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  updateScrollProgress();
  if (!tabOnly) bindFadeUpForActivePage();
  if (slug === "home") setupCountUp();

  const liveTitle = route.courseId
    ? document.title
    : route.raw === "teaching/start"
      ? "Students | Daniel M. Mejia, Ph.D."
      : route.raw === "about"
        ? "About | Daniel M. Mejia, Ph.D."
        : PAGE_TITLES[slug];
  announce(`Now viewing ${liveTitle}`);

  const headingId = route.courseId
    ? "course-site-title"
    : route.raw === "teaching/start"
      ? "students-heading"
      : route.raw === "about"
        ? "about-heading"
        : PAGE_HEADING_IDS[slug];

  if (opts?.focusHeading && !route.scrollId && !tabOnly) {
    const heading = document.getElementById(headingId);
    if (heading instanceof HTMLElement) {
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }

  if (route.scrollId) {
    requestAnimationFrame(() => {
      document.getElementById(route.scrollId!)?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    });
  } else if (route.raw === "about") {
    requestAnimationFrame(() => {
      document.getElementById("bio-fold")?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    });
  }
}

function go(raw: string, opts?: { replace?: boolean; focusHeading?: boolean; preserveScroll?: boolean }): void {
  const route = parseRoute(raw);
  const hash = route.raw;
  const url = `${window.location.pathname}${window.location.search}#${hash}`;
  if (opts?.replace) history.replaceState({ page: hash }, "", url);
  else history.pushState({ page: hash }, "", url);
  applyPage(route, { focusHeading: opts?.focusHeading, preserveScroll: opts?.preserveScroll });
}

function closeNavDrawer(): void {
  const drawer = document.getElementById("nav-drawer");
  const toggle = document.getElementById("nav-toggle");
  if (!drawer?.classList.contains("is-open")) return;
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

function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

function prefillAdvising(course?: Course): void {
  setAdvisingPathway("course");
  const note = document.getElementById("advising-note");
  if (note instanceof HTMLTextAreaElement && course) {
    note.value = `Course: ${course.code} ${course.title}\nTerm: ${CURRENT_TERM}\nWhat I need: `;
    note.focus();
  }
}

function setAdvisingPathway(id: string): void {
  const path = document.getElementById("advising-path");
  if (!(path instanceof HTMLSelectElement)) return;
  if (!advisingPathways.some((p) => p.id === id)) return;
  path.value = id;
  updateAdvisingHint();
}

function updateAdvisingHint(): void {
  const path = document.getElementById("advising-path");
  const hint = document.getElementById("advising-hint");
  if (!(path instanceof HTMLSelectElement) || !hint) return;
  const pathway = advisingPathways.find((p) => p.id === path.value);
  hint.textContent = pathway?.hint ?? "";
}

function syncBioFold(route: Route): void {
  const fold = document.getElementById("bio-fold");
  if (!(fold instanceof HTMLDetailsElement)) return;
  if (route.raw === "about") fold.open = true;
  else if (route.slug === "home") fold.open = false;
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
          setTimeout(() => el.classList.add("visible"), i * 28);
          fadeUpObserver?.unobserve(el);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -8% 0px" },
  );

  requestAnimationFrame(() => {
    active.querySelectorAll(".fade-up:not(.visible)").forEach((el) => fadeUpObserver?.observe(el));
    window.setTimeout(() => {
      active.querySelectorAll(".fade-up:not(.visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 40 && r.top < window.innerHeight - 40) el.classList.add("visible");
      });
    }, 60);
  });
}

function setupPageRouter(): void {
  history.scrollRestoration = "manual";
  const raw = window.location.hash.slice(1);
  const initial = parseRoute(raw);
  if (!window.location.hash || window.location.hash === "#" || raw.replace(/^#/, "").toLowerCase() !== initial.raw) {
    go(initial.raw, { replace: true });
  } else {
    applyPage(initial);
  }

  document.body.addEventListener("click", (e) => {
    const tabEl = closestFromEvent(e, "[data-course-tab]");
    if (tabEl instanceof HTMLElement && currentRoute.courseId) {
      e.preventDefault();
      const tab = normalizeCourseTab(tabEl.getAttribute("data-course-tab") ?? "");
      go(courseTabHash(currentRoute.courseId, tab), { replace: true, preserveScroll: true });
      document.getElementById(`tab-${tab}`)?.focus();
      return;
    }

    const pathEl = closestFromEvent(e, "[data-pathway]");
    if (pathEl instanceof HTMLElement) {
      e.preventDefault();
      const id = pathEl.getAttribute("data-pathway") || "";
      if (currentRoute.raw !== "teaching/start") go("teaching/start");
      requestAnimationFrame(() => {
        setAdvisingPathway(id);
        scrollToId("advising-heading");
        document.getElementById("advising-note")?.focus();
      });
      return;
    }

    const pageLink = closestFromEvent(e, "[data-page]");
    if (pageLink instanceof HTMLAnchorElement) {
      const href = pageLink.getAttribute("href") || "";
      const slug = pageLink.getAttribute("data-page") || "home";
      const hash = href.startsWith("#") ? href.slice(1) : slug;
      e.preventDefault();
      go(hash, { focusHeading: true });
      closeNavDrawer();
      const scrollId = pageLink.getAttribute("data-scroll");
      if (scrollId) {
        requestAnimationFrame(() => scrollToId(scrollId));
      }
      return;
    }

    const scrollLink = closestFromEvent(e, "[data-scroll]");
    if (scrollLink instanceof HTMLAnchorElement) {
      const scrollId = scrollLink.getAttribute("data-scroll");
      if (!scrollId) return;
      e.preventDefault();
      const hubCourseId = scrollLink.getAttribute("data-hub-course");
      if (currentRoute.raw !== "teaching/start") go("teaching/start");
      requestAnimationFrame(() => {
        scrollToId(scrollId);
        if (hubCourseId) {
          prefillAdvising(courses.find((c) => c.id === hubCourseId));
        }
      });
    }
  });

  window.addEventListener("popstate", () => {
    applyPage(parseRoute(window.location.hash.slice(1)), { focusHeading: true });
  });

  document.body.addEventListener("keydown", (e) => {
    const tabEl = e.target;
    if (!(tabEl instanceof HTMLElement) || !tabEl.matches("[data-course-tab]")) return;
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    if (!currentRoute.courseId) return;
    e.preventDefault();
    const current = normalizeCourseTab(tabEl.getAttribute("data-course-tab") ?? "");
    const i = COURSE_TABS.indexOf(current);
    let next: CourseTabId = current;
    if (e.key === "Home") next = COURSE_TABS[0];
    else if (e.key === "End") next = COURSE_TABS[COURSE_TABS.length - 1]!;
    else {
      const dir = e.key === "ArrowRight" ? 1 : -1;
      next = COURSE_TABS[(i + dir + COURSE_TABS.length) % COURSE_TABS.length]!;
    }
    go(courseTabHash(currentRoute.courseId, next), { replace: true, preserveScroll: true });
    document.getElementById(`tab-${next}`)?.focus();
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
    if (open) {
      const first = drawer?.querySelector<HTMLElement>("a, button");
      first?.focus();
    }
  }

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  overlay?.addEventListener("click", () => setOpen(false));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
    if (e.key !== "Tab" || !drawer?.classList.contains("is-open")) return;
    const focusables = [toggle, ...Array.from(drawer.querySelectorAll<HTMLElement>("a, button"))]
      .filter((el): el is HTMLElement => !!el && !el.hasAttribute("disabled"));
    if (focusables.length === 0) return;
    const first = focusables[0]!;
    const last = focusables[focusables.length - 1]!;
    const active = document.activeElement;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
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

function setupForms(): void {
  const path = document.getElementById("advising-path");
  if (path instanceof HTMLSelectElement) {
    path.innerHTML = advisingPathways
      .map((p) => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.label)}</option>`)
      .join("");
    path.addEventListener("change", updateAdvisingHint);
    updateAdvisingHint();
  }

  document.getElementById("advising-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;
    const data = new FormData(form);
    const pathway = advisingPathways.find((p) => p.id === String(data.get("pathway")));
    const name = String(data.get("name") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();
    const subject = pathway?.subject ?? "Student inquiry";
    const body = `Name: ${name}\nPathway: ${pathway?.label ?? ""}\n\n${note}`;
    window.location.href = mailtoHref(subject, body);
  });

  const audience = document.getElementById("contact-audience");
  if (audience instanceof HTMLSelectElement) {
    audience.innerHTML = contactAudiences
      .map((a) => `<option value="${escapeHtml(a.id)}">${escapeHtml(a.label)}</option>`)
      .join("");
  }

  document.getElementById("contact-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;
    const data = new FormData(form);
    const aud = contactAudiences.find((a) => a.id === String(data.get("audience")));
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("from") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = aud?.subject ?? "Website inquiry";
    const body = `Name: ${name}\nEmail: ${from}\nAudience: ${aud?.label ?? ""}\n\n${message}`;
    window.location.href = mailtoHref(subject, body);
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
renderCurrentCourses();
renderLoadViz();
renderNow();
renderOfficeHours();
renderStudentPrograms();
renderImpact();
renderPartners();
renderResearch();
renderStudies();
renderPublications();
renderCv();
renderContactLinks();
setupTheme();
setupNav();
setupPageRouter();
setupForms();
setFooterYear();
setupBackToTop();
