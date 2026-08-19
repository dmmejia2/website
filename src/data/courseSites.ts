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

export interface CourseGradingRow {
  label: string;
  pct: string;
}

export interface CourseGrading {
  /** When set, shown above this table (e.g. CS 4390 vs CS 5388). */
  title?: string;
  rows: CourseGradingRow[];
  note?: string;
}

export interface CourseSite {
  courseId: string;
  term: string;
  overview: string;
  /** Time, room, CRN, and term dates — shown under the lede. */
  meet?: string;
  /** Current unit or next meeting: the This week lead. */
  now: string;
  behindCue?: string;
  due: CourseDue[];
  weeks: CourseWeek[];
  currentWeek?: number;
  weekKind?: "week" | "sprint";
  syllabusNote?: string;
  syllabusHref?: string;
  grading?: CourseGrading[];
  policies: CoursePolicies;
  genAi?: string;
  catchUp?: string;
  resources: CourseResource[];
  blackboardNote?: string;
  blackboardHref?: string;
  catalogHref?: string;
}

const SYLLABUS_ON_BB = "The official syllabus is on Blackboard.";

const POLICY_LATE =
  "Late work is accepted up to 24 hours after the deadline, with a 10% penalty.";

const POLICY_ATTENDANCE =
  "Scan your UTEP student ID on the way in (or self-check-in when asked). That is the only accepted attendance record. Up to 5 minutes late is tardy; two tardies count as one absence. More than 10 minutes late is an absence. After 3 unexcused absences you may be dropped with an F or have your letter grade reduced.";

const POLICY_COLLAB =
  "Ask the instructor or TA/IA for clarification. Do not post assignments or solutions online (GitHub, Chegg, Course Hero), share or copy code, or use AI outside the stated category. Improper collaboration can still be a violation even if unintended.";

