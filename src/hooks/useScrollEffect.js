import { useEffect, useRef } from "react";

/** Clamps a number into the 0–1 range. */
export function clamp01(value) {
  return Math.min(Math.max(value, 0), 1);
}

/**
 * Runs `callback` on an animation frame whenever the page scrolls, plus once
 * on mount and on resize so styles are correct before the first scroll.
 *
 * The callback should write directly to refs/DOM (e.g. CSS custom properties),
 * so scroll updates never trigger React re-renders. Pass `disabled` (for
 * example when prefers-reduced-motion matches) to skip the effect entirely.
 */
export function useScrollEffect(callback, { disabled = false } = {}) {
  const saved = useRef(callback);

  // Keep the latest callback without re-subscribing listeners every render.
  useEffect(() => {
    saved.current = callback;
  });

  useEffect(() => {
    if (disabled) return undefined;

    let frame = 0;

    const run = () => {
      frame = 0;
      saved.current();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [disabled]);
}
