export const user = {
    name: "Samuel Madu",
    title: "Product designer | UI/UX designer",
    description: "I’m Samuel Madu — a senior product designer passionately creating digital experiences and solutions for over 10 years",
    email: "",
    phone: "",
    about: "",
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