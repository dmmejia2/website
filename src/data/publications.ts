export type PubTheme = "genai" | "csed" | "smartcities";

export interface Publication {
  venue: string;
  year: string;
  title: string;
  details: string;
  href?: string;
  themes: PubTheme[];
  cite: string;
  featured?: boolean;
}

/** Selected works aligned with CV (July 2026). Prefer DOI / ACM DL / open PDF in `href`. */
export const publications: Publication[] = [
  {
    venue: "ITiCSE",
    year: "2026",
    title: "A Framework for Integrating Generative AI in CS Courses",
    details:
      "Martinez, V., Salazar-Perez, M., & Mejía, D. · Proceedings of the 31st Annual ACM Conference on Innovation and Technology in Computer Science Education, Madrid, Spain · Universidad Rey Juan Carlos.",
    href: "https://iticse.acm.org/2026/program/",
    themes: ["genai", "csed"],
    featured: true,
    cite: "Martinez, V., Salazar-Perez, M., & Mejía, D. (2026). A Framework for Integrating Generative AI in CS Courses. Proceedings of the 31st Annual ACM Conference on Innovation and Technology in Computer Science Education, Madrid, Spain.",
  },
  {
    venue: "ITiCSE",
    year: "2025",
    title:
      "Bridging Academia and Industry: Leveraging Generative AI in a Software Engineering Course for Practical Industry Experiences",
    details: "Mejía, D., Holmes, E. D., Marroquin, J., & Gorson Benario, J. · ITiCSE 2025, Nijmegen, Netherlands.",
    href: "https://doi.org/10.1145/3724363.3729036",
    themes: ["genai", "csed"],
    featured: true,
    cite: "Mejía, D., Holmes, E. D., Marroquin, J., & Gorson Benario, J. (2025). Bridging academia and industry: Leveraging generative AI in a software engineering course for practical industry experiences. Proceedings of the 30th ACM Conference on Innovation and Technology in Computer Science Education. https://doi.org/10.1145/3724363.3729036",
  },
  {
    venue: "SIGCSE",
    year: "2025",
    title:
      "Unlocking Potential with Generative AI Instruction: Investigating Mid-level Software Development Student Perceptions, Behavior, and Adoption",
    details: "Gorson Benario, J., Marroquin, J., Chan, M. M., Holmes, E. D., & Mejía, D. · ACM SIGCSE TS 2025, Vol. 1 (pp. 395–401).",
    href: "https://doi.org/10.1145/3641554.3701859",
    themes: ["genai", "csed"],
    featured: true,
    cite: "Gorson Benario, J., Marroquin, J., Chan, M. M., Holmes, E. D., & Mejía, D. (2025). Unlocking potential with generative AI instruction: Investigating mid-level software development student perceptions, behavior, and adoption. Proceedings of the 56th ACM Technical Symposium on Computer Science Education, Vol. 1, 395–401. https://doi.org/10.1145/3641554.3701859",
  },
  {
    venue: "IEEE ISC2",
    year: "2022",
    title: "Data-Driven Metrics Applied to Traffic Crashes to Improve Observability in Smart Cities",
    details: "Mejía, D., & Villanueva-Rosales, N. · 2022 IEEE International Smart Cities Conference (ISC2), Paphos, Cyprus.",
    href: "https://doi.org/10.1109/isc255366.2022.9922067",
    themes: ["smartcities"],
    cite: "Mejía, D., & Villanueva-Rosales, N. (2022). Data-driven metrics applied to traffic crashes to improve observability in smart cities. 2022 IEEE International Smart Cities Conference (ISC2). https://doi.org/10.1109/isc255366.2022.9922067",
  },
  {
    venue: "IEEE SmartWorld",
    year: "2017",
    title: "Integrating Heterogeneous Freight Performance Data for Smart Mobility",
    details:
      "Mejía, D., Villanueva-Rosales, N., Torres, E., & Cheu, R. L. · 2017 IEEE SmartWorld / SCALCOM / UIC / ATC / CBDCom / IOP / SCI, pp. 1–8.",
    href: "https://ieeexplore.ieee.org/document/8397581",
    themes: ["smartcities"],
    cite: "Mejía, D., Villanueva-Rosales, N., Torres, E., & Cheu, R. L. (2017). Integrating heterogeneous freight performance data for smart mobility. 2017 IEEE SmartWorld. https://ieeexplore.ieee.org/document/8397581",
  },
  {
    venue: "Dissertation",
    year: "2019",
    title:
      "A Bottom-Up Modeling Methodology Using Knowledge Graphs for Composite Metric Development Applied to Traffic Crashes in the State of Texas",
    details: "Ph.D. dissertation · The University of Texas at El Paso.",
    href: "https://scholarworks.utep.edu/open_etd/index.19.html",
    themes: ["smartcities"],
    cite: "Mejía, D. M. (2019). A bottom-up modeling methodology using knowledge graphs for composite metric development applied to traffic crashes in the State of Texas [Doctoral dissertation, The University of Texas at El Paso].",
  },
  {
    venue: "ISWC",
    year: "2018",
    title: "Towards Semantically Annotated Data-Driven Methodologies for Composite Metric Development in Traffic Incidents",
    details: "Doctoral Consortium · International Semantic Web Conference, Monterey, CA.",
    href: "https://ceur-ws.org/Vol-2181/paper-07.pdf",
    themes: ["smartcities"],
    cite: "Mejía, D. (2018). Towards semantically annotated data-driven methodologies for composite metric development in traffic incidents. ISWC 2018 Doctoral Consortium, Monterey, CA. https://ceur-ws.org/Vol-2181/paper-07.pdf",
  },
  {
    venue: "Thesis",
    year: "2017",
    title: "Integration of Heterogeneous Traffic Data to Address Mobility Challenges in the City of El Paso",
    details: "M.S. thesis · The University of Texas at El Paso.",
    href: "https://scholarworks.utep.edu/open_etd/",
    themes: ["smartcities"],
    cite: "Mejía, D. M. (2017). Integration of heterogeneous traffic data to address mobility challenges in the City of El Paso [Master’s thesis, The University of Texas at El Paso].",
  },
];
