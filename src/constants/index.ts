/* ============================================================
   SITE DATA — EDIT EVERYTHING ABOUT YOU HERE
   ------------------------------------------------------------
   One file to update all content. Each block is labelled.
   Skills are kept honest (grounded in the resume).
   ============================================================ */

import {
  Code2,
  Database,
  GitBranch,
  Github,
  Terminal,
  Boxes,
  Globe,
  Cpu,
  FileCode2,
  Braces,
  Wind,
  Server,
  type LucideIcon,
} from "lucide-react";
import type {
  SkillGroup,
  Project,
  TimelineItem,
  Certificate,
  NavLink,
  LeetCodeStats,
} from "@/types";

/* ── 1. PROFILE / IDENTITY ───────────────────────────────── */
export const PROFILE = {
  name: "Grisma Sah",
  // Big gradient role under the name
  role: "Aspiring Software Engineer",
  greeting: "Hi, I'm",
  // Rotating words in the hero (animated text)
  rotating: [
    "Computer Science Student",
    "Java Developer",
    "Problem Solver",
    "Aspiring Software Engineer",
  ],
  intro:
    "B.Tech CSE student at Jain University (CGPA 9.11) with a strong foundation in Java, data structures, and the modern web. I've solved 100+ DSA problems and love turning hard problems into clean, fast, accessible software.",
  status: "Available for Internship",
  // 👉 Replace with your photo in /public (e.g. /me.jpg) then update this
  photo: "/profile.jpeg",
  // 👉 Resume PDF lives in /public/resume.pdf
  resume: "/resume.pdf",
  location: "Bengaluru, India",
  email: "grishmashah598@gmail.com",
  phone: "+91 7633020748",
};

/* ── 2. SOCIAL LINKS ─────────────────────────────────────── */
/* 👉 Update handles here. Empty string ("") hides that icon. */
export const SOCIALS = {
  github: "https://github.com/GrismaSah",
  linkedin: "https://www.linkedin.com/in/grisma-s-a940562b6/",
  leetcode: "https://leetcode.com/u/grizzy_X/",
  email: "grishmashah598@gmail.com",
  instagram: "",
  twitter: "",
};

// 👉 Usernames used for live API fetches (DSA + GitHub sections)
export const GITHUB_USERNAME = "GrismaSah";
export const LEETCODE_USERNAME = "grizzy_X";

/* ── 3. NAV LINKS ────────────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "DSA", to: "dsa" },
  { label: "GitHub", to: "github" },
  { label: "Contact", to: "contact" },
];

/* ── 4. SKILLS (honest, resume-based) ────────────────────── */
/* 👉 icons are lucide-react components. */
export const SKILLS: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "Java", icon: Code2, color: "#f89820" },
      { name: "Python", icon: Terminal, color: "#4b8bbe" },
      { name: "JavaScript", icon: Braces, color: "#f7df1e" },
      { name: "SQL", icon: Database, color: "#7c5cff" },
      { name: "HTML5", icon: Globe, color: "#e34f26" },
      { name: "CSS3", icon: FileCode2, color: "#1572b6" },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "React", icon: Boxes, color: "#61dafb" },
      { name: "Next.js", icon: Boxes, color: "#ffffff" },
      { name: "Tailwind", icon: Wind, color: "#38bdf8" },
    ],
  },
  {
    group: "Tools & Databases",
    items: [
      { name: "Git", icon: GitBranch, color: "#f1502f" },
      { name: "GitHub", icon: Github, color: "#ffffff" },
      { name: "VS Code", icon: FileCode2, color: "#4f9dff" },
      { name: "MySQL", icon: Database, color: "#00758f" },
    ],
  },
  {
    group: "Currently Learning",
    items: [
      { name: "Spring Boot", icon: Server, color: "#6db33f" },
      { name: "DSA (Java)", icon: Cpu, color: "#7c5cff" },
    ],
  },
];

/* ── 5. PROJECTS ─────────────────────────────────────────── */
/* 👉 Drop your real homepage screenshots into /public/projects using
   the `image` filename below (e.g. algovision.png). Until the PNG
   exists, the card automatically shows the gradient `placeholder`. */
