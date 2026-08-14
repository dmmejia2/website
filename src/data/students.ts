/** Living student-facing details. Update once a term. */

export interface OfficeHours {
  term: string;
  status: string;
  location: string;
  note: string;
}

export interface AdvisingPathway {
  id: string;
  label: string;
  subject: string;
  hint: string;
}

export const officeHours: OfficeHours = {
  term: "Fall 2026",
  status: "By appointment · hours on Blackboard",
  location: "Computer Science · UTEP",
  note: "Office hours are posted on each course Blackboard. Email with your course code and term, or use the advising form. Include what you need so we can use the time well.",
};

export const advisingPathways: AdvisingPathway[] = [
  {
    id: "fast-track",
    label: "Fast Track (combined B.S./M.S.)",
    subject: "Fast Track advising",
    hint: "Combined B.S./M.S. pathway; advising on planning and applications.",
  },
  {
    id: "msswe",
    label: "MSSwE / graduate advising",
    subject: "MSSwE advising",
    hint: "Program questions for Software Engineering; also MSCS / MSDIS coordination.",
  },
  {
    id: "ta",
    label: "TA, IA, or Peer Leader roles",
    subject: "Instructional student staff",
    hint: "Hiring and assignments for the department’s instructional student staff each term.",
  },
  {
    id: "research",
    label: "Research mentoring",
    subject: "Research mentoring",
    hint: "Currently one Master’s student and six undergraduate researchers, plus about 30 students advised each semester.",
  },
  {
    id: "course",
    label: "Course question",
    subject: "Course question",
    hint: "Syllabus, schedule, or a question about a course you are in.",
  },
  {
    id: "other",
    label: "Something else",
    subject: "Student inquiry",
    hint: "Anything that does not fit the paths above.",
  },
];

export const CONTACT_EMAIL = "dmmejia2@utep.edu";

export interface StudentProgram {
  id: string;
  title: string;
  blurb: string;
  /** When set, choosing the card prefills the advising form with this pathway. */
  pathwayId?: string;
}

export const studentPrograms: StudentProgram[] = [
  {
    id: "fast-track",
    title: "Fast Track",
    blurb: "Combined B.S./M.S. pathway. Advising on planning, timing, and applications.",
    pathwayId: "fast-track",
  },
  {
    id: "msswe",
    title: "MSSwE / graduate advising",
    blurb: "Software Engineering program questions; also MSCS and MSDIS coordination.",
    pathwayId: "msswe",
  },
  {
    id: "ta",
    title: "TA, IA & Peer Leaders",
    blurb: "Hiring and assignments for the department’s instructional student staff each term.",
    pathwayId: "ta",
  },
  {
    id: "cic",
    title: "Coding Interview Club",
    blurb: "Faculty advisor, SEL Center. Practice interviews and industry-style problem solving.",
  },
  {
    id: "codepath",
    title: "CodePath",
    blurb: "Campus liaison for industry-aligned technical courses and career preparation.",
  },
  {
    id: "research",
    title: "Research mentoring",
    blurb: "Currently one Master’s student and six undergraduate researchers, plus about 30 students advised each semester.",
    pathwayId: "research",
  },
];
