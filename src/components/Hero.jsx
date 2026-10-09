import { useRef } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import PortraitStage from "./PortraitStage";
import MissionConsole from "./MissionConsole";
import { clamp01, useScrollEffect } from "../hooks/useScrollEffect";
import { REDUCED_MOTION, useMediaQuery } from "../hooks/useMediaQuery";

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

function Hero() {
  const sectionRef = useRef(null);
  const cueRef = useRef(null);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);

  // Expose how far the hero has scrolled away (0 → 1 over one viewport height)
  // as a CSS variable so the copy, portrait, and cue can parallax and fade
  // without a single React re-render.
  useScrollEffect(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      const progress = clamp01(window.scrollY / window.innerHeight);
      section.style.setProperty("--hero-scroll", progress.toFixed(4));
      // Keep the faded-out scroll cue from intercepting clicks.
      if (cueRef.current) cueRef.current.classList.toggle("is-faded", progress > 0.25);
    },
    { disabled: reducedMotion },
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden px-5 pb-8 pt-28 md:px-8 md:pt-32"
    >
      <div className="hero-coordinate" aria-hidden="true">
        EST. 2024 <span> / </span> EARTH · DIGITAL FRONTIER
      </div>
      <div aria-hidden="true" className="hero-floor">
        <div className="hero-floor-inner" />
      </div>

      <div className="relative mx-auto my-auto grid w-full max-w-7xl items-center gap-16 py-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Turning ideas into intelligent experiences
            </p>
          </Reveal>

          <h1 className="display-xl mt-8">
            <Reveal as="span" delay={80} className="block">
              Open to
            </Reveal>
            <Reveal as="span" delay={160} className="block">
              code
            </Reveal>
            <Reveal as="span" delay={240} className="block">
              <span className="serif-accent">what's next.</span>
            </Reveal>
          </h1>

          <Reveal as="p" delay={320} className="lead mt-8 max-w-xl">
            I build intelligent digital solutions at the intersection of
            software, AI, and cloud. I turn real-world problems into scalable,
            reliable, and meaningful products.
          </Reveal>

          <Reveal
            delay={400}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.22}>
              <a href="#projects" className="btn-primary">
                Explore my work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Magnetic>
            <a href={RESUME_URL} download className="btn-ghost">
              Download resume
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal delay={480} className="mt-10 max-w-xl">
            <MissionConsole />
          </Reveal>
        </div>

        <PortraitStage />
      </div>

      <div className="relative mt-auto flex justify-center pt-6">
        <a ref={cueRef} href="#skills" className="scroll-cue" aria-label="Scroll to skills">
          Scroll
        </a>
      </div>
    </section>
  );
}

export default Hero;
