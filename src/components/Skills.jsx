// src/components/Skills.jsx
import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiC } from "react-icons/si";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776ab]" /> },
      { name: "C", icon: <SiC className="text-[#00599c]" /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61dafb]" /> },
      { name: "Vue.js", icon: <FaVuejs className="text-[#42b883]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-slate-200" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#38bdf8]" />,
      },
      { name: "HTML", icon: <FaHtml5 className="text-[#e34f26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572b6]" /> },
      { name: "PHP", icon: <FaPhp className="text-[#777bb4]" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <FaDatabase className="text-[#00758f]" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
      {
        name: "Firebase",
        icon: <span className="text-[#ffca28] text-2xl font-bold">F</span>,
      },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      {
        name: "Figma",
        icon: <span className="text-[#a259ff] text-2xl font-bold">F</span>,
      },
    ],
  },
  {
    title: "Technologies",
    skills: [
      {
        name: "GIT",
        icon: <span className="text-orange-500 text-2xl font-bold">G</span>,
      },
      { name: "GitHub", icon: <FaGithub className="text-slate-200" /> },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "UI/UX design" },
      { name: "REST APIs" },
      { name: "Agile" },
      { name: "Cloud basics" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 min-h-[60vh] relative z-10">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-white font-extrabold text-center mb-10 tracking-tight drop-shadow-lg">
          My <span className="accent-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="surface rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-lg md:text-xl font-bold text-indigo-300 mb-4 tracking-wide">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#0b1226]/60 rounded-xl px-4 py-2 flex items-center gap-2 shadow hover:scale-105 hover:shadow-xl transition-transform duration-300 border border-transparent hover:border-[#6d28d9]/40"
                  >
                    {skill.icon && (
                      <span className="text-2xl md:text-3xl">{skill.icon}</span>
                    )}
                    <span className="text-md md:text-lg font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
