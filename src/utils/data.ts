export const user = {
  name: "Samuel Madu",
  title: "Product Management Specialist | UI/UX Design Expert | Business Analyst",
  description:
    "I’m Samuel Madu — a senior product designer passionately creating digital experiences and solutions for over 10 years",
  email: "",
  phone: "",
  about:
    "I hold a Bachelor of Technology in Computer Science from the esteemed Art University and a Master of Fine Arts in Interactive Design. This academic foundation has equipped me with a solid understanding of the principles that underpin effective interaction design, providing me with the knowledge to create designs that seamlessly blend aesthetics and functionality.",
  imagePath: "/images/profile.jpeg",
  address: "",
  completedProjects: 100,
  satisfiedCustomer: 60,
  positiveReviews: 400,
};

export const education = [
  {
    degree: "",
    school: "",
    start: "",
    end: "",
  },
];

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
    title: "Lead Product Designer",
    company: "Company 1",
    start: "2023",
    end: "Present",
    responsibility: "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
  },
  {
    title: "Title 2",
    company: "Company 2",
    start: "2020",
    end: "2023",
    responsibility: "Collaborated with the development team to implement a responsive design approach, improving the mobile user experience and increasing mobile app engagement.",
  },
  {
    title: "Title 3",
    company: "Company 3",
    start: "2018",
    end: "2020",
    responsibility: "Designed and implemented creative solutions such as wellness app and high-traffic e-commerce websites for various clients and increase overall client bussines to his satisfaction.",
  },
  {
    title: "Title 4",
    company: "Company 4",
    start: "2015",
    end: "2018",
    responsibility: "nternship and starting position in creative team as Junior Designer. Focused on creating wireframes, styleguides, presentations and prototypes for web and mobile applications.",
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