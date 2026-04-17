/** Top stripe on course cards — matches v4 palette (c-blue, c-rust, c-navy, c-brown). */
export type CourseAccent = "blue" | "rust" | "navy" | "brown";

export interface Course {
  code: string;
  title: string;
  description: string;
  level: string;
  accent: CourseAccent;
}

/** Core and recurring teaching aligned with CV (April 2026). */
export const courses: Course[] = [
  {
    code: "CS 1301",
    title: "Introduction to Computer Science",
    description:
      "First-year computing taught across multiple terms — problem solving, programming foundations, and pathways into the major at UTEP.",
    level: "Undergraduate · Lower division",
    accent: "rust",
  },
  {
    code: "CS 2302",
    title: "Data Structures",
    description:
      "Core structures and algorithmic analysis with Python — regular and summer offerings spanning stacks, trees, heaps, hashing, graphs, and balanced structures.",
    level: "Undergraduate · Core",
    accent: "navy",
  },
  {
    code: "CS 3331",
    title: "Advanced Object-Oriented Programming",
    description:
      "Design patterns, architecture, and advanced Java for professional-grade software and graduate preparation.",
    level: "Undergraduate · Upper division",
    accent: "brown",
  },
  {
    code: "CS 3195",
    title: "Junior Professional Orientation",
    description:
      "Professional orientation for computing majors: communication, ethics, career navigation, internships, and workplace expectations — taught across many consecutive terms.",
    level: "Undergraduate · Professional development",
    accent: "blue",
  },
  {
    code: "CS 4381 / CS 5381",
    title: "Software Engineering: Applied Agile Software Development",
    description:
      "Industry-style Agile delivery — sprints, Scrum, and team engineering — developed from pilot through multi-term undergraduate and graduate instruction.",
    level: "Undergraduate + Graduate",
    accent: "rust",
  },
  {
    code: "CS 5389",
    title: "Software Engineering Practicum",
    description:
      "Graduate practicum supporting applied software engineering and sprint-based delivery; site of ongoing agile-competency research.",
    level: "Graduate",
    accent: "navy",
  },
  {
    code: "Tech Ex.",
    title: "Software Dev Studio · Google Tech Exchange",
    description:
      "Co-instructor (Spring 2023) for the Google Tech Exchange Software Developer Studio — HBCU/HSI cohorts and industry-aligned software practice.",
    level: "Special offering · Tech Exchange",
    accent: "brown",
  },
  {
    code: "Fin. Literacy",
    title: "Fundamentals of Financial Literacy",
    description:
      "Professional literacy developed with the UTEP/VISA Financial Literacy team — connecting technical careers with personal finance readiness.",
    level: "Undergraduate · Professional skills",
    accent: "blue",
  },
];
