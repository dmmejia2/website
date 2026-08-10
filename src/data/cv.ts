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
  "Curriculum design · MSSwE program leadership",
  "NSF & industry-sponsored research",
  "Large-scale TA / peer-leader coordination",
  "Faculty development · AI Champions",
];

export const positions: CvPosition[] = [
  {
    title: "Assistant Professor of Instruction",
    period: "Sep 2024 – present",
    org: "Department of Computer Science · The University of Texas at El Paso",
    body:
      "High teaching load across undergraduate and graduate CS (Data Structures, Junior Professional Orientation, Applied Agile, SE Practicum, Intro CS). Directs the M.S. in Software Engineering. Leads IRB-approved research in agile SE and GenAI education; publishes at SIGCSE and ITiCSE. CAHSI GenAI Consortium Lead; AAII AI Champions under NSF Transformation Grant. Mentors graduate and undergraduate researchers each term. Serves on Fundamentals, Software Course, CQI (Lead), and Course Planning committees; CodePath liaison; Tech Enhanced Learning Advisory Board.",
  },
  {
    title: "Education, Workforce & Professional Development Lead",
    period: "Oct 2025 – present",
    org: "Institute for Applied AI Innovation (AAII) · UTEP",
    body:
      "Directs educational and workforce strategy for AAII. Leads AAII AI Champions (Apr 2026 – present), a university-wide faculty development program under the NSF Transformation Grant. CAHSI Lead for the GenAI in CS Education Consortium (Jul 2025 – present).",
  },
  {
    title: "Visiting Assistant Professor",
    period: "Sep 2020 – Aug 2024",
    org: "Department of Computer Science · UTEP",
    body:
      "Taught nine distinct CS courses; launched Applied Agile Software Development. UTEP Academic Lead for Google Tech Exchange; co-instructed Software Development Studio with Google engineers. Co-led UTEP/Visa Financial Literacy. Secured Google exploreCSR and TensorFlow awards totaling over $30,000.",
  },
  {
    title: "Laboratory & Research Coordinator / Lecturer",
    period: "Aug 2019 – Aug 2020",
    org: "Department of Computer Science · UTEP",
    body:
      "Managed lab operations and CS fundamentals instruction. Recruited and supervised teaching assistants, instructional assistants, and peer leaders each semester. Primary MSCS academic advisor.",
  },
  {
    title: "Ph.D. Research Associate",
    period: "Aug 2016 – May 2019",
    org: "iLink Research Labs @ Cyber-ShARE · UTEP",
    body:
      "Knowledge graphs and semantic web for composite metrics in smart-city traffic crash analysis; ISWC Doctoral Consortium and IEEE SmartWorld presentations.",
  },
  {
    title: "Associate Programmer",
    period: "Jul 2014 – Feb 2017",
    org: "GHG Corporation – Lockheed Martin / Leidos Storefront",
    body: "Mission-critical software in a defense contracting environment supporting Lockheed Martin and Leidos programs.",
  },
];

export const serviceEntries: ServiceEntry[] = [
  {
    title: "Program Director, M.S. in Software Engineering",
    period: "Aug 2024 – present",
    org: "Department of Computer Science · UTEP",
    body: "Curriculum, recruitment, accreditation preparation, and program learning outcomes.",
  },
  {
    title: "Fast Track Advisor & Departmental Coordinator",
    period: "2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Combined B.S./M.S. pathway; grew participation from ~5 to 30+ applicants per term.",
  },
  {
    title: "Graduate Student Coordinator / Assistant Graduate Program Director",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body: "Advises MSCS and MSDIS students; graduate program data; Graduate School and College of Engineering collaboration.",
  },
  {
    title: "TA & Peer Leader Coordinator",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body: "Supervises teaching assistants, instructional assistants, and peer leaders each semester; hiring and assignments.",
  },
  {
    title: "CQI Committee, Lead, Software Engineering",
    period: "Jan 2026 – present",
    org: "Department of Computer Science · UTEP",
    body: "Continuous quality improvement for software engineering course outcomes and accreditation alignment.",
  },
  {
    title: "Software Course Committee, Lead",
    period: "Aug 2019 – present",
    org: "Department of Computer Science · UTEP",
    body: "Learning outcomes and industry-aligned updates for software-focused courses.",
  },
  {
    title: "Course Planning & Schedule Committee",
    period: "Aug 2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Department master schedule across three terms per year.",
  },
  {
    title: "Fundamentals Course Committee",
    period: "Aug 2020 – present",
    org: "Department of Computer Science · UTEP",
    body: "Quality and alignment across foundational CS courses.",
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
    title: "CodePath Institutional Liaison",
    period: "Jan 2025 – present",
    org: "CodePath.org · UTEP",
    body: "Industry-aligned technical education and career preparation pathways.",
  },
  {
    title: "Faculty Advisor, Coding Interview Club",
    period: "Jan 2025 – present",
    org: "UTEP Student Engagement & Leadership Center",
  },
  {
    title: "Faculty Advisor, ACM Student Chapter",
    period: "Aug 2022 – Jul 2025",
    org: "UTEP Student Engagement & Leadership Center",
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
      "Scholars program enhancing career and academic pathways for academically talented students with financial need, leveraging CAHSI evidence-based practices.",
  },
  {
    title: "Google Award: exploreCSR",
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
