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

/** Aligned with the August 2026 promotion dossier and July 2026 CV. */
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
      "Delivers one of the department’s highest teaching loads across undergraduate and graduate courses, including Data Structures, Junior Professional Orientation, Applied Agile Software Engineering, Software Engineering Practicum, and Introduction to Computer Science. Directs the M.S. in Software Engineering. Leads IRB-approved research in agile SE and GenAI education; publishes at SIGCSE and ITiCSE (including an ITiCSE 2026 poster, Madrid). CAHSI GenAI Consortium Lead; AAII AI Champions under the NSF Transformation Grant. Currently mentors one Master’s student and six undergraduate researchers, and advises ~30 additional students each term. Serves on Fundamentals, Software Course, CQI (Lead), and Course Planning & Schedule committees; CodePath Institutional Liaison; Tech Enhanced Learning Advisory Board.",
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
      "Oversees curriculum design, student recruitment, academic planning, accreditation alignment, and program learning outcomes. Admitted cohorts averaged 8.8 students before the directorship and 15.3 from Fall 2024 through Spring 2026; the three most recent terms average 18. Of 236 MSSwE graduates in the institutional window, one in four came through Fast Track. Observed completion is 72%, with a median graduating GPA of 3.70.",
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
      "Advises MSCS and MSDIS students; maintains graduate program records; Graduate Program Committee; collaborates with the Graduate School and the Miguel A. Loya College of Engineering.",
  },
  {
    title: "Fast Track Advisor & Departmental Coordinator",
    period: "2020 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Combined B.S./M.S. pathway; grew participation from ~5 to 30+ applicants per semester. Annual Fast Track graduate-degree completions rose from 2 in 2019 to an average of over 12 per year (2020–2026). Median time from BSCS to MSSwE is 0.99 years versus 1.42 on the traditional path. Of 281 Fast Track students on record, 83 have earned a CS graduate degree (59 MSSwE, 24 MSCS) and 6 have continued to the CS Ph.D.",
  },
  {
    title: "TA & Peer Leader Coordinator",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Reviews 150+ applications per semester (more than 2,100 across 7 years) and supervises 50+ teaching assistants, instructional assistants, and peer leaders each term. Instructor of record for CS 1101, the TA-led lab paired with CS 1301.",
  },
  {
    title: "CQI Committee, Lead, Software Engineering",
    period: "Jan 2026 – present",
    org: "Department of Computer Science · UTEP",
    body:
      "Continuous quality improvement for software engineering course outcomes, assessment, and accreditation alignment, coordinating 6 faculty.",
  },
  {
    title: "Course Planning & Schedule Committee",
    period: "Aug 2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Department master schedule across three terms per year: roughly 90 sections each fall and spring, more than 1,200 fall/spring sections over 7 years.",
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
    org: "Miguel A. Loya College of Engineering · UTEP",
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
    period: "Aug 2022 – present",
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
      "Leads AAII AI Champions faculty development, advancing AI integration across disciplines through structured training and curriculum support. Three cohorts of eight faculty (24 total), including three department chairs, have completed the program.",
  },
  {
    title: "CAHSI GenAI in CS Education Consortium — Consortium Lead",
    period: "Jul 2025 – present",
    org: "Computing Alliance of Hispanic-Serving Institutions",
    body:
      "Cross-institutional coordination to develop, pilot, and disseminate evidence-based GenAI curriculum at HSIs and CAHSI-affiliated institutions, supported by a $110,000 CAHSI award. Resources are shared across CAHSI and the CAHSI-HACU AI Readiness Consortium.",
  },
  {
    title: "Google Tech Exchange — Academic Lead",
    period: "2020 – present · Academic Lead since Jan 2023",
    org: "Google LLC & UTEP",
    body:
      "UTEP’s primary academic liaison since shortly after joining as Visiting Assistant Professor; Academic Lead from January 2023. Co-instructed Software Development Studio with Google engineers for HBCU and HSI students (26 students directly). Informed SIGCSE 2025 and ITiCSE 2025 publications.",
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
    title: "CAHSI Award: Consortium for Generative AI in Computer Science Education",
    period: "2025 – present",
    org: "Computing Alliance of Hispanic-Serving Institutions",
    role: "Lead",
    amount: "$110,000",
    body:
      "Supports UTEP’s participation in the Consortium for Generative AI in Computer Science Education, including faculty professional development across the CAHSI network and dissemination through the CAHSI-HACU AI Readiness Consortium.",
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

export const cvPdfHref = "/cv-daniel-mejia.pdf";
