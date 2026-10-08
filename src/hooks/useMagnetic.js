import { useEffect, useRef } from "react";
import { FINE_POINTER, REDUCED_MOTION } from "./useMediaQuery";

/** Nudges an element slightly toward the pointer while it hovers. */
export function useMagnetic({ strength = 0.25 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!window.matchMedia(FINE_POINTER).matches) return undefined;
    if (window.matchMedia(REDUCED_MOTION).matches) return undefined;

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    };

    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}
