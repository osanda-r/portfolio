import { Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

const certifications = [
  { title: "Ethical Hacker", issuer: "Cisco", date: "Aug 2026" },
  { title: "Software Engineer Certificate", issuer: "HackerRank", date: "Apr 2026" },
  { title: "Python Developer", issuer: "Sololearn", date: "Apr 2026" },
  { title: "Frontend Developer (React)", issuer: "HackerRank", date: "Mar 2025" },
  { title: "Generative AI", issuer: "LinkedIn Learning", date: "Jan 2025" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", date: "Oct 2022" },
];

function Certifications() {
  return (
    <section id="certifications" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          eyebrow="Certifications"
          title={
            <>
              Credentials for <span className="serif-accent">the journey.</span>
            </>
          }
          lead="A selection of certifications that reflect my continued learning across software engineering, frontend development, cybersecurity, and generative AI."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={`${certification.title}-${certification.issuer}`} delay={(index % 3) * 90}>
              <TiltCard
                as="article"
                max={5}
                className="glass mission-card flex h-full min-h-56 flex-col rounded-[1.75rem] p-6 md:p-7"
              >
                <div className="mission-card-label" aria-hidden="true">
                  CREDENTIAL / {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <time className="pt-2 font-mono text-xs tracking-[0.12em] text-fg-3">
                    {certification.date}
                  </time>
                </div>
                <h3 className="display-md mt-7 text-[1.45rem]">{certification.title}</h3>
                <p className="mt-auto pt-4 text-sm font-medium uppercase tracking-[0.16em] text-violet-200">
                  {certification.issuer}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
