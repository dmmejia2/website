/** Per-course site copy. Update each term; leave hrefs empty until you have the real links. */

export const COURSE_TABS = ["this-week", "schedule", "syllabus", "resources", "help"] as const;
export type CourseTabId = (typeof COURSE_TABS)[number];

export interface CourseDue {
  title: string;
  date: string;
  href?: string;
}

export interface CourseWeek {
  n: number;
  /** Override the default “Week n” / “Sprint n” label. */
  label?: string;
  dates: string;
  topic: string;
  note?: string;
}

export interface CourseResource {
  label: string;
  href?: string;
  note?: string;
}

export interface CoursePolicies {
  late?: string;
  collaboration?: string;
  attendance?: string;
}

export interface CourseSite {
  courseId: string;
  term: string;
  overview: string;
  /** Current unit or next meeting — the This week lead. */
  now: string;
  behindCue?: string;
  due: CourseDue[];
  weeks: CourseWeek[];
  currentWeek?: number;
  weekKind?: "week" | "sprint";
  syllabusNote?: string;
  syllabusHref?: string;
  policies: CoursePolicies;
  genAi?: string;
  catchUp?: string;
  resources: CourseResource[];
  blackboardNote?: string;
  blackboardHref?: string;
  catalogHref?: string;
}

const TAB_ALIASES: Record<string, CourseTabId> = {
  overview: "this-week",
  week: "this-week",
  "this-week": "this-week",
  schedule: "schedule",
  syllabus: "syllabus",
  policies: "syllabus",
  resources: "resources",
  materials: "resources",
  help: "help",
  hours: "help",
};

export function normalizeCourseTab(raw?: string): CourseTabId {
  if (!raw) return "this-week";
  return TAB_ALIASES[raw.trim().toLowerCase()] ?? "this-week";
}

export function courseTabHash(courseId: string, tab: CourseTabId): string {
  return tab === "this-week" ? `teaching/${courseId}` : `teaching/${courseId}/${tab}`;
}