export const PROJECTS: Project[] = [
  {
    title: "AlgoVision",
    category: "Java",
    description:
      "An algorithm visualizer that animates sorting, searching, and graph algorithms step by step.",
    features: [
      "Animated Bubble, Selection & Insertion sort",
      "Searching and graph traversal visualizations",
      "Adjustable speed and interactive controls",
    ],
    tech: ["Java", "Java Swing", "DSA"],
    image: "/projects/algovision.png",
    placeholder: "/projects/algovision.svg",
    github: "https://github.com/GrismaSah",
    featured: true,
  },
  {
    title: "Student Management System",
    category: "Java",
    description:
      "A Java desktop application built with Java Swing for managing student records. It supports full CRUD operations, a clean dashboard interface, and file handling for persistent storage — organized with a modular architecture and a user-friendly UI.",
    features: [
      "Student record management with full CRUD",
      "Dashboard interface for quick navigation",
      "File handling for persistent storage",
      "Modular architecture with a clean, user-friendly UI",
    ],
    tech: ["Java", "Java Swing", "OOP"],
    image: "/projects/student-management.png",
    placeholder: "/projects/sms.svg",
    github: "https://github.com/GrismaSah",
    featured: true,
  },
  {
    title: "StyleSphere",
    category: "Frontend",
    description:
      "A responsive e-commerce storefront concept focused on a clean shopping experience.",
    features: [
      "Product browsing and filtering",
      "Responsive cart experience",
      "Component-driven, accessible UI",
    ],
    tech: ["React", "Tailwind", "JavaScript"],
    image: "/projects/stylesphere.png",
    placeholder: "/projects/stylesphere.svg",
    github: "https://github.com/GrismaSah",
    featured: true,
  },
  {
    title: "FreelanceHub",
    category: "Frontend",
    description:
      "A marketplace concept connecting freelancers and clients with listings and dashboards.",
    features: [
      "Client job posting flow",
      "Freelancer listings and profiles",
      "Clean dashboard-driven workflow",
    ],
    tech: ["React", "Tailwind"],
    image: "/projects/freelancehub.png",
    placeholder: "/projects/freelancehub.svg",
    github: "https://github.com/GrismaSah",
    featured: false,
  },
  // 👉 PLACEHOLDER — duplicate to add a future project
  {
    title: "Your Next Project",
    category: "Coming Soon",
    description:
      "Reserved slot for an upcoming build — replace title, description, tech, image and links.",
    features: ["Coming soon"],
    tech: ["TBD"],
    image: "/projects/placeholder.svg",
    placeholder: "/projects/placeholder.svg",
    github: "",
    featured: false,
  },
];

export const PROJECT_CATEGORIES: string[] = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

/* ── 6. TIMELINE (education + experience) ────────────────── */
export const TIMELINE: TimelineItem[] = [
  {
    kind: "education",
    title: "B.Tech, Computer Science Engineering",
    org: "Jain (Deemed-to-be) University, Bengaluru",
    duration: "2023 – 2027",
    meta: "CGPA: 9.11 / 10",
    points: [
      "COMPEX Scholar — selected in the top 2% among 10,000+ applicants for a fully funded undergraduate scholarship by the Government of India.",
      "Presented a research paper at an international conference (2025).",
      "Solved 100+ DSA problems in Java on LeetCode; actively practicing via Striver's DSA Sheet.",
      "Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks.",
    ],
  },
  {
    kind: "experience",
    title: "Frontend Web Development Intern",
    org: "OctaNet Services Pvt. Ltd. · Remote",
    duration: "Feb 2025 – Mar 2025",
    points: [
      "Built responsive web pages with HTML, CSS, and JavaScript using modern UI principles.",
      "Improved cross-device responsiveness and compatibility across screen sizes.",
      "Collaborated on frontend tasks and gained hands-on experience with real development workflows.",
    ],
  },
  {
    kind: "education",
    title: "Higher Secondary Education",
    org: "Mahatma Gandhi Scholar",
    duration: "Completed",
    points: [
      "Recipient of the Mahatma Gandhi Scholarship — a fully funded higher secondary scholarship.",
      "Secured the \"Excellent Woman\" position in a state-level chess tournament.",
    ],
  },
];

/* 👉 Relevant coursework chips (About / Skills) */
export const COURSEWORK: string[] = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

/* ── 7. CERTIFICATES ─────────────────────────────────────── */
export const CERTIFICATES: Certificate[] = [
  { name: "Introduction to Artificial Intelligence (AI)", issuer: "IBM" },
  { name: "Computer Networks and Network Security", issuer: "IBM" },
  { name: "Operating System Foundations", issuer: "INFOSEC" },
  {
    name: "Algorithms for Searching, Sorting and Indexing",
    issuer: "University of Colorado Boulder",
  },
];

/* ── 8. FALLBACK STATS ───────────────────────────────────── */
/* Used if the live LeetCode / GitHub APIs are unreachable.
   👉 Keep these roughly up to date as a safety net. */
export const LEETCODE_FALLBACK: LeetCodeStats = {
  totalSolved: 100,
  easySolved: 45,
  mediumSolved: 45,
  hardSolved: 10,
  ranking: undefined,
};

export const GITHUB_FALLBACK = {
  publicRepos: 12,
  followers: 5,
  contributions: 346,
};

/* ── 9. EMAILJS (contact form) ───────────────────────────── */
/* 👉 Create a free account at https://www.emailjs.com and paste IDs.
   Blank = the form falls back to a mailto: link. */
export const EMAILJS = {
  serviceId: "",
  templateId: "",
  publicKey: "",
};

// (re-exported for convenience)
export type { LucideIcon };
