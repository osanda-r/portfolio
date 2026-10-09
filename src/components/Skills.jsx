import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import { skillGroups } from "../data/skills";

// Bento layout: two equal cards on the first row, three equal cards on the second.
// On tablets the last card spans both columns so the grid never ends with a gap.
const SPANS = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "md:col-span-2 lg:col-span-2",
];

function SkillChip({ skill }) {
  const Icon = skill.icon;
  return (
    <li className="skill-chip" style={{ "--brand": skill.brand }}>
      <Icon className="skill-icon" aria-hidden="true" />
      {skill.name}
    </li>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="01"
          eyebrow="Skills & Tools"
          title={
            <>
              The tools behind <span className="serif-accent">every mission.</span>
            </>
          }
          lead="A concise overview of my core technologies, tools, and the workflows I apply when building products and prototypes."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 90} className={SPANS[index]}>
              <TiltCard max={5} className="glass sector-card flex h-full flex-col rounded-[1.75rem] p-6 md:p-7">
                <div className="sector-card-label" aria-hidden="true">SYSTEM / {String(index + 1).padStart(2, "0")}</div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="display-md">{group.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-fg-2 md:text-[0.95rem]">
                      {group.summary}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-fg-3">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2.5 pt-8">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill.name} skill={skill} />
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
