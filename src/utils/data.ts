export const user = {
  name: "Samuel Madu",
  title: "Product Management Specialist | UI/UX Design Expert | Business Analyst",
  description:
    "I'm Samuel Madu — a senior product manager, business analyst, and UI/UX designer with over 16 years of experience transforming digital ideas into market-leading solutions across fintech, gaming, telecommunications, and entertainment industries. I'm passionate about building innovative digital experiences that drive business growth and user engagement.",
  email: "samuel.m@invade.ng",
  primaryPhoneNumber: "+234 708-854-2421",
  secondaryPhoneNumber: "+7 (929) 111-64-99",
  about:
    "With over 16 years of hands-on experience in product management, business analysis, and UI/UX design, I have successfully transformed digital concepts into market-leading solutions across fintech, gaming, telecommunications, and entertainment industries. My expertise spans the complete product lifecycle—from initial market research and user experience design to strategic implementation and post-launch optimization. I've led cross-functional teams, managed multi-million dollar product portfolios, and delivered innovative solutions for major telecom operators, gaming platforms, and financial technology companies across Nigeria, Cameroon, Ivory Coast, and Russia. Currently pursuing advanced studies in Technology Innovation Management from Saint Petersburg State Electrical Engineering University (ETU LETI), Russia to further enhance my strategic capabilities in emerging technologies.",
  imagePath: "/images/profile.jpeg",
  address: "",
  completedProjects: 100,
  satisfiedCustomer: 60,
  positiveReviews: 400,
};



export interface Menu {
  title: string;
  path: string;
}

export const menuItems: Menu[] = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Education",
    path: "/educaation",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export interface Skill {
  title: string;
  description: string;
  percent: number;
}
export const skills: Skill[] = [
  {
    title: "Product Design",
    description:
      "Designing end-to-end product experiences from research to final UI with a strong focus on solving user problems.",
    percent: 92,
  },
  {
    title: "UI Design",
    description:
      "Creating visually stunning, pixel-perfect interfaces that align with brand and improve user engagement.",
    percent: 95,
  },
  {
    title: "UX Research",
    description:
      "Conducting user interviews, surveys, and usability tests to uncover insights and inform design decisions.",
    percent: 88,
  },
  {
    title: "Design Systems",
    description:
      "Building scalable design systems for consistent UI across products, ensuring efficiency and brand coherence.",
    percent: 90,
  },
  {
    title: "Prototyping",
    description:
      "Rapidly creating interactive prototypes to validate ideas and communicate design solutions to stakeholders.",
    percent: 85,
  },
  {
    title: "Collaboration",
    description:
      "Working closely with developers, PMs, and stakeholders to deliver seamless product experiences and meet business goals.",
    percent: 93,
  },
];

export interface Project {
  title: string;
  service: string;
  industry: string;
  client: string;
  date: string;
  url: string;
  imagePath: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Dripylux (Web and Mobile app)",
    service: "",
    industry: "E-commerce",
    client: "Driplux Ltd",
    date: "January 2025",
    url: "https://www.dripylux.com",
    imagePath: "",
    description: "The platform was created bearing in mind that shopping for fashion should be fun, not frustrating. Dripylux takes the stress out of finding the perfect outfit with a curated selection from top brands, you can effortlessly explore and shop, saving you time, energy and money from multiple delivery charges.",
  },
  {
    title: "ZilliPay (Web and Mobile app)",
    service: "",
    industry: "Fintech",
    client: "Soystek",
    date: "March 2025",
    url: "https://zillipay.com",
    imagePath: "",
    description: "zilli pay is transforming how you manage your money by providing secure, fast, and smart digital payment solutions. From creating virtual cards to seamless currency conversion, zilli pay makes global transactions effortless and accessible.)",
  },
  {
    title: "PAY60 (Web and Mobile app)",
    service: "",
    industry: "Fintech",
    client: "Oatek Ltd",
    date: "",
    url: "https://pay60.co.uk",
    imagePath: "",
    description: "PAY60 is a ground-breaking international payment platform designed to revolutionize the way cross-border transactions are conducted.",
  },
  {
    title: "LODIOS VOD/OTT Media Platform(Web)",
    service: "",
    industry: "Media/streaming",
    client: "VAS2Nets Technologies",
    date: "",
    url: "https://lodios.com",
    imagePath: "",
    description: "Product manager for online content streaming platform. Oversaw entire product lifecycle from conception to deployment. Delivered entertainment and value-added services to top 5 blue-chip companies in Nigeria",
  },
];

export interface Experience {
  title: string;
  company: string;
  start: string;
  end: string;
  responsibility: string;
}

export const experiences: Experience[] = [
  {
    title: "Freelance UI/UX Designer & Business Analyst",
    company: "Various Clients",
    start: "2024",
    end: "Present",
    responsibility: "",
  },
  {
    title: "Lead, Product & Operations",
    company: " Artist3 Hub Digital Limited (GAMIC.APP)",
    start: "September 2022",
    end: "Present",
    responsibility: "Developed and implemented comprehensive product strategies and roadmap. Led market requirements gathering and management efforts. Integrated Web 3 projects (Games) with expertise in NFTs and GameFi",
  },
  {
    title: "Co-Founder & Business Analyst",
    company: "Firsdigital Limited (Cameroon, Ivory Coast)",
    start: "January 2021",
    end: "Present",
    responsibility: "Pioneered business and product development strategies across major Mobile Operators. Launched three digital services on ORANGE and MTN Cameroon. Generated $20,000-$40,000 revenue in second quarter of operations",
  },
  {
    title: "Senior Media & Content Manager (Business Analyst)",
    company: "VAS2Nets Technologies Limited, Lagos",
    start: "December 2013",
    end: "February 2021",
    responsibility: "Product manager for LODIOS.com VOD/OTT media platform. Delivered products to top 5 blue-chip companies in Nigeria. Served as VAS2Nets Country Manager for Cameroon. Led teams in product development across Fin-Tech, Entertainment, mobile health, and Agriculture sectors",
  },
  {
    title: "Head Content Admin",
    company: "VAS2Nets Technologies Limited, Lagos",
    start: "February 2009",
    end: "November 2013",
    responsibility: "Managed marketing campaigns and content development. Supervised team of 8 for SMS2tv & SMS2radio interactive platforms across Nigeria and Ghana. Created promotional materials including motion graphics and audiovisual content. Drove increased viewer/listener participation through innovative value-added services.",
  },

];


export const marqueeSkills = [
  "Figma",
  "Photoshop",
  "Draw.io",
  "Adobe Suit(Photoshop, Adobe Illustrator)",
  "Microsoft suit"
]


export interface Education {
  title: string;
  school: string;
  start: string;
  end: string;
}

export const educations: Education [] = [
  {
    title: "Master of Science in Technology Innovation Management",
    school: "Saint Petersburg State Electrical Engineering University (ETU LETI), Russia",
    start: "",
    end: ""
  },
  {
    title: "Postgraduate Diploma in Computer Science",
    school: "Imo State University, Owerri, Nigeria",
    start: "",
    end: ""
  },
  {
    title: "Higher National Diploma in Computer Science (Bachelor's Degree Equivalent)",
    school: " Institute of Management & Technology, Enugu, Nigeria",
    start: "",
    end: ""
  },
]