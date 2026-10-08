import { lazy, Suspense } from "react";
import { Code2, Cpu, Sparkles } from "lucide-react";
import { useTilt } from "../hooks/useTilt";
import portrait from "../images/my2.png";

// Three.js is loaded on demand so the first paint stays light.
const HeroOrb = lazy(() => import("./HeroOrb"));

function PortraitStage() {
  const stageRef = useTilt({ max: 8 });

  return (
    <div className="portrait-scene relative mx-auto w-full max-w-[25rem] sm:max-w-[27rem] lg:ml-auto lg:mr-0">
      <div className="portrait-enter">
        <div className="portrait-float">
          <div ref={stageRef} className="portrait-stage relative aspect-[4/5] w-full">
            <div className="orb-glow" aria-hidden="true" />
            <div className="orb-host" aria-hidden="true">
              <Suspense fallback={null}>
                <HeroOrb />
              </Suspense>
            </div>

            <figure className="portrait-card absolute inset-0 m-0 overflow-hidden rounded-[2rem]">
              <img
                src={portrait}
                alt="Osanda Abeysinghe"
                width="832"
                height="862"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[center_20%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/35 to-transparent"
              />
              <div aria-hidden="true" className="portrait-glare" />

              <div className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-fg-2">
                <span>OS / 01</span>
                <span className="inline-flex items-center gap-2 text-mint-400">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  Online
                </span>
              </div>

              <figcaption className="absolute inset-x-6 bottom-6">
                <span className="block text-2xl font-semibold tracking-tight text-fg">
                  Osanda Abeysinghe
                </span>
                <span className="mt-1 block text-sm text-fg-2">Software / AI Engineer</span>
                <span className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4 text-xs text-fg-2">
                  <span className="inline-flex items-center gap-2">
                    <Code2 className="h-3.5 w-3.5 text-violet-300" aria-hidden="true" />
                    Full stack
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Cpu className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
                    AI &amp; ML
                  </span>
                </span>
              </figcaption>
            </figure>

            <div className="depth-chip depth-chip-top">
              <Sparkles className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
              Creative technologist
            </div>
            <div className="depth-chip depth-chip-bottom">
              <b className="font-mono text-violet-300">{"</>"}</b>
              Make it useful.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortraitStage;
