import { useEffect, useRef } from "react";

/** Lightweight layered starfield that drifts at different speeds as the page scrolls. */
function SpaceAtmosphere() {
  const nearRef = useRef(null);
  const farRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (nearRef.current) nearRef.current.style.transform = `translate3d(0, ${-(y * 0.16) % 400}px, 0)`;
      if (farRef.current) farRef.current.style.transform = `translate3d(0, ${-(y * 0.06) % 400}px, 0)`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    return () => { window.removeEventListener("scroll", schedule); cancelAnimationFrame(frame); };
  }, []);

  return <div className="space-atmosphere" aria-hidden="true">
    <div ref={farRef} className="star-layer stars-far" />
    <div ref={nearRef} className="star-layer stars-near" />
    <div className="space-horizon" />
  </div>;
}

export default SpaceAtmosphere;
