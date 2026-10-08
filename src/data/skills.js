import { FaCloud, FaUsers } from "react-icons/fa";
import {
  SiC,
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

// `brand` is the accent a skill lights up with on hover (and in the marquee).
// Everything else stays monochrome so the page keeps one consistent palette.
export const skillGroups = [
  {
    title: "Programming Languages",
    summary: "Core languages I use to build logic, APIs, and application features.",
    skills: [
      { name: "Java", icon: SiOpenjdk, brand: "#f89820" },
      { name: "Python", icon: SiPython, brand: "#79b5f5" },
      { name: "JavaScript", icon: SiJavascript, brand: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, brand: "#5b9cf2" },
      { name: "PHP", icon: SiPhp, brand: "#9ea3e6" },
      { name: "C", icon: SiC, brand: "#a8c4e6" },
    ],
  },
  {
    title: "Frontend Development",
    summary: "Modern frontend tools for responsive interfaces and reusable components.",
    skills: [
      { name: "React", icon: SiReact, brand: "#61dafb" },
      { name: "Vue", icon: SiVuedotjs, brand: "#4fc08d" },
      { name: "Next.js", icon: SiNextdotjs, brand: "#f5f5f7" },
      { name: "Tailwind CSS", icon: SiTailwindcss, brand: "#38bdf8" },
      { name: "HTML5", icon: SiHtml5, brand: "#f16529" },
      { name: "CSS3", icon: SiCss, brand: "#3d9be9" },
    ],
  },
  {
    title: "Databases & Backend",
    summary: "Databases and backend services I use for persistence and integrations.",
    skills: [
      { name: "MySQL", icon: SiMysql, brand: "#5a9bd5" },
      { name: "MongoDB", icon: SiMongodb, brand: "#4cc27a" },
      { name: "Firebase", icon: SiFirebase, brand: "#ffca28" },
    ],
  },
  {
    title: "Design and Workflow",
    summary: "Visual design and collaboration tools used across the product process.",
    skills: [
      { name: "Figma", icon: SiFigma, brand: "#ff7262" },
      { name: "Git", icon: SiGit, brand: "#f36f4f" },
      { name: "GitHub", icon: SiGithub, brand: "#f5f5f7" },
    ],
  },
  {
    title: "Other Skills",
    summary: "Additional skills and methodologies I apply in my projects and collaborations.",
    skills: [
      { name: "UI/UX Design", icon: SiFigma, brand: "#ff7262" },
      { name: "RESTful APIs", icon: SiPostman, brand: "#ff7a45" },
      { name: "Agile Methodology", icon: FaUsers, brand: "#c4bdff" },
      { name: "Cloud Basics", icon: FaCloud, brand: "#7dd3fc" },
    ],
  },
];

export const allSkills = skillGroups.flatMap((group) => group.skills);
