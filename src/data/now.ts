export interface NowItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
  href?: string;
  linkLabel?: string;
}

/** Dated updates — newest first. Edit here when something ships. */
export const nowItems: NowItem[] = [
  {
    id: "iticse-2026",
    date: "2026-07-01",
    tag: "Conference",
    title: "ITiCSE 2026 in Madrid",
    summary:
      "A Framework for Integrating Generative AI in CS Courses, with Vianey Martinez and Melina Salazar-Perez, presented at the 31st ACM ITiCSE at Universidad Rey Juan Carlos.",
    href: "https://iticse.acm.org/2026/program/",
    linkLabel: "Conference program",
  },
  {
    id: "aaii-champions",
    date: "2026-04-01",
    tag: "Program",
    title: "Leading AAII AI Champions",
    summary:
      "University-wide faculty development under UTEP’s Institute for Applied AI Innovation: three cohorts of eight faculty, including department chairs, across campus—not only in Computer Science.",
    href: "https://www.utep.edu/aaii/",
    linkLabel: "AAII at UTEP",
  },
  {
    id: "agile-study",
    date: "2026-03-01",
    tag: "Research",
    title: "The Agile Experience Study underway",
    summary:
      "Mixed-methods IRB study in CS 4381, CS 5381, and CS 5389: how students develop professional engineering competencies across sprint cycles, including readiness for responsible AI-assisted development.",
  },
  {
    id: "genai-study",
    date: "2025-09-01",
    tag: "Research",
    title: "GenAI in CS courses: new IRB study",
    summary:
      "Pre/post surveys and course data on perceptions, behaviors, and learning outcomes when generative AI is integrated into UTEP CS coursework, with attention to underrepresented students in computing.",
  },
  {
    id: "genai-consortium",
    date: "2025-07-01",
    tag: "Consortium",
    title: "CAHSI Lead, GenAI in CS Education Consortium",
    summary:
      "National coordination of generative AI curriculum across roughly 20 CAHSI-affiliated institutions, with public resources at teachcswithai.org.",
    href: "https://www.teachcswithai.org",
    linkLabel: "Teach CS with AI",
  },
  {
    id: "msswe-fast-track",
    date: "2024-08-01",
    tag: "Teaching",
    title: "MSSwE Fast Track demand keeps rising",
    summary:
      "As Program Director, Fast Track (combined B.S./M.S.) participation grew from roughly five applicants per term to more than thirty through outreach, streamlined advising, and stronger faculty engagement.",
    href: "https://catalog.utep.edu/grad/college-of-engineering/computer-science/software-engineering/",
    linkLabel: "MSSwE catalog",
  },
];
