# Framer Portfolio

> A responsive, animated, and modern portfolio built with **Next.js**.

---

##  Live Preview

 [https://samuelmadu.vercel.app](https://samuelmadu.vercel.app)

---

##  Project Structure

- `data.ts` – Centralized file containing all personal data:
  - Bio
  - Skills
  - Experiences
  - Projects
  - Education
  - Marquee Skills

- `components/` – Modular React components like:
  - `Hero`
  - `About`
  - `Skills`
  - `ProjectCard`
  - `ExperienceCard`
  - `MarqueeComponent`

- `context/themeContext.ts` – Light/Dark mode toggle logic using React Context

- `styles/globals.css` – Global styles using Tailwind and CSS variables for themes

---

## 🛠️ Tech Stack

| Tool                                    | Purpose                                 |
|-----------------------------------------|-----------------------------------------|
| [Next.js](https://nextjs.org)           | React framework for SSR/SSG             |
| [TypeScript](https://www.typescriptlang.org) | Type safety and better DX          |
| [TailwindCSS](https://tailwindcss.com)  | Utility-first CSS for rapid styling     |
| [Framer Motion](https://www.framer.com/motion/) | Smooth animations and UI transitions |
| [GSAP](https://greensock.com/gsap/)     | Scroll-triggered animations             |
| [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) | Smooth marquee scroll text |

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/psalmsin1759/framer-portfolio.git
cd framer-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

- Open http://localhost:3000 to view it in your browser.

## Theme Support

- Built-in dark mode toggle

- Controlled via React Context

- Color variables are set in globals.css using:

```bash

:root {
  --color-primary: #1F67F1;
  --color-bg: #ffffff;
  --color-text: #000000;
}

.dark {
  --color-primary: #E0F11E;
  --color-bg: #0a0a0a;
  --color-text: #f1f1f1;
}

@theme inline {
  --color-primary: var(--color-primary);
}

body {
  background: var(--color-bg);
  color: var(--color-text); 
  font-family: Arial, Helvetica, sans-serif;
}

```

## data.ts Reference

### All portfolio content is centralized in utils/data.ts:

   - user – Personal info (name, title, bio, contact)

   - menuItems – Sidebar or navbar links

   - skills – Array of skills with description and proficiency %

   - projects – List of past work with title, client, industry, and description

   - experiences – Work history with titles and responsibilities

   - educations – Academic history

   - marqueeSkills – Technologies shown in animated marquee

   ## Screenshots

   ![DarkMode](/public/images/darkmode.png)
    ![LightMode](/public/images/lightmode.png)


## License

MIT © 2025 — Samson Ude
