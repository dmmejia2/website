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
}

export const officeHours: OfficeHours = {
  term: "Fall 2026",
  status: "By appointment · hours on Blackboard",
  location: "Computer Science · UTEP",
  note: "Office hours are posted on each course Blackboard. Email with your course code and term, or use the advising form—include what you need so we can use the time well.",
};

export const advisingPathways: AdvisingPathway[] = [
  { id: "fast-track", label: "Fast Track (combined B.S./M.S.)", subject: "Fast Track advising" },
  { id: "msswe", label: "MSSwE / graduate advising", subject: "MSSwE advising" },
  { id: "ta", label: "TA, IA, or Peer Leader roles", subject: "Instructional student staff" },
  { id: "research", label: "Research mentoring", subject: "Research mentoring" },
  { id: "course", label: "Course question", subject: "Course question" },
  { id: "other", label: "Something else", subject: "Student inquiry" },
];

export const CONTACT_EMAIL = "dmmejia2@utep.edu";
