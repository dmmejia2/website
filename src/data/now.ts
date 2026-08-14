export interface NowItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
  href?: string;
  linkLabel?: string;
}

/** Dated updates: newest first. Edit here when something ships. */
export const nowItems: NowItem[] = [
  {
    id: "iticse-2026",
    date: "2026-07-01",
    tag: "Conference",
    title: "ITiCSE 2026 poster in Madrid",
    summary:
      "Peer-reviewed poster: A Framework for Integrating Generative AI in CS Courses, with Vianey Martinez and Melina Salazar-Perez, at the 31st ACM ITiCSE at Universidad Rey Juan Carlos.",
    href: "https://iticse.acm.org/2026/program/",
    linkLabel: "Conference program",
  },
  {
    id: "aaii-champions",
    date: "2026-04-01",
    tag: "Program",
    title: "Leading AAII AI Champions",
    summary:
      "University-wide faculty development under UTEP’s Institute for Applied AI Innovation: 24 faculty across three cohorts of eight, including three department chairs, from every college, not only Computer Science.",
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
    title: "MSSwE cohorts more than double",
    summary:
      "Since taking the directorship in 2024, admitted cohorts rose from 8.8 students on average to 15.3 (Fall 2024–Spring 2026), with the three most recent terms averaging 18. Fast Track applications grew from about five per term to more than thirty.",
    href: "https://catalog.utep.edu/grad/college-of-engineering/computer-science/software-engineering/",
    linkLabel: "MSSwE catalog",
  },
];
