/** Top stripe accents: copper / slate / teal / ink. */
export type CourseAccent = "copper" | "slate" | "teal" | "ink";

export interface Course {
  id: string;
  code: string;
  title: string;
  /** Shorter label on the student current-courses list. */
  studentTitle?: string;
  description: string;
  level: string;
  accent: CourseAccent;
  /** Lecture sections taught as instructor of record (dossier / CV, Fall 2019–Spring 2026). */
  timesTaught: number;
  timesNote?: string;
  /** What the course is actually like in the room. */
  vibe: string;
  genAi?: string;
  projects?: string[];
}

export const CURRENT_TERM = "Fall 2026";

/** Student-facing current offerings this term, in display order. */
export const currentCourseIds = ["cs-2302", "cs-3195", "cs-4390-5388", "cs-5389"] as const;

export function isCurrentCourse(id: string): boolean {
  return (currentCourseIds as readonly string[]).includes(id);
}

export const GENAI_CLASSROOM =
  "Identify the problem, pinpoint where you are stuck, and attempt improvement on your own before prompting a model—mastery first, then AI as a tool used ethically, not a substitute.";

/** Core teaching aligned with August 2026 dossier lecture counts (Fall 2019–Spring 2026). */
export const courses: Course[] = [
  {
    id: "cs-3195",
    code: "CS 3195",
    title: "Junior Professional Orientation",
    studentTitle: "JPO",
    description:
      "Professional orientation for computing majors: communication, ethics, career navigation, internships, and workplace expectations.",
    level: "Undergraduate · Professional development",
    accent: "ink",
    timesTaught: 14,
    vibe: "A professional-practice course more than a coding course: how to show up, communicate, and make decisions you can stand behind. Many students treat it as a checkbox; the ones who don’t walk out with a clearer internship and career plan.",
    genAi: "We talk about disclosing AI use in professional settings—resumes, take-homes, and workplace norms—not only in homework.",
    projects: ["Career artifacts and internship readiness", "Ethics case discussions", "Workplace communication practice"],
  },
  {
    id: "cs-3331",
    code: "CS 3331",
    title: "Advanced Object-Oriented Programming",
    description:
      "Design patterns, architecture, and advanced Java for professional-grade software and graduate preparation.",
    level: "Undergraduate · Upper division",
    accent: "teal",
    timesTaught: 10,
    vibe: "This is where “it compiles” stops being enough. We spend the semester on structure: patterns, architecture, and code you would not be embarrassed to hand a teammate.",
    genAi: GENAI_CLASSROOM,
    projects: ["Pattern-driven design in Java", "Architecture of a multi-class system", "Graduate-prep programming assignments"],
  },
  {
    id: "cs-1301",
    code: "CS 1301",
    title: "Introduction to Computer Science",
    description:
      "First-year computing: problem solving, programming foundations, and pathways into the major at UTEP.",
    level: "Undergraduate · Lower division",
    accent: "copper",
    timesTaught: 9,
    vibe: "Gateway, not gatekeeping. Since Fall 2023 I have been sole instructor of record through a faculty shortage. The job is to keep the door open without lowering what “ready for CS 2302” means.",
    genAi: GENAI_CLASSROOM,
    projects: ["Problem-solving and programming foundations", "Early major pathways and study habits"],
  },
  {
    id: "cs-2302",
    code: "CS 2302",
    title: "Data Structures",
    description:
      "Core structures and algorithmic analysis with Python: stacks, trees, heaps, hashing, graphs, and balanced structures.",
    level: "Undergraduate · Core",
    accent: "slate",
    timesTaught: 7,
    vibe: "The course I most enjoy teaching and the hardest to teach well. It often decides whether a student stays in the major, and people arrive with widely different preparation. Closing that gap in one semester—without losing those who arrive furthest behind—is the daily work.",
    genAi: GENAI_CLASSROOM,
    projects: ["Stacks, trees, heaps, hashing, graphs", "Algorithmic analysis in Python", "Balanced structures"],
  },
  {
    id: "cs-4381",
    code: "CS 4381",
    title: "Applied Agile Software Engineering",
    description:
      "Industry-style Agile delivery: sprints, Scrum, and team engineering with client-facing projects.",
    level: "Undergraduate · Upper division",
    accent: "copper",
    timesTaught: 5,
    vibe: "Built from the ground up so the classroom matches how software is actually shipped. Sprints, Scrum, GitHub, code review, and client-facing work—not a slide deck about Agile. Interns at Google, Uber, and PepsiCo have said the course matched their jobs. Site of the Agile Experience Study.",
    genAi: "AI is in the toolchain, with the same rule as everywhere else: you still own the design, the commit, and the explanation.",
    projects: ["Sprint-based team delivery", "Client-facing engineering", "GitHub and course deliverables as professional signals"],
  },
  {
    id: "cs-5381",
    code: "CS 5381",
    title: "Applied Agile Software Engineering",
    description:
      "Graduate Agile software engineering: sprint-based delivery with research and industry-aligned practice.",
    level: "Graduate",
    accent: "copper",
    timesTaught: 5,
    vibe: "Graduate counterpart to CS 4381: same industry cadence, higher expectation for judgment and reflection. Graduate students complete a literature review on a software-engineering research topic and present a poster at a class research symposium—the only course in the department with a research component built in.",
    genAi: "AI is in the toolchain, with the same rule as everywhere else: you still own the design, the commit, and the explanation.",
    projects: ["Sprint-based graduate delivery", "Industry-aligned practice with research framing"],
  },
  {
    id: "cs-5389",
    code: "CS 5389",
    title: "Software Engineering Practicum",
    studentTitle: "Software Practicum",
    description:
      "Graduate practicum supporting applied software engineering and sprint-based delivery; site of ongoing agile-competency research.",
    level: "Graduate",
    accent: "slate",
    timesTaught: 2,
    vibe: "A practicum, not a survey: you are expected to deliver. Ongoing agile-competency research runs here alongside CS 4381 and CS 5381.",
    genAi: "Use the tools; be ready to defend what you shipped.",
    projects: ["Applied software engineering in sprint cycles", "Professional competency signals from real deliverables"],
  },
  {
    id: "cs-4390-5388",
    code: "CS 4390 / 5388",
    title: "Software Project Management",
    description:
      "Cross-listed undergraduate and graduate software project management: planning, estimation, risk, and leading a software project to delivery.",
    level: "Undergraduate / Graduate · Cross-listed",
    accent: "teal",
    timesTaught: 0,
    timesNote: "Fall 2026",
    vibe: "How software projects are planned and steered—not only how code is written. The graduate MSSwE curriculum is redesigned against current industry standards (PMI Talent Triangle, Pulse of the Profession, SWEBOK, DORA): business case, hybrid delivery, risk, AI governance, and organizational change. Undergraduate and graduate sections meet together.",
    genAi: GENAI_CLASSROOM,
    projects: ["Project planning and risk", "Estimation and delivery tracking"],
  },
  {
    id: "cs-1190",
    code: "CS 1190",
    title: "Fundamentals of Financial Literacy",
    description:
      "Professional literacy developed with the UTEP/VISA Financial Literacy team: technical careers meet personal finance readiness.",
    level: "Undergraduate · Professional skills",
    accent: "ink",
    timesTaught: 2,
    vibe: "Built with VISA so CS students leave with financial literacy they will actually use—pay, debt, internships, and the first years of a technical career—not a generic personal-finance lecture.",
    projects: ["Personal finance readiness for technical careers", "Partnership modules with the UTEP/VISA team"],
  },
  {
    id: "cs-1290",
    code: "CS 1290",
    title: "Problem-Solving Topics",
    description: "Selected problem-solving topics in computer science, taught as a letter-graded lecture section.",
    level: "Undergraduate · Lower division",
    accent: "ink",
    timesTaught: 1,
    vibe: "A focused problem-solving offering alongside the gateway sequence—practice first, not a survey of trivia.",
    projects: ["Structured problem-solving practice"],
  },
  {
    id: "tech-ex",
    code: "Tech Ex.",
    title: "Software Dev Studio · Google Tech Exchange",
    description:
      "Co-instructor for the Google Tech Exchange Software Developer Studio: HBCU/HSI cohorts and industry-aligned software practice.",
    level: "Special offering · Tech Exchange",
    accent: "teal",
    timesTaught: 1,
    vibe: "A Google Tech Exchange studio with HBCU and HSI cohorts: industry-aligned software practice, not a UTEP catalog course. The partnership is the point—students work in a setting closer to how Google develops software.",
    projects: ["Industry-aligned studio work", "HBCU/HSI cohort collaboration"],
  },
  {
    id: "cs-3350",
    code: "CS 3350",
    title: "Automata, Computability, and Formal Languages",
    description: "Theory of computation: automata, formal languages, and computability.",
    level: "Undergraduate · Upper division",
    accent: "slate",
    timesTaught: 1,
    vibe: "Theory with the same teaching stance as the rest of my courses: see one, do one, and understand the why—not only the proof technique of the week.",
    genAi: "Models can check a proof sketch; they cannot replace the part where you can explain why the construction works.",
    projects: ["Automata and formal languages", "Computability arguments"],
  },
];

export function currentCourses(): Course[] {
  return currentCourseIds
    .map((id) => courses.find((c) => c.id === id))
    .filter((c): c is Course => !!c);
}
