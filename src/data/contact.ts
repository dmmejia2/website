export type ContactKind = "email" | "linkedin" | "github" | "scholar";

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
    sublabel: "Publications — link coming soon",
    href: "#",
    active: false,
  },
];
