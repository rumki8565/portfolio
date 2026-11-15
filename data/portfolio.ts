export interface Project {
  id: string;
  name: string;
  image: string;
  stack: string[];
  description: string;
  live: string;
  repo: string;
  challenges: string[];
  future: string[];
}
export interface Skill {
  name: string;
  level: number;
}
export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const profile = {
  name: "Rumki Akter",
  role: "Frontend Developer",
  tagline:
    "I build responsive websites with React, Next.js and Tailwind CSS, and I'm growing on the backend with Express and MongoDB.",
  photo: "/photo.jpg",
  resume: "/resume.pdf",
  email: "rumkiakter938@gmail.com",
  phone: "+880 1787736412",
  socials: [
    { label: "GitHub", href: "https://github.com/rumki8565" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rumki-akter/" },
    { label: "Discord", href: "https://discord.com/users/1539131058925342770" },
    { label: "Facebook", href: "https://www.facebook.com/share/186wAwgFmd/" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript (ES6)", level: 80 },
      { name: "React", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Figma to code", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Vercel deployment", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js & Express", level: 65 },
      { name: "MongoDB", level: 65 },
      { name: "JWT auth", level: 65 },
      { name: "BetterAuth", level: 70 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "booknook",
    name: "BookNook",
    image: "/projects/BookNook.png",
    stack: [
      "Next.js (App Router)",
      "BetterAuth",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    description:
      "A small online library where users can add books, borrow them and return them. Login uses BetterAuth, and a separate Express and MongoDB server protects its API routes with JWT.",
    live: "https://booknook-client-xmys.vercel.app",
    repo: "https://github.com/rumki8565/booknook-client",
    challenges: [
      "Stopping a user from borrowing the same book twice.",
      "Keeping the number of copies correct when books are borrowed and returned.",
      "Protecting server routes with a JWT created after the client login.",
    ],
    future: [
      "Add due dates and late reminders.",
      "Add book search and category filters.",
      "Add an admin dashboard for managing the library.",
    ],
  },
  {
    id: "bazardor",
    name: "BazarDor (বাজার দর)",
    image: "/projects/Bazardor.png",
    stack: ["Next.js (App Router)", "Tailwind CSS", "BetterAuth"],
    description:
      "A grocery price website with a Bengali interface, built from a Figma design. Visitors can browse market prices and sign in.",
    live: "https://bazardor-neon.vercel.app/",
    repo: "https://github.com/rumki8565/Assignment-Bazar-Dor",
    challenges: [
      "Matching the Figma layout on every screen size.",
      "Setting up authentication with BetterAuth.",
      "Showing Bengali text and numbers cleanly.",
    ],
    future: [
      "Add live price data from an API.",
      "Add price history charts.",
      "Add search and filters by market.",
    ],
  },
  {
    id: "fitlog",
    name: "FitLog",
    image: "/projects/Fitlog.png",
    stack: ["Next.js (App Router)", "Tailwind CSS"],
    description:
      "A gym workout library with Home, Details, My Plan and 404 pages, built from a Figma design.",
    live: "https://fitlog-two-neon.vercel.app/",
    repo: "https://github.com/rumki8565/Assignment-FITLOK",
    challenges: [
      "Sharing the plan between pages.",
      "Building dynamic detail routes.",
      "Keeping the grid responsive.",
    ],
    future: [
      "Save plans to a database.",
      "Add progress tracking.",
      "Add user accounts.",
    ],
  },
  {
    id: "devstack",
    name: "Dev Stack",
    image: "/projects/devstack.png",
    stack: ["React", "TypeScript", "react-toastify"],
    description:
      "A tech-stack picker. Users browse technology cards loaded from JSON and add them to their stack from a sidebar.",
    live: "https://dev-stack-virid.vercel.app/",
    repo: "https://github.com/rumki8565/Assignment-DEV-STACK",
    challenges: [
      "Typing the JSON data correctly.",
      "Keeping sidebar state in sync with the cards.",
      "Showing clear toast messages.",
    ],
    future: [
      "Save stacks between visits.",
      "Add category filters.",
      "Let users share their stack by link.",
    ],
  },
];