export const courseSites: CourseSite[] = [
  {
    courseId: "cs-2302",
    term: "Fall 2026",
    overview:
      "Core structures and algorithmic analysis with Python: stacks, trees, heaps, hashing, graphs, and balanced structures. This course often decides whether a student stays in the major. People arrive with widely different preparation; the work of the semester is closing that gap without leaving those who arrive furthest behind.",
    now: "Week 1 · Orientation and the cost of operations. We start with how we talk about time, then stacks and queues as the first structures you can reason about precisely.",
    behindCue: "If arrays and Python functions still feel shaky, do the Week 1 warmup on Blackboard before the first lab—not after you are already lost in trees.",
    due: [
      { title: "Syllabus quiz", date: "Posted on Blackboard" },
      { title: "Lab 1: stacks and queues", date: "Week 2" },
    ],
    currentWeek: 1,
    weeks: [
      { n: 1, dates: "Week of Aug 24", topic: "Orientation, analysis, stacks and queues" },
      { n: 2, dates: "Week of Aug 31", topic: "Linked lists and recursion" },
      { n: 3, dates: "Week of Sep 7", topic: "Trees and traversals" },
      { n: 4, dates: "Week of Sep 14", topic: "Heaps and hashing", note: "Exam window will be posted here." },
    ],
    syllabusNote: "The syllabus PDF will be posted here and on Blackboard before the first class.",
    policies: {
      late: "Late work and makeup rules are in the syllabus. Ask before the deadline, not after.",
      collaboration: "You may discuss ideas. The code and write-up you submit must be yours. When in doubt, cite who you talked to.",
      attendance: "Lectures are recorded to Blackboard. Being present still matters: this course moves fast, and recordings do not replace asking a question in the room.",
    },
    genAi:
      "Identify the problem, pinpoint where you are stuck, and attempt improvement on your own before prompting a model—mastery first, then AI as a tool used ethically, not a substitute.",
    catchUp:
      "Data Structures is the course students fall behind in quietly. If a week did not land, come to hours that week with the specific function or trace that broke—not “I don’t get trees.” Recordings and walkthroughs are on Blackboard.",
    resources: [
      { label: "UTEP catalog", href: "https://catalog.utep.edu/search/?P=CS%202302" },
      { label: "Lecture recordings", note: "Posted on Blackboard after class" },
      { label: "Walkthrough videos", note: "Blackboard · use after you attempt the problem" },
    ],
    blackboardNote: "Labs, recordings, and grades are on Blackboard.",
  },
  {
    courseId: "cs-3195",
    term: "Fall 2026",
    overview:
      "Junior Professional Orientation is a professional-practice course more than a coding course: how to show up, communicate, and make decisions you can stand behind. Career artifacts, ethics, internships, and workplace norms—including how (and whether) to disclose AI use on resumes and take-homes.",
    now: "Week 1 · Why this course exists. We set expectations for professional communication and start the career-artifact sequence—not a coding lab.",
    behindCue: "Treat this as a professional commitment, not a checkbox. Missing the early artifacts is what turns the rest of the term into catch-up.",
    due: [{ title: "Introduction and syllabus acknowledgment", date: "Posted on Blackboard" }],
    currentWeek: 1,
    weeks: [
      { n: 1, dates: "Week of Aug 24", topic: "Professional presence and course contract" },
      { n: 2, dates: "Week of Aug 31", topic: "Resume and LinkedIn as professional artifacts" },
      { n: 3, dates: "Week of Sep 7", topic: "Ethics cases and workplace communication" },
      { n: 4, dates: "Week of Sep 14", topic: "Internships, take-homes, and disclosing AI use" },
    ],
    syllabusNote: "The syllabus PDF will be posted here and on Blackboard before the first class.",
    policies: {
      late: "Professional deadlines are part of the point. Late-work rules are in the syllabus.",
      collaboration: "You may workshop language with classmates. The artifacts you submit must be yours.",
      attendance: "Attendance and professional conduct are graded as they would be at work. See the syllabus.",
    },
    genAi:
      "We talk about disclosing AI use in professional settings—resumes, take-homes, and workplace norms—not only in homework.",
    resources: [
      { label: "UTEP catalog", href: "https://catalog.utep.edu/search/?P=CS%203195" },
      { label: "Resume draft", note: "Template and rubric on Blackboard" },
      { label: "LinkedIn checklist", note: "Posted with Week 2" },
      { label: "Ethics case packet", note: "Posted on Blackboard" },
    ],
    blackboardNote: "Course materials and grades are on Blackboard.",
  },
  {
    courseId: "cs-5389",
    term: "Fall 2026",
    overview:
      "A practicum, not a survey: you are expected to deliver applied software engineering in sprint cycles. Graduate students ship, reflect, and leave with professional competency signals from real work.",
    now: "Sprint 0 · Forming teams, repo hygiene, and the definition of done. You are expected to ship from Sprint 1.",
    behindCue: "If the repo or team contract is not in place, that is the whole assignment—not a side task.",
    due: [{ title: "Team charter and repository", date: "End of Sprint 0" }],
    currentWeek: 0,
    weekKind: "sprint",
    weeks: [
      { n: 0, label: "Sprint 0", dates: "Week of Aug 24", topic: "Teams, repos, definition of done" },
      { n: 1, label: "Sprint 1", dates: "Weeks of Aug 31–Sep 7", topic: "First shippable increment" },
      { n: 2, label: "Sprint 2", dates: "Weeks of Sep 14–Sep 21", topic: "Cadence, review, and retro" },
      { n: 3, label: "Sprint 3", dates: "TBA", topic: "Next increment — dates on Blackboard" },
    ],
    syllabusNote: "The syllabus PDF will be posted here and on Blackboard before the first class.",
    policies: {
      late: "Sprint deliverables are graded as shipped work. Missed reviews are not made up as slides after the fact.",
      collaboration: "Teams share a repo. Individual contribution still has to be visible in commits, reviews, and the retro.",
      attendance: "Standups, reviews, and retros are the course. See the syllabus for how absence is handled.",
    },
    genAi: "Use the tools; be ready to defend what you shipped.",
    resources: [
      { label: "UTEP catalog", href: "https://catalog.utep.edu/search/?P=CS%205389" },
      { label: "Team repository", note: "Linked from Blackboard once teams form" },
      { label: "Sprint board", note: "Linked from Blackboard" },
    ],
    blackboardNote: "Repositories, sprint boards, and grades are linked from Blackboard.",
  },
  {
    courseId: "cs-4390-5388",
    term: "Fall 2026",
    overview:
      "Software Project Management (cross-listed CS 4390 / CS 5388): planning, estimation, risk, and leading a software project to delivery. The MSSwE curriculum is redesigned against PMI, SWEBOK, and DORA practice—business case, hybrid delivery, risk, AI governance, and change. Undergraduate and graduate sections meet together this term.",
    now: "Term opening · Syllabus and the redesigned project-management contract: what “managing a project” means in this room—not a coding sprint.",
    behindCue: "Read the syllabus when it is posted. The first weeks are about how we will plan, not about catching up on code.",
    due: [],
    weeks: [
      { n: 1, dates: "TBA", topic: "Course contract and what project management is here" },
      { n: 2, dates: "TBA", topic: "Planning and estimation — dates on Blackboard" },
    ],
    syllabusNote: "The syllabus PDF will be posted here and on Blackboard before the first class.",
    policies: {
      late: "Deadline rules will follow the syllabus.",
      collaboration: "Undergraduate and graduate sections meet together; expectations for deliverables may differ by level. See the syllabus.",
      attendance: "Posted with the syllabus.",
    },
    genAi:
      "Identify the problem, pinpoint where you are stuck, and attempt improvement on your own before prompting a model—mastery first, then AI as a tool used ethically, not a substitute.",
    resources: [
      { label: "UTEP catalog (CS 4390)", href: "https://catalog.utep.edu/search/?P=CS%204390" },
    ],
    blackboardNote: "Syllabus, schedule, and materials are on Blackboard.",
    catalogHref: "https://catalog.utep.edu/search/?P=CS%204390",
  },
];

export function courseSiteFor(id: string): CourseSite | undefined {
  return courseSites.find((s) => s.courseId === id);
}