const GENAI_TIERS =
  "Default is Category 1 (No Use) unless an assignment says otherwise: no AI on exams, quizzes, or unlabeled work. Category 2 (homework and most labs): you may use AI to debug, clarify an error, or explain a concept; you may not generate the solution. Category 3 (AI Open) only when explicitly marked. Exceeding a category is an academic-integrity violation, not a grading deduction.";

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
    meet: "TR 10:30–11:50am · TWHC 108 · CRN 10761 · Aug 24–Dec 4",
    now: "Week 1 · Orientation and the cost of operations. We start with how we talk about time, then stacks and queues as the first structures you can reason about precisely.",
    behindCue: "If arrays and Python functions still feel shaky, do the Week 1 warmup on Blackboard before the first lab, not after you are already lost in trees.",
    due: [
      { title: "Syllabus quiz", date: "Posted on Blackboard" },
      { title: "Lab 1: stacks and queues", date: "Week 2" },
    ],
    currentWeek: 1,
    weeks: [
      { n: 1, dates: "Week of Aug 24", topic: "Orientation, analysis, stacks and queues" },
      { n: 2, dates: "Week of Aug 31", topic: "Linked lists and recursion" },
      { n: 3, dates: "Week of Sep 7", topic: "Trees and traversals", note: "Labor Day Sep 7 (university closed). Census Day Sep 9." },
      { n: 4, dates: "Week of Sep 14", topic: "Heaps and hashing", note: "Exam window will be posted here." },
      { n: 5, dates: "Week of Sep 21", topic: "Posted on Blackboard" },
      { n: 6, dates: "Week of Sep 28", topic: "Posted on Blackboard" },
      { n: 7, dates: "Week of Oct 5", topic: "Posted on Blackboard" },
      { n: 8, dates: "Week of Oct 12", topic: "Posted on Blackboard" },
      { n: 9, dates: "Week of Oct 19", topic: "Posted on Blackboard" },
      { n: 10, dates: "Week of Oct 26", topic: "Posted on Blackboard", note: "Auto W drop deadline Oct 30." },
      { n: 11, dates: "Week of Nov 2", topic: "Posted on Blackboard" },
      { n: 12, dates: "Week of Nov 9", topic: "Posted on Blackboard" },
      { n: 13, dates: "Week of Nov 16", topic: "Posted on Blackboard" },
      { n: 14, dates: "Week of Nov 23", topic: "Posted on Blackboard", note: "Thanksgiving holiday Nov 26–27; no class Thursday." },
      { n: 15, dates: "Week of Nov 30", topic: "Last class Dec 3", note: "Dead Day Dec 4 (no class)." },
      { n: 16, label: "Finals", dates: "Dec 7–11", topic: "Comprehensive final; 60% minimum to pass" },
    ],
    syllabusNote: SYLLABUS_ON_BB,
    grading: [
      {
        rows: [
          { label: "Class participation / attendance", pct: "3%" },
          { label: "Homework / in-class assignments", pct: "6%" },
          { label: "Quizzes", pct: "13%" },
          { label: "Labs", pct: "13%" },
          { label: "Exam 1", pct: "15%" },
          { label: "Exam 2", pct: "15%" },
          { label: "Exam 3", pct: "15%" },
          { label: "Final exam", pct: "20%" },
        ],
        note: "A final grade of F is assigned if labs, midterms, or the final average below 60%, or if any lab is not submitted. You must earn a C or better to pass.",
      },
    ],
    policies: {
      late: POLICY_LATE,
      collaboration: POLICY_COLLAB,
      attendance: POLICY_ATTENDANCE,
    },
    genAi: GENAI_TIERS,
    catchUp:
      "Data Structures is the course students fall behind in quietly. If a week did not land, come to hours that week with the specific function or trace that broke, not “I don’t get trees.” Walkthroughs, when posted, are on Blackboard; they do not replace asking a question in the room.",
    resources: [
      { label: "UTEP catalog", href: "https://catalog.utep.edu/search/?P=CS%202302" },
      {
        label: "Textbook: Liang, Introduction to Python Programming and Data Structures, 3rd ed.",
        href: "https://www.pearson.com/en-us/subject-catalog/p/introduction-to-python-programming-and-data-structures/P200000003438/9780137915972",
        note: "Pearson+ · you do not need the Study & Exam Prep Pack",
      },
      { label: "Joe Mota, TA", href: "mailto:jamota@miners.utep.edu", note: "jamota@miners.utep.edu" },
      { label: "Saul Burns, IA", href: "mailto:saburns1@miners.utep.edu", note: "saburns1@miners.utep.edu" },
      { label: "Monet Nevarrez, IA", href: "mailto:mnevarezsanch@miners.utep.edu", note: "mnevarezsanch@miners.utep.edu" },
      { label: "Walkthrough videos", note: "Blackboard · use after you attempt the problem" },
    ],
    blackboardNote: "Labs, grades, and the official syllabus are on Blackboard.",
  },
  {
    courseId: "cs-3195",
    term: "Fall 2026",
    overview:
      "Junior Professional Orientation is a professional-practice course more than a coding course: how to show up, communicate, and make decisions you can stand behind. Career artifacts, ethics, internships, and workplace norms, including how (and whether) to disclose AI use on resumes and take-homes. First-half course: Aug 24–Oct 16.",
    meet: "TR 9:00–10:20am · PSCI 115 · CRN 12637 · first half Aug 24–Oct 16",
    now: "Week 1 · Why this course exists. We set expectations for professional communication and start the career-artifact sequence, not a coding lab.",
    behindCue: "Treat this as a professional commitment, not a checkbox. Missing the early artifacts is what turns the rest of the term into catch-up.",
    due: [{ title: "Introduction and syllabus acknowledgment", date: "Posted on Blackboard" }],
    currentWeek: 1,
    weeks: [
      { n: 1, dates: "Week of Aug 24", topic: "Professional presence and course contract" },
      { n: 2, dates: "Week of Aug 31", topic: "Resume and LinkedIn as professional artifacts" },
      { n: 3, dates: "Week of Sep 7", topic: "Ethics cases and workplace communication", note: "Labor Day Sep 7 (university closed). Census Day Sep 9." },
      { n: 4, dates: "Week of Sep 14", topic: "Internships, take-homes, and disclosing AI use" },
      { n: 5, dates: "Week of Sep 21", topic: "Posted on Blackboard" },
      { n: 6, dates: "Week of Sep 28", topic: "Posted on Blackboard" },
      { n: 7, dates: "Week of Oct 5", topic: "Posted on Blackboard" },
      { n: 8, dates: "Week of Oct 12", topic: "Posted on Blackboard", note: "Course ends Oct 16." },
    ],
    syllabusNote: SYLLABUS_ON_BB,
    grading: [
      {
        rows: [
          { label: "Class attendance", pct: "5%" },
          { label: "Quizzes", pct: "8%" },
          { label: "Resume, statement of purpose, ethics report", pct: "30%" },
          { label: "Assignments", pct: "52%" },
          { label: "Final project", pct: "5%" },
        ],
        note: "You must earn a C or better to pass.",
      },
    ],
    policies: {
      late: `${POLICY_LATE} Professional deadlines are part of the point.`,
      collaboration: `You may workshop language with classmates. The artifacts you submit must be yours. ${POLICY_COLLAB}`,
      attendance: POLICY_ATTENDANCE,
    },
    genAi: `${GENAI_TIERS} We also talk about disclosing AI use on resumes, take-homes, and in the workplace.`,
    resources: [
      { label: "UTEP catalog", href: "https://catalog.utep.edu/search/?P=CS%203195" },
      {
        label: "Textbook: Baase, A Gift of Fire, 5th ed.",
        href: "https://www.vitalsource.com/products/a-gift-of-fire-sara-baase-v9780134615394",
        note: "Required · VitalSource",
      },
      { label: "Optional: Clear, Atomic Habits", note: "Avery / Penguin Random House, 2018" },
      { label: "Resume draft", note: "Template and rubric on Blackboard" },
      { label: "LinkedIn checklist", note: "Posted with Week 2" },
      { label: "Ethics case packet", note: "Posted on Blackboard" },
    ],
    blackboardNote: "Course materials, grades, and the official syllabus are on Blackboard.",
  },
  {
    courseId: "cs-5389",
    term: "Fall 2026",
    overview:
      "Capstone software practicum: apply the curriculum on a substantial team project, or through an approved industry arrangement. You ship, keep professional artifacts, and leave with competency signals from real work. Enrollment requires prior department approval.",
    meet: "T 4:30–7:20pm · CCSB 1.0202 · CRN 11670 · Aug 24–Dec 4",
    now: "Sprint 0 · Forming teams, repo hygiene, and the definition of done. You are expected to ship from Sprint 1.",
    behindCue: "If the repo or team contract is not in place, that is the whole assignment, not a side task.",
    due: [{ title: "Team charter and repository", date: "End of Sprint 0" }],
    currentWeek: 0,
    weekKind: "sprint",
    weeks: [
      { n: 0, label: "Sprint 0", dates: "Week of Aug 24", topic: "Teams, repos, definition of done" },
      { n: 1, label: "Sprint 1", dates: "Weeks of Aug 31–Sep 7", topic: "First shippable increment", note: "Labor Day Sep 7 (university closed). Census Day Sep 9." },
      { n: 2, label: "Sprint 2", dates: "Weeks of Sep 14–Sep 21", topic: "Cadence, review, and retro" },
      { n: 3, label: "Sprint 3", dates: "Weeks of Sep 28–Oct 5", topic: "Posted on Blackboard" },
      { n: 4, label: "Sprint 4", dates: "Weeks of Oct 12–Oct 19", topic: "Posted on Blackboard" },
      { n: 5, label: "Sprint 5", dates: "Weeks of Oct 26–Nov 2", topic: "Posted on Blackboard", note: "Auto W drop deadline Oct 30." },
      { n: 6, label: "Sprint 6", dates: "Weeks of Nov 9–Nov 16", topic: "Posted on Blackboard" },
      { n: 7, label: "Sprint 7", dates: "Weeks of Nov 23–Nov 30", topic: "Posted on Blackboard", note: "Thanksgiving Nov 26–27. Last class Dec 3. Dead Day Dec 4." },
      { n: 8, label: "Finals", dates: "Dec 7–11", topic: "Final presentations as posted on Blackboard" },
    ],
    syllabusNote: SYLLABUS_ON_BB,
    grading: [
      {
        rows: [
          { label: "Project", pct: "80%" },
          { label: "Homework / in-class assignments / research presentation", pct: "20%" },
        ],
      },
    ],
    policies: {
      late: `${POLICY_LATE} Sprint deliverables are graded as shipped work; missed reviews are not made up as slides after the fact.`,
      collaboration: `Teams share a repo. Individual contribution still has to be visible in commits, reviews, and the retro. ${POLICY_COLLAB}`,
      attendance: POLICY_ATTENDANCE,
    },
    genAi: `${GENAI_TIERS} Use the tools; be ready to defend what you shipped.`,
    resources: [
      { label: "UTEP catalog", href: "https://catalog.utep.edu/search/?P=CS%205389" },
      { label: "Team repository", note: "Linked from Blackboard once teams form" },
      { label: "Sprint board", note: "Linked from Blackboard" },
    ],
    blackboardNote: "Repositories, sprint boards, grades, and the official syllabus are linked from Blackboard.",
  },
  {
    courseId: "cs-4390-5388",
    term: "Fall 2026",
    overview:
      "Software Project Management (cross-listed CS 4390 / CS 5388): planning, estimation, risk, and leading a software project to delivery. The MSSwE curriculum is redesigned against PMI, SWEBOK, and DORA practice: business case, hybrid delivery, risk, AI governance, and change. Undergraduate and graduate sections meet together this term.",
    meet: "TR 3:00–4:20pm · CCSB 1.0202 · CRN 15191 / 11371 · Aug 24–Dec 4",
    now: "Week 1 · Course contract and the living project portal. Each team picks a software project scenario and starts a public site a real employer could read, not a document folder.",
    behindCue: "The first weeks are about how we will plan, not about catching up on code. Read the syllabus on Blackboard before the first portal stage.",
    due: [
      { title: "Syllabus acknowledgment", date: "Posted on Blackboard" },
      { title: "Living project portal · stage 1", date: "Dates on Blackboard" },
    ],
    currentWeek: 1,
    weeks: [
      { n: 1, dates: "Week of Aug 24", topic: "Course contract and the living project portal" },
      { n: 2, dates: "Week of Aug 31", topic: "Business case, estimates, and ROI" },
      { n: 3, dates: "Week of Sep 7", topic: "Delivery models and hybrid planning", note: "Labor Day Sep 7 (university closed). Census Day Sep 9." },
      { n: 4, dates: "Week of Sep 14", topic: "Charter, WBS, schedule, and RACI" },
      { n: 5, dates: "Week of Sep 21", topic: "Agile roadmap and DORA metrics" },
      { n: 6, dates: "Week of Sep 28", topic: "Risk, RAID, and AI governance" },
      { n: 7, dates: "Week of Oct 5", topic: "Team topologies and staffing" },
      { n: 8, dates: "Week of Oct 12", topic: "Posted on Blackboard" },
      { n: 9, dates: "Week of Oct 19", topic: "Posted on Blackboard" },
      { n: 10, dates: "Week of Oct 26", topic: "Posted on Blackboard", note: "Auto W drop deadline Oct 30." },
      { n: 11, dates: "Week of Nov 2", topic: "Posted on Blackboard" },
      { n: 12, dates: "Week of Nov 9", topic: "Posted on Blackboard" },
      { n: 13, dates: "Week of Nov 16", topic: "Posted on Blackboard" },
      { n: 14, dates: "Week of Nov 23", topic: "Posted on Blackboard", note: "Thanksgiving holiday Nov 26–27; no class Thursday." },
      { n: 15, dates: "Week of Nov 30", topic: "Last class Dec 3", note: "Dead Day Dec 4 (no class)." },
      { n: 16, label: "Finals", dates: "Dec 7–11", topic: "Final presentations as posted on Blackboard" },
    ],
    syllabusNote: SYLLABUS_ON_BB,
    grading: [
      {
        title: "CS 4390",
        rows: [
          { label: "Quizzes", pct: "10%" },
          { label: "Exam", pct: "15%" },
          { label: "Team project deliverables", pct: "50%" },
          { label: "Individual assignments", pct: "15%" },
          { label: "Final presentations", pct: "10%" },
        ],
      },
      {
        title: "CS 5388",
        rows: [
          { label: "Exam", pct: "15%" },
          { label: "Graduate student project / research", pct: "10%" },
          { label: "Team project deliverables", pct: "50%" },
          { label: "Individual assignments", pct: "15%" },
          { label: "Final presentations", pct: "10%" },
        ],
        note: "Each portal stage carries a team grade and an individual-accountability component. Include change notes: what changed, why, and what downstream artifacts were affected.",
      },
    ],
    policies: {
      late: POLICY_LATE,
      collaboration:
        "Undergraduate and graduate sections meet together; graduate students have an additional project/research component. " + POLICY_COLLAB,
      attendance: POLICY_ATTENDANCE,
    },
    genAi: GENAI_TIERS,
    resources: [
      { label: "UTEP catalog (CS 4390)", href: "https://catalog.utep.edu/search/?P=CS%204390" },
      { label: "UTEP catalog (CS 5388)", href: "https://catalog.utep.edu/search/?P=CS%205388" },
    ],
    blackboardNote: "Syllabus, portal stage due dates, and materials are on Blackboard.",
    catalogHref: "https://catalog.utep.edu/search/?P=CS%204390",
  },
];

export function courseSiteFor(id: string): CourseSite | undefined {
  return courseSites.find((s) => s.courseId === id);
}
