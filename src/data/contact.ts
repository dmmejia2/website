export type ContactKind = "email" | "linkedin" | "github" | "scholar";

export type ContactAudience = "students" | "collaborators" | "partners";

export interface ContactAudienceOption {
  id: ContactAudience;
  label: string;
  subject: string;
  hint: string;
}

export const contactAudiences: ContactAudienceOption[] = [
  {
    id: "students",
    label: "Students",
    subject: "Student inquiry",
    hint: "Course questions, MSSwE or Fast Track advising. Include course and term.",
  },
  {
    id: "collaborators",
    label: "Collaborators",
    subject: "Research / collaboration",
    hint: "Research partnership, IRB studies, and computing-education scholarship.",
  },
  {
    id: "partners",
    label: "Partners",
    subject: "Partnership inquiry",
    hint: "Industry or consortium conversations around curriculum, workforce, and GenAI.",
  },
];

export interface ContactLink {
  id: string;
  kind: ContactKind;
  label: string;
  sublabel: string;
  href: string;
  active: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    kind: "email",
    label: "dmmejia2@utep.edu",
    sublabel: "Institutional email · UTEP",
    href: "mailto:dmmejia2@utep.edu",
    active: true,
  },
  {
    id: "linkedin",
    kind: "linkedin",
    label: "LinkedIn",
    sublabel: "linkedin.com/in/dmmejia2",
    href: "https://www.linkedin.com/in/dmmejia2",
    active: true,
  },
  {
    id: "github",
    kind: "github",
    label: "GitHub",
    sublabel: "github.com/dmmejia2",
    href: "https://github.com/dmmejia2",
    active: true,
  },
  {
    id: "scholar",
    kind: "scholar",
    label: "Google Scholar",
    sublabel: "scholar.google.com · publications & citations",
    href: "https://scholar.google.com/citations?user=SW0WAr4AAAAJ&hl=en",
    active: true,
  },
];
