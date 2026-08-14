export interface ResearchArea {
  title: string;
  agenda: string;
  description: string;
  tags: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Agile Software Engineering & Professional Competencies",
    agenda:
      "IRB-approved studies of sprint-based courses, client projects, and professional readiness, including responsible AI-assisted development.",
    description:
      "Applied Agile Software Engineering and the Software Engineering Practicum are sites of longitudinal study: self-efficacy, signals from GitHub and course deliverables, and readiness across a semester. Graduate students in Applied Agile complete a literature review and present at a class research symposium. Published work at SIGCSE 2025, ITiCSE 2025, and an ITiCSE 2026 poster.",
    tags: ["Agile pedagogy", "Professional readiness", "Client projects"],
  },
  {
    title: "Generative AI in Computer Science Education",
    agenda:
      "Pre/post surveys and course data on perceptions, behaviors, and learning outcomes when GenAI tools are integrated into CS coursework at UTEP.",
    description:
      "Active IRB study with M. Frias and N. Villanueva-Rosales, with attention to underrepresented students in computing. Related dissemination through SIGCSE, ITiCSE, Google Tech Exchange, the CAHSI GenAI Consortium, and the CAHSI-HACU AI Readiness Consortium.",
    tags: ["GenAI pedagogy", "HSI context", "SIGCSE · ITiCSE"],
  },
  {
    title: "Knowledge Graphs, Semantics & Smart Cities",
    agenda:
      "Dissertation and IEEE-track scholarship on knowledge-graph methodologies and composite metrics for traffic crash analysis and smart mobility.",
    description:
      "Ph.D. work on bottom-up knowledge graphs for composite metric development applied to traffic crashes in Texas; M.S. thesis on heterogeneous traffic data for mobility challenges in El Paso. Foundational to later data-driven education research.",
    tags: ["Knowledge graphs", "IEEE ISC2", "Smart mobility"],
  },
  {
    title: "Pathways & Scale at an HSI",
    agenda:
      "NSF S-STEM co-PI work, Google exploreCSR and TensorFlow awards, and CAHSI GenAI Consortium leadership.",
    description:
      "Funded programs and cross-institutional networks that connect mentoring infrastructure and classroom research so practices tested at UTEP can travel to peer institutions.",
    tags: ["NSF S-STEM", "CAHSI", "Google awards"],
  },
];
