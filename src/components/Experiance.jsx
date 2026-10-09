import { useRef } from "react";
import { Building2, Check, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import { useInView } from "../hooks/useInView";
import { clamp01, useScrollEffect } from "../hooks/useScrollEffect";
import { REDUCED_MOTION, useMediaQuery } from "../hooks/useMediaQuery";

const experienceItems = [
  {
    role: "Intern Software Engineer",
    company: "GTS Active",
    location: "Kadawatha, Colombo",
    period: "Internship",
    description:
      "Worked as intern software engineer at GTS Active, Kadawatha, Colombo. Contributed to real-world software projects while improving problem-solving, teamwork, and development skills.",
    highlights: [
      "Worked on production-oriented software tasks",
      "Collaborated with team members on project delivery",
      "Improved debugging, communication, and code quality habits",
    ],
  },
];

function Experience() {
  const [railRef, railVisible] = useInView({ threshold: 0.1 });
  const railSpanRef = useRef(null);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);

  // Scroll-linked rail: the timeline line fills as it travels through the
  // viewport (and drains again when you scroll back up). With reduced motion
  // the hook stays off and the is-visible fallback simply shows the rail.
  useScrollEffect(
    () => {
      const rail = railSpanRef.current;
      if (!rail) return;
      const rect = rail.getBoundingClientRect();
      const line = window.innerHeight * 0.72;
      const progress = rect.height > 0 ? clamp01((line - rect.top) / rect.height) : 1;
      rail.style.setProperty("--rail-progress", progress.toFixed(4));
    },
    { disabled: reducedMotion },
  );

  return (
    <section id="experience" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            index="02"
            eyebrow="Work Experience"
            title={
              <>
                Experience in <span className="serif-accent">the field.</span>
              </>
            }
            lead="A concise overview of my internship experience and the skills I strengthened while working on real projects."
          />
        </div>

        <div ref={railRef} className="relative">
          <span
            ref={railSpanRef}
            aria-hidden="true"
            className={`timeline-rail ${railVisible ? "is-visible" : ""}`}
          />

          <ol className="space-y-6">
            {experienceItems.map((item, index) => (
              <li key={`${item.company}-${item.role}`} className="relative pl-9 md:pl-12">
                <span aria-hidden="true" className="timeline-node" />
                <Reveal delay={index * 120}>
                  <TiltCard max={4} className="glass mission-card rounded-[1.75rem] p-6 md:p-9">
                    <div className="mission-card-label" aria-hidden="true">MISSION LOG / {String(index + 1).padStart(2, "0")}</div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="pill">{item.period}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-fg-3">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="display-md mt-6 md:text-[2.4rem]">{item.role}</h3>
                    <p className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-violet-200">
                      <Building2 className="h-5 w-5 text-violet-300" aria-hidden="true" />
                      {item.company}
                    </p>
                    <p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-fg-2">
                      {item.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-[0.95rem] leading-6 text-fg-2"
                        >
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-500/15 text-violet-300">
                            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
