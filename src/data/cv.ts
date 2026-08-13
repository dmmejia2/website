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

/** Aligned with Mejia_Daniel CV July 2026. */
export const education: EducationEntry[] = [
  {
    degree: "Doctor of Philosophy in Computer Science",
    year: "May 2019",
    school: "The University of Texas at El Paso",
    detail:
      "Dissertation: A Bottom-Up Modeling Methodology Using Knowledge Graphs for Composite Metric Development Applied to Traffic Crashes in the State of Texas.",
  },
  {
    degree: "Master of Science in Computer Science",
    year: "May 2017",
    school: "The University of Texas at El Paso",
    detail:
      "Thesis: Integration of Heterogeneous Traffic Data to Address Mobility Challenges in the City of El Paso.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    year: "May 2015",
    school: "The University of Texas at El Paso",
    detail: "Graduated with Honors, Cum Laude.",
  },
];

/** Research interests from the July 2026 CV. */
export const skills: string[] = [
  "Agile software engineering",
  "Generative AI in CS education",
  "Software engineering pedagogy",
  "Knowledge graphs & semantic web",
  "Data-driven methods for smart cities",
  "Equity & access in computing education (CAHSI / HSI)",
];

export const positions: CvPosition[] = [
  {
    title: "Assistant Professor of Instruction",
    period: "Sep 2024 – present",
    org: "Department of Computer Science · The University of Texas at El Paso",
    body:
      "Delivers one of the department’s highest teaching loads across undergraduate and graduate courses, including Data Structures, Junior Professional Orientation, Applied Agile Software Development, Software Engineering Practicum, and Introduction to Computer Science. Directs the M.S. in Software Engineering. Leads IRB-approved research in agile SE and GenAI education; publishes at SIGCSE and ITiCSE (including ITiCSE 2026 poster, Madrid). CAHSI GenAI Consortium Lead; AAII AI Champions under the NSF Transformation Grant. Mentors graduate and undergraduate researchers each term and advises ~30 additional students. Serves on Fundamentals, Software Course, CQI (Lead), and Course Planning & Schedule committees; CodePath Institutional Liaison; Tech Enhanced Learning Advisory Board.",
  },
  {
    title: "Education, Workforce & Professional Development Lead",
    period: "Oct 2025 – present",
    org: "Institute for Applied AI Innovation (AAII) · UTEP",
    body:
      "Directs educational and workforce strategy for AAII. Leads AAII AI Champions (Apr 2026 – present), a university-wide faculty development program under the NSF Transformation Grant. CAHSI Lead for the GenAI in CS Education Consortium (Jul 2025 – present). Designs course modules integrating generative AI into computing curricula with attention to equitable, research-informed adoption.",
  },
  {
    title: "Visiting Assistant Professor",
    period: "Sep 2020 – Aug 2024",
    org: "Department of Computer Science · UTEP",
    body:
      "Taught nine distinct CS courses; designed and launched Applied Agile Software Development (CS 4381/5381). UTEP Academic Lead for Google Tech Exchange; co-instructed Software Development Studio with Google engineers. Co-led UTEP/VISA Financial Literacy. Secured three external awards totaling over $30,000 for undergraduate ML exposure and pathways to graduate school.",
  },
  {
    title: "Laboratory & Research Coordinator / Lecturer",
    period: "Aug 2019 – Aug 2020",
    org: "Department of Computer Science · UTEP",
    body:
      "Managed department-wide lab operations and CS fundamentals instruction. Recruited, onboarded, and supervised 50+ teaching assistants, instructional assistants, and peer leaders per semester. Primary MSCS academic advisor across all tracks.",
  },
  {
    title: "Ph.D. Research Associate",
    period: "Aug 2016 – May 2019",
    org: "iLink Research Labs @ Cyber-ShARE · UTEP",
    body:
      "Dissertation research on knowledge graphs and semantic web for composite metrics in smart-city traffic crash analysis in Texas. Presented at the ISWC Doctoral Consortium and IEEE SmartWorld.",
  },
  {
    title: "Associate Programmer",
    period: "Jul 2014 – Feb 2017",
    org: "GHG Corporation – Lockheed Martin / Leidos Storefront",
    body:
      "Developed and maintained mission-critical software in a defense contracting environment supporting Lockheed Martin and Leidos programs, while managing concurrent academic responsibilities.",
  },
];

