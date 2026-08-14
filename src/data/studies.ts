export interface ActiveStudy {
  title: string;
  role: string;
  period: string;
  summary: string;
}

/** Active IRB / sponsored studies. August 2026 dossier. */
export const activeStudies: ActiveStudy[] = [
  {
    title: "The Agile Experience Study",
    role: "Principal Investigator · UTEP IRB",
    period: "Mar 2026 – May 2027",
    summary:
      "Mixed-methods, longitudinal study tracking up to 110 students in CS 4381, CS 5381, and CS 5389: how they develop professional engineering competencies across sprint cycles—self-efficacy, signals from GitHub and course deliverables, and readiness for responsible AI-assisted development.",
  },
  {
    title: "Understanding Generative AI in Computer Science Courses",
    role: "Principal Investigator · with M. Frias & N. Villanueva-Rosales",
    period: "Sep 2025 – Aug 2027",
    summary:
      "Pre/post surveys and course data on perceptions, behaviors, and learning outcomes when GenAI tools are integrated into CS coursework at UTEP, with attention to underrepresented students in computing.",
  },
  {
    title: "Bridging Academia and Industry through Project-Based Agile Learning",
    role: "Principal Investigator · UTEP IRB",
    period: "Jan 2023 – Aug 2026",
    summary:
      "How project-based learning and agile methods close the gap between academic preparation and industry expectation. Findings inform Applied Agile Software Engineering, with an industry survey comparison planned against employer expectations.",
  },
];
