export interface ResearchArea {
  title: string;
  description: string;
  tags: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Agile Software Engineering & Professional Competencies",
    description:
      "Principal investigator on the Agile Experience Study (Mar 2026 – May 2027): mixed-methods, longitudinal work in CS 4381, CS 5381, and CS 5389 tracking how students develop professional engineering competencies across sprint cycles—linking GitHub artifacts, self-efficacy, and readiness for responsible AI-assisted development. Complements the broader project on project-based learning and agile methodologies in the classroom (Jan 2023 – Aug 2026).",
    tags: ["Agile Experience Study", "Mixed methods", "SE practicum"],
  },
  {
    title: "Generative AI in Computer Science Education",
    description:
      "PI on Understanding Generative AI in Computer Science Courses (Sep 2025 – Aug 2027, with M. Frias and N. Villanueva-Rosales): surveys and course data on student perceptions, behaviors, and outcomes with GenAI at UTEP, with emphasis on underrepresented students. UTEP faculty sponsor on the Google Tech Exchange Software Developer Studio study (2024; PI J. Gorson Benario), which supported SIGCSE and ITiCSE 2025 publications.",
    tags: ["GenAI pedagogy", "HSI context", "SIGCSE · ITiCSE"],
  },
  {
    title: "Knowledge Graphs, Semantics & Smart Cities",
    description:
      "Dissertation and IEEE-track scholarship on bottom-up knowledge-graph methodologies, heterogeneous traffic data, and composite metrics for crash observability and smart mobility—foundational to data-driven urban computing lines.",
    tags: ["Knowledge graphs", "IEEE ISC2", "Smart mobility"],
  },
  {
    title: "Pathways, Equity & Scale at an HSI",
    description:
      "Co-PI on NSF S-STEM (~$4.98M, Sep 2022 – Aug 2028, with S. Salamah and M. Martin); PI on Google exploreCSR and TensorFlow awards. CAHSI Lead for the GenAI in CS Education Consortium (Jul 2025 – present). Links external funding to mentoring, TA coordination, and evidence-based instruction for Hispanic-Serving Institution students.",
    tags: ["NSF S-STEM", "CAHSI", "Google awards"],
  },
];
