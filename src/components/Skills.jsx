// src/components/Skills.jsx

function BadgeIcon({ label, className = "" }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-extrabold uppercase tracking-tight ${className}`}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}

function JavaIcon(props) {
  return <BadgeIcon label="J" className="text-[#f89820]" {...props} />;
}

function PythonIcon(props) {
  return <BadgeIcon label="Py" className="text-[#3776ab]" {...props} />;
}

function CIcon(props) {
  return <BadgeIcon label="C" className="text-[#00599c]" {...props} />;
}

function ReactIcon(props) {
  return <BadgeIcon label="R" className="text-[#61dafb]" {...props} />;
}

function VueIcon(props) {
  return <BadgeIcon label="V" className="text-[#42b883]" {...props} />;
}

function NextIcon(props) {
  return <BadgeIcon label="N" className="text-slate-200" {...props} />;
}

function JsIcon(props) {
  return <BadgeIcon label="JS" className="text-[#f7df1e]" {...props} />;
}

function TailwindIcon(props) {
  return <BadgeIcon label="TW" className="text-[#38bdf8]" {...props} />;
}

function HtmlIcon(props) {
  return <BadgeIcon label="H" className="text-[#e34f26]" {...props} />;
}

function CssIcon(props) {
  return <BadgeIcon label="C" className="text-[#1572b6]" {...props} />;
}

function PhpIcon(props) {
  return <BadgeIcon label="PHP" className="text-[#777bb4]" {...props} />;
}

function DatabaseIcon(props) {
  return <BadgeIcon label="DB" className="text-[#00758f]" {...props} />;
}

function GithubIcon(props) {
  return <BadgeIcon label="GH" className="text-slate-200" {...props} />;
}

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <JavaIcon /> },
      { name: "Python", icon: <PythonIcon /> },
      { name: "C", icon: <CIcon /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: <ReactIcon /> },
      { name: "Vue.js", icon: <VueIcon /> },
      { name: "Next.js", icon: <NextIcon /> },
      { name: "JavaScript", icon: <JsIcon /> },
      {
        name: "Tailwind CSS",
        icon: <TailwindIcon />,
      },
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "PHP", icon: <PhpIcon /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <DatabaseIcon /> },
      { name: "MongoDB", icon: <DatabaseIcon className="text-green-600" /> },
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
      { name: "GitHub", icon: <GithubIcon /> },
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
