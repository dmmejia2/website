export type ImpactTier = "featured" | "standard" | "tool";

export interface ImpactInitiative {
  id: string;
  title: string;
  role: string;
  summary: string;
  outcomes: string;
  tier?: ImpactTier;
  href?: string;
  linkLabel?: string;
}

/** Programmatic initiatives: partners, grants, and institutional programs. */
export const impactInitiatives: ImpactInitiative[] = [
  {
    id: "aaii-champions",
    title: "AAII AI Champions",
    role: "Program Lead · NSF Transformation Grant · Apr 2026 – present",
    tier: "featured",
    summary:
      "University-wide faculty development under UTEP’s Institute for Applied AI Innovation, funded through the NSF Transformation Grant via the Provost’s Office, building AI fluency across disciplines, not only in Computer Science.",
    outcomes:
      "Three cohorts of eight faculty each from colleges across campus, including department chairs. Few faculty at the instructional rank lead professional development for colleagues who themselves hold departmental leadership roles.",
    href: "https://www.utep.edu/aaii/",
    linkLabel: "AAII at UTEP",
  },
  {
    id: "genai-consortium",
    title: "GenAI in CS Education Consortium",
    role: "CAHSI Lead · Jul 2025 – present",
    tier: "featured",
    summary:
      "National consortium for generative AI in postsecondary computer science: curriculum, instructor resources, and cross-institutional coordination at Hispanic-Serving Institutions.",
    outcomes:
      "Coordinates GenAI curriculum integration across roughly 20 CAHSI-affiliated member institutions, with faculty and staff participation from every one; public resources at teachcswithai.org.",
    href: "https://www.teachcswithai.org",
    linkLabel: "Teach CS with AI",
  },
  {
    id: "nsf-sstem",
    title: "NSF S-STEM Scholarship Program",
    role: "Co-Principal Investigator · Sep 2022 – Aug 2028",
    tier: "featured",
    summary:
      "NSF Scholarships in STEM ($4,978,320) with S. Salamah and M. Martin, supporting academically talented students with financial need at an HSI through scholarships and co-curricular pathways.",
    outcomes:
      "Program design draws on CAHSI evidence-based practices; applications and overview available through UTEP Computer Science.",
    href: "https://www.utep.edu/cs/opportunities/sstem.html",
    linkLabel: "S-STEM at UTEP",
  },
  {
    id: "msswe",
    title: "M.S. in Software Engineering (MSSwE)",
    role: "Program Director · Aug 2024 – present",
    tier: "featured",
    summary:
      "Professional graduate degree spanning curriculum design, recruitment, accreditation preparation, practicum, and Secure Cyber-Systems track options.",
    outcomes:
      "Fast Track (combined B.S./M.S.) participation grew from roughly five applicants per term to more than thirty through outreach, streamlined advising, and stronger faculty engagement.",
    href: "https://catalog.utep.edu/grad/college-of-engineering/computer-science/software-engineering/",
    linkLabel: "Graduate catalog",
  },
  {
    id: "aaii",
    title: "Institute for Applied AI Innovation (AAII)",
    role: "Education, Workforce & Professional Development Lead · Oct 2025 – present",
    tier: "standard",
    summary:
      "UTEP’s university-wide AI institute spanning education, workforce, research, and community-engaged innovation.",
    outcomes:
      "Sets educational and workforce strategy for the institute and aligns programming with institutional and national priorities in applied AI.",
    href: "https://www.utep.edu/aaii/",
    linkLabel: "AAII at UTEP",
  },
  {
    id: "tech-exchange",
    title: "UTEP / Google Tech Exchange",
    role: "UTEP Representative · Academic Lead since Jan 2023 · 2020 – present",
    tier: "standard",
    summary:
      "UTEP’s primary academic liaison for Google Tech Exchange, one of Google's flagship university engagement programs for HBCU and HSI partners.",
    outcomes:
      "Co-instructed the Software Development Studio with Google engineers, reaching students from HBCUs and HSIs. The partnership strengthened UTEP’s position as a key HSI partner and underpinned GenAI-in-SE scholarship at SIGCSE and ITiCSE 2025.",
  },
  {
    id: "visa-literacy",
    title: "VISA / UTEP Financial Literacy",
    role: "Faculty Collaborator · Jul 2023 – present",
    tier: "standard",
    summary:
      "Corporate–academic partnership designing financial literacy curriculum that intertwines personal finance with technical development.",
    outcomes:
      "Co-developed Fundamentals of Financial Literacy; ongoing delivery with VISA program staff and UTEP academic leadership.",
  },
  {
    id: "codepath",
    title: "CodePath",
    role: "Institutional Liaison · Jan 2025 – present",
    tier: "standard",
    summary:
      "Campus point of contact for CodePath’s industry-aligned technical education and career preparation resources.",
    outcomes:
      "Coordinates between CodePath and UTEP academic units to expand student access to practical pathways into software careers.",
  },
  {
    id: "attendance-tracker",
    title: "Attendance Tracker",
    role: "Builder · live web tool",
    tier: "tool",
    summary:
      "Lightweight web application for attendance in courses and events: practical tooling for day-to-day teaching operations.",
    outcomes: "Deployed live app for classroom and event attendance workflows.",
    href: "https://attendance-tracker-live.web.app/",
    linkLabel: "Open app",
  },
];

export interface PartnerMark {
  name: string;
  line: string;
}

/** Typeset partner names for the Impact scale strip. */
export const partnerMarks: PartnerMark[] = [
  { name: "CAHSI", line: "GenAI curriculum across ~20 institutions" },
  { name: "NSF", line: "$4.98M S-STEM Co-PI through 2028" },
  { name: "Google", line: "Tech Exchange academic lead · HBCU/HSI studio" },
  { name: "AAII", line: "University-wide AI Champions faculty program" },
  { name: "VISA", line: "Financial literacy built with CS students" },
  { name: "ACM", line: "SIGCSE · ITiCSE computing education" },
];
