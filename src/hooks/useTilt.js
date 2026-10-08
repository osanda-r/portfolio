import { useEffect, useRef } from "react";
import { FINE_POINTER, REDUCED_MOTION } from "./useMediaQuery";

/**
 * Pointer-driven 3D tilt. Writes CSS variables (--rx, --ry, --mx, --my, --glow)
 * directly on the element so pointer movement never triggers React re-renders.
 * Disabled for touch devices and when the user prefers reduced motion.
 */
export function useTilt({ max = 7 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!window.matchMedia(FINE_POINTER).matches) return undefined;
    if (window.matchMedia(REDUCED_MOTION).matches) return undefined;

    const setVar = (name, value) => el.style.setProperty(name, value);

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      setVar("--rx", `${((0.5 - py) * 2 * max).toFixed(2)}deg`);
      setVar("--ry", `${((px - 0.5) * 2 * max).toFixed(2)}deg`);
      setVar("--mx", `${(px * 100).toFixed(1)}%`);
      setVar("--my", `${(py * 100).toFixed(1)}%`);
      setVar("--glow", "1");
    };

    const onLeave = () => {
      setVar("--rx", "0deg");
      setVar("--ry", "0deg");
      setVar("--glow", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return ref;
}
