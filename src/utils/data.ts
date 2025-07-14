export const user = {
    name: "Samuel Madu",
    title: "Product designer | UI/UX designer",
    description: "I’m Samuel Madu — a senior product designer passionately creating digital experiences and solutions for over 10 years",
    email: "",
    phone: "",
    about: "I hold a Bachelor of Technology in Computer Science from the esteemed Art University and a Master of Fine Arts in Interactive Design. This academic foundation has equipped me with a solid understanding of the principles that underpin effective interaction design, providing me with the knowledge to create designs that seamlessly blend aesthetics and functionality.",
    imagePath: "/images/profile.avif",
    address: "",
    completedProjects: 0,
    satisfiedCustomer: 0,
    positiveReviews: 0
}


export const education = [
    {
        degree: "",
        school: "",
        start: "",
        end: "",
    }
]

export interface Menu {
    title: string;
    path: string;
}

export const menuItems : Menu[] = [
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
]

export interface Skill {
    title: string;
    description: string;
    percent: number;
}
export const skills : Skill[] = [
  {
    title: "Product Design",
    description: "Designing end-to-end product experiences from research to final UI with a strong focus on solving user problems.",
    percent: 92,
  },
  {
    title: "UI Design",
    description: "Creating visually stunning, pixel-perfect interfaces that align with brand and improve user engagement.",
    percent: 95,
  },
  {
    title: "UX Research",
    description: "Conducting user interviews, surveys, and usability tests to uncover insights and inform design decisions.",
    percent: 88,
  },
  {
    title: "Design Systems",
    description: "Building scalable design systems for consistent UI across products, ensuring efficiency and brand coherence.",
    percent: 90,
  },
  {
    title: "Prototyping",
    description: "Rapidly creating interactive prototypes to validate ideas and communicate design solutions to stakeholders.",
    percent: 85,
  },
  {
    title: "Collaboration",
    description: "Working closely with developers, PMs, and stakeholders to deliver seamless product experiences and meet business goals.",
    percent: 93,
  },
]
