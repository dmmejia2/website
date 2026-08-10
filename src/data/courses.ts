/** Top stripe accents: copper / slate / teal / ink. */
export type CourseAccent = "copper" | "slate" | "teal" | "ink";

export interface Course {
  code: string;
  title: string;
  description: string;
  level: string;
  accent: CourseAccent;
  /** Lecture sections taught as instructor of record (dossier / CV, Fall 2019–Spring 2026). */
  timesTaught: number;
  timesNote?: string;
}

/** Core teaching aligned with July 2026 CV and promotion dossier section counts. */
export const courses: Course[] = [
  {
    code: "CS 3195",
    title: "Junior Professional Orientation",
    description:
      "Professional orientation for computing majors: communication, ethics, career navigation, internships, and workplace expectations.",
    level: "Undergraduate · Professional development",
    accent: "ink",
    timesTaught: 14,
  },
  {
    code: "CS 3331",
    title: "Advanced Object-Oriented Programming",
    description:
      "Design patterns, architecture, and advanced Java for professional-grade software and graduate preparation.",
    level: "Undergraduate · Upper division",
    accent: "teal",
    timesTaught: 10,
  },
  {
    code: "CS 1301",
    title: "Introduction to Computer Science",
    description:
      "First-year computing: problem solving, programming foundations, and pathways into the major at UTEP.",
    level: "Undergraduate · Lower division",
    accent: "copper",
    timesTaught: 9,
  },
  {
    code: "CS 2302",
    title: "Data Structures",
    description:
      "Core structures and algorithmic analysis with Python: stacks, trees, heaps, hashing, graphs, and balanced structures.",
    level: "Undergraduate · Core",
    accent: "slate",
    timesTaught: 7,
  },
  {
    code: "CS 4381",
    title: "Applied Agile Software Development",
    description:
      "Industry-style Agile delivery: sprints, Scrum, and team engineering with client-facing projects.",
    level: "Undergraduate · Upper division",
    accent: "copper",
    timesTaught: 5,
  },
  {
    code: "CS 5381",
    title: "Applied Agile Software Development",
    description:
      "Graduate Agile software engineering: sprint-based delivery with research and industry-aligned practice.",
    level: "Graduate",
    accent: "copper",
    timesTaught: 5,
  },
  {
    code: "CS 5389",
    title: "Software Engineering Practicum",
    description:
      "Graduate practicum supporting applied software engineering and sprint-based delivery; site of ongoing agile-competency research.",
    level: "Graduate",
    accent: "slate",
    timesTaught: 2,
  },
  {
    code: "CS 1190",
    title: "Fundamentals of Financial Literacy",
    description:
      "Professional literacy developed with the UTEP/Visa Financial Literacy team: technical careers meet personal finance readiness.",
    level: "Undergraduate · Professional skills",
    accent: "ink",
    timesTaught: 1,
  },
  {
    code: "Tech Ex.",
    title: "Software Dev Studio · Google Tech Exchange",
    description:
      "Co-instructor for the Google Tech Exchange Software Developer Studio: HBCU/HSI cohorts and industry-aligned software practice.",
    level: "Special offering · Tech Exchange",
    accent: "teal",
    timesTaught: 1,
  },
  {
    code: "CS 3350",
    title: "Automata, Computability, and Formal Languages",
    description: "Theory of computation: automata, formal languages, and computability.",
    level: "Undergraduate · Upper division",
    accent: "slate",
    timesTaught: 1,
  },
];
