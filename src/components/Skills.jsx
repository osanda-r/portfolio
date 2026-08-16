import {
  SiCss,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiOpenjdk,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiC,
} from "react-icons/si";
import { FaCloud, FaUsers } from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming Languages",
    summary:
      "Core languages I use to build logic, APIs, and application features.",
    skills: [
      { name: "Java", icon: SiOpenjdk, color: "text-orange-400" },
      { name: "Python", icon: SiPython, color: "text-sky-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
      { name: "TypeScript", icon: SiTypescript, color: "text-sky-500" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-300" },
      { name: "C ", icon: SiC, color: "text-sky-500" },
    ],
  },
  {
    title: "Frontend Development",
    summary:
      "Modern frontend tools for responsive interfaces and reusable components.",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-300" },
      { name: "Vue", icon: SiVuedotjs, color: "text-emerald-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-slate-100" },

      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss, color: "text-blue-500" },
    ],
  },
  {
    title: "DataBases & Backend",
    summary:
      "Databases and backend services I use for persistence and integrations.",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-sky-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-amber-300" },
    ],
  },
  {
    title: "Design and Workflow",
    summary:
      "Visual design and collaboration tools used across the product process.",
    skills: [
      { name: "Figma", icon: SiFigma, color: "text-fuchsia-400" },
      { name: "Git", icon: SiGit, color: "text-orange-400" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-100" },
    ],
  },
  {
    title: "Other Skills",
    summary:
      "Additional skills and methodologies I apply in my projects and collaborations.",
    skills: [
      { name: "UI/UX Design", icon: SiFigma, color: "text-fuchsia-400" },
      { name: "RESTful APIs", icon: SiPostman, color: "text-orange-400" },
      { name: "Agile Methodology", icon: FaUsers, color: "text-slate-100" },
      { name: "Cloud Basics", icon: FaCloud, color: "text-sky-500" },
    ],
  },
];

function SkillBadge({ icon: Icon, name, color }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950/70 ring-1 ring-white/10 ${color}`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover:text-white md:text-base">
        {name}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4">
        <div className="rounded-4xl border border-white/10 bg-slate-950/65 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-xl">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur-md md:p-8">
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-cyan-500/15 blur-3xl" />
                  <div className="absolute -right-6 bottom-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <p className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-large font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Skills & Tools
                </p>
                <h2 className="mt-4 text-xl font-black tracking-tight text-white md:text-4xl">
                  Practical skills I use to build modern apps.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                  A concise overview of my core technologies, tools, and the
                  workflows I apply when building products and prototypes.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 backdrop-blur-md md:p-6"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {group.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                        {group.summary}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {group.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        icon={skill.icon}
                        name={skill.name}
                        color={skill.color}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
