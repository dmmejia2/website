export interface EducationEntry {
  degree: string;
  year: string;
  school: string;
  /** Thesis / dissertation subtitle */
  detail?: string;
}

export interface CvPosition {
  title: string;
  period: string;
  org: string;
  body?: string;
}

export interface GrantEntry {
  title: string;
  period: string;
  org: string;
  body?: string;
  /** Displayed prominently (e.g. total award) */
  amount?: string;
  role?: string;
}

export interface ServiceEntry {
  title: string;
  period: string;
  org: string;
  body?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Doctor of Philosophy in Computer Science",
    year: "2019",
    school: "The University of Texas at El Paso",
    detail:
      "Dissertation: A Bottom-Up Modeling Methodology Using Knowledge Graphs for Composite Metric Development Applied to Traffic Crashes in the State of Texas.",
  },
  {
    degree: "Master of Science in Computer Science",
    year: "2017",
    school: "The University of Texas at El Paso",
    detail:
      "Thesis: Integration of Heterogeneous Traffic Data to Address Mobility Challenges in the City of El Paso.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    year: "2015",
    school: "The University of Texas at El Paso",
    detail: "Graduated with Honors, Cum Laude.",
  },
];

export const skills: string[] = [
  "Agile & software engineering pedagogy",
  "Generative AI in CS education",
  "Mixed-methods & learning analytics",
  "Knowledge graphs & semantic web",
  "Smart cities & mobility analytics",
  "Python · Java · TensorFlow outreach",
  "NSF & industry-sponsored research",
  "Curriculum design · MSSE program leadership",
  "Large-scale TA coordination & mentoring",
];

export const positions: CvPosition[] = [
  {
    title: "Assistant Professor of Instruction",
    period: "Sep 2024 – present",
    org: "Department of Computer Science · The University of Texas at El Paso",
    body:
      "Teaches undergraduate and graduate CS courses (data structures, software engineering, professional development). Directs the M.S. in Software Engineering program. Conducts research on agile-centered software engineering education and project-based learning aligned with industry. Serves on department committees for fundamentals, software courses, and course scheduling.",
  },
  {
    title: "Education, Workforce & Professional Development Lead",
    period: "Oct 2025 – present",
    org: "Institute for Applied AI Innovation (AAII) · UTEP",
    body:
      "Leads educational and workforce initiatives in applied AI. CAHSI Lead for the GenAI in CS Education Consortium (Jul 2025 – present), coordinating generative-AI integration across CAHSI-affiliated institutions. Develops course modules and advocates for equitable, evidence-based AI adoption for historically underrepresented students.",
  },
  {
    title: "Visiting Assistant Professor",
    period: "Sep 2020 – Aug 2024",
    org: "Department of Computer Science · UTEP",
    body:
      "Delivered core CS instruction; developed the Applied Agile Software Engineering curriculum. Google Faculty in Residence and Academic Lead for the UTEP/Google Tech Exchange program. Co-led the UTEP/VISA Financial Literacy course development team.",
  },
  {
    title: "Laboratory & Research Coordinator / Lecturer",
    period: "Aug 2019 – Aug 2020",
    org: "Department of Computer Science · UTEP",
    body:
      "Coordinated lab operations and CS fundamentals instruction. Supervised 50+ student instructional employees per semester and streamlined TA hiring.",
  },
  {
    title: "Ph.D. Research Associate",
    period: "Aug 2016 – May 2019",
    org: "iLink Research Labs @ Cyber-ShARE · UTEP",
    body:
      "Research in knowledge graphs, semantic web technologies, and data-driven composite metrics for smart-city traffic analysis.",
  },
  {
    title: "Associate Programmer",
    period: "Jul 2014 – Feb 2017",
    org: "GHG Corporation – Lockheed Martin / Leidos Storefront",
    body: "Developed and maintained software systems in a defense contracting environment.",
  },
];

export const serviceEntries: ServiceEntry[] = [
  {
    title: "Program Director, M.S. in Software Engineering",
    period: "Aug 2024 – present",
    org: "Department of Computer Science · UTEP",
    body: "Directs the MSSwE program for curriculum development and student success.",
  },
  {
    title: "Graduate Student Coordinator / Assistant Graduate Program Director",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body: "Graduate program data, Graduate School and College of Engineering collaboration; manages the Fast Track program.",
  },
  {
    title: "TA Coordinator",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body: "Supervises 50+ student employees per semester; coordinates assignments and hiring.",
  },
  {
    title: "Software Course Committee — Lead",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body: "Leads continuous improvement of software engineering course offerings.",
  },
  {
    title: "Course Planning & Schedule Committee",
    period: "Aug 2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Develops the department master schedule.",
  },
  {
    title: "Fundamentals Course Committee",
    period: "Aug 2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Contributes to quality improvement of core CS courses.",
  },
  {
    title: "Tech Enhanced Learning Advisory Board — Member",
    period: "Nov 2024 – present",
    org: "The University of Texas at El Paso",
    body: "University-wide board on technology integration in student learning.",
  },
  {
    title: "CodePath Institutional Liaison",
    period: "Jan 2025 – present",
    org: "UTEP",
    body: "Institutional partnership for industry-aligned computing pathways.",
  },
  {
    title: "Faculty Advisor, Coding Interview Club",
    period: "Jan 2025 – present",
    org: "UTEP Student Engagement & Leadership Center",
  },
];

export const grants: GrantEntry[] = [
  {
    title: "NSF Scholarships in STEM (S-STEM)",
    period: "Sep 2022 – Aug 2028",
    org: "National Science Foundation",
    role: "Co-Principal Investigator (with S. Salamah & M. Martin)",
    amount: "$4,978,320",
    body:
      "Scholars program enhancing career and academic pathways for academically talented students with financial need, leveraging CAHSI evidence-based practices.",
  },
  {
    title: "Google Award — exploreCSR",
    period: "Sep 2021 – May 2022",
    org: "Google",
    role: "Principal Investigator",
    amount: "$24,000",
    body: "Machine learning and computational research for clear pathways to graduate school.",
  },
  {
    title: "TensorFlow Award (Google)",
    period: "Sep 2021 – May 2022",
    org: "Google",
    role: "Principal Investigator",
    amount: "$6,000",
    body: "Exposure of machine learning for undergraduate students.",
  },
];

export const cvPdfHref = "/cv-daniel-mejia.pdf";