export const serviceEntries: ServiceEntry[] = [
  {
    title: "Program Director, M.S. in Software Engineering",
    period: "Aug 2024 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Oversees curriculum design, student recruitment, academic planning, accreditation alignment, and program learning outcomes.",
  },
  {
    title: "M.S. Computer Science Program Advisor",
    period: "Aug 2020 – Aug 2024",
    org: "Department of Computer Science · UTEP",
    body:
      "Primary academic advisor for all M.S. Computer Science students across tracks and specializations.",
  },
  {
    title: "Graduate Student Coordinator / Assistant Graduate Program Director",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Advises MSCS and MSDIS students; maintains graduate program records; Graduate Program Committee; collaborates with the Graduate School and College of Engineering.",
  },
  {
    title: "Fast Track Advisor & Departmental Coordinator",
    period: "2020 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Combined B.S./M.S. pathway; grew participation from ~5 to 30+ applicants per semester through outreach, streamlined advising, and faculty engagement.",
  },
  {
    title: "TA & Peer Leader Coordinator",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Supervises 50+ teaching assistants, instructional assistants, and peer leaders each semester; hiring, assignments, and professional development.",
  },
  {
    title: "CQI Committee, Lead, Software Engineering",
    period: "Jan 2026 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Continuous quality improvement for software engineering course outcomes, assessment, and accreditation alignment.",
  },
  {
    title: "Course Planning & Schedule Committee",
    period: "Aug 2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Department master schedule across three terms per year; faculty coverage and university scheduling coordination.",
  },
  {
    title: "Fundamentals Course Committee",
    period: "Aug 2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Quality, learning outcomes, and alignment across foundational CS courses.",
  },
  {
    title: "Software Course Committee, Lead",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body: "Learning outcomes and industry-aligned updates for software-focused courses.",
  },
  {
    title: "Tech Enhanced Learning Advisory Board, Member",
    period: "Nov 2024 – present",
    org: "The University of Texas at El Paso",
    body: "University-wide board on technology integration in student learning.",
  },
  {
    title: "Entering Engineering Committee, Member",
    period: "May 2024 – Jan 2026",
    org: "College of Engineering · UTEP",
    body: "ENGR core course outcomes and curricular sequencing for entering engineering students.",
  },
  {
    title: "Faculty Advisor, Coding Interview Club",
    period: "Jan 2025 – present",
    org: "UTEP Student Engagement & Leadership Center",
    body: "Technical interview preparation, algorithmic problem-solving, and professional readiness.",
  },
  {
    title: "Faculty Advisor, ACM Student Chapter",
    period: "Aug 2022 – Jul 2025",
    org: "UTEP Student Engagement & Leadership Center",
    body: "Professional development, research awareness, and chapter programming support.",
  },
  {
    title: "Faculty Advisor, Google Developer Student Club",
    period: "Jan 2023 – Dec 2023",
    org: "UTEP Student Engagement & Leadership Center",
    body: "Software development, emerging technologies, and industry engagement.",
  },
  {
    title: "Faculty Advisor, Game Builders!",
    period: "Aug 2021 – Aug 2022",
    org: "UTEP Student Engagement & Leadership Center",
    body: "Game design and development mentoring for student project work.",
  },
];

export const externalServiceEntries: ServiceEntry[] = [
  {
    title: "NSF Transformation Grant — AI Champions Program Lead",
    period: "Apr 2026 – present",
    org: "National Science Foundation / UTEP",
    body:
      "Leads AAII AI Champions faculty development, advancing AI integration across disciplines through structured training and curriculum support.",
  },
  {
    title: "CAHSI GenAI in CS Education Consortium — Consortium Lead",
    period: "Jul 2025 – present",
    org: "Computing Alliance of Hispanic-Serving Institutions",
    body:
      "Cross-institutional coordination to develop, pilot, and disseminate evidence-based GenAI curriculum at HSIs and CAHSI-affiliated institutions.",
  },
  {
    title: "Google Tech Exchange — Academic Lead",
    period: "Jan 2023 – Oct 2025",
    org: "Google LLC & UTEP",
    body:
      "UTEP’s primary academic liaison; co-instructed Software Development Studio with Google engineers for HBCU and HSI students.",
  },
  {
    title: "VISA / UTEP Financial Literacy Initiative — Faculty Collaborator",
    period: "Jul 2023 – present",
    org: "Visa Inc. & UTEP",
    body: "Design and delivery of financial literacy curriculum in a corporate–academic partnership.",
  },
  {
    title: "CodePath — Institutional Liaison",
    period: "Jan 2025 – present",
    org: "CodePath.org",
    body: "Campus point of contact for industry-aligned technical education and career preparation pathways.",
  },
  {
    title: "Reviewer, ACM SIGCSE Technical Symposium",
    period: "Present",
    org: "ACM SIGCSE",
    body: "Peer reviewer for computing education research submissions.",
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
      "Scholars Program: Enhancing Career and Academic Pathways for Academically Talented Students with Financial Need through Accessible and High-Quality Education Leveraging CAHSI Evidence-Based Practices.",
  },
  {
    title: "Google Award: exploreCSR",
    period: "Sep 2021 – May 2022",
    org: "Google",
    role: "Principal Investigator",
    amount: "$24,000",
    body: "Machine Learning and Computational Research for Clear Pathways to Graduate School.",
  },
  {
    title: "TensorFlow Award (Google)",
    period: "Sep 2021 – May 2022",
    org: "Google",
    role: "Principal Investigator",
    amount: "$6,000",
    body: "Exposure of Machine Learning for Undergraduate Students.",
  },
];

export const cvPdfHref = "./cv-daniel-mejia.pdf";
