import { useEffect, useRef } from "react";
import { allSkills } from "../data/skills";
import { REDUCED_MOTION, useMediaQuery } from "../hooks/useMediaQuery";

/** Endless ticker of every skill. The second copy is hidden from assistive tech. */
function Marquee() {
  const trackRef = useRef(null);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);

  // Scroll inertia: scrolling down nudges the ticker forward (and scrolling up
  // drags it back), then it eases into its base rhythm. The rAF loop only runs
  // while residual motion remains, and `translate` composes with the marquee
  // keyframes instead of fighting them.
  useEffect(() => {
    if (reducedMotion) return undefined;
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = 0;
    let lastY = window.scrollY;
    let velocity = 0;
    let drift = 0;

    const tick = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      velocity += (delta - velocity) * 0.25;
      drift += (velocity * -1.6 - drift) * 0.12;

      if (Math.abs(velocity) < 0.05 && Math.abs(drift) < 0.05) {
        velocity = 0;
        drift = 0;
        track.style.translate = "0px";
        frame = 0;
        return;
      }

      track.style.translate = `${drift.toFixed(2)}px`;
      frame = requestAnimationFrame(tick);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
      track.style.translate = "";
    };
  }, [reducedMotion]);

  return (
    <div
      role="region"
      aria-label="Technologies I work with"
      className="marquee-wrap relative overflow-hidden border-y border-white/[0.06] bg-ink-900/60 py-5"
    >
      <div className="marquee-label" aria-hidden="true">STACK / ACTIVE</div>
      <div className="marquee-mask">
        <div ref={trackRef} className="marquee-track">
          {[false, true].map((isCopy) => (
            <ul
              key={isCopy ? "copy" : "original"}
              aria-hidden={isCopy || undefined}
              className="flex shrink-0 items-center"
            >
              {allSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={`${isCopy}-${skill.name}`}
                    className="flex shrink-0 items-center gap-3 pl-7 pr-7 text-fg-2"
                  >
                    <Icon className="h-5 w-5 shrink-0" style={{ color: skill.brand }} aria-hidden="true" />
                    <span className="whitespace-nowrap text-sm font-medium tracking-tight md:text-base">
                      {skill.name}
                    </span>
                    <span aria-hidden="true" className="ml-7 h-1 w-1 rounded-full bg-white/20" />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
