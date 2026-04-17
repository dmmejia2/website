export type ProjectStatus = "link" | "soon";

export interface Project {
  id: string;
  icon: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "aaii",
    icon: "🤖",
    title: "Institute for Applied AI Innovation (AAII)",
    description:
      "UTEP’s university-wide AI institute — education, workforce, research, and community-engaged innovation.",
    href: "https://www.utep.edu/aaii/",
    linkLabel: "AAII at UTEP",
    status: "link",
  },
  {
    id: "msse",
    icon: "🎓",
    title: "M.S. in Software Engineering",
    description:
      "Official catalog: admissions, 30-credit professional degree plan, practicum, and Secure Cyber-Systems track options.",
    href: "https://catalog.utep.edu/grad/college-of-engineering/computer-science/software-engineering/",
    linkLabel: "Graduate catalog",
    status: "link",
  },
  {
    id: "genai-consortium",
    icon: "🌐",
    title: "GenAI in CS Education Consortium",
    description:
      "National consortium for GenAI in postsecondary CS — CAHSI Lead (Jul 2025–present) coordinating curriculum integration across CAHSI institutions; courses, research, and instructor resources.",
    href: "https://www.teachcswithai.org",
    linkLabel: "Teach CS with AI",
    status: "link",
  },
  {
    id: "nsf-sstem",
    icon: "📊",
    title: "NSF S-STEM Scholarship",
    description:
      "NSF S-STEM (~$4.98M, Sep 2022 – Aug 2028, co-PI with S. Salamah & M. Martin) — scholarships and co-curricular support; program overview and how to apply at UTEP.",
    href: "https://www.utep.edu/cs/opportunities/sstem.html",
    linkLabel: "S-STEM at UTEP",
    status: "link",
  },
  {
    id: "attendance-tracker",
    icon: "✅",
    title: "Attendance Tracker",
    description:
      "Live web app for tracking attendance — practical tooling for courses and events.",
    href: "https://attendance-tracker-live.web.app/",
    linkLabel: "Open app",
    status: "link",
  },
];
