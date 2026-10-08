import { useEffect, useState } from "react";

/**
 * Animates an integer from 0 to `target` once `active` becomes true.
 * With `instant`, returns the target straight away (reduced motion).
 */
export function useCountUp(target, active, { duration = 1600, instant = false } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || instant) return undefined;

    let frame = 0;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, instant]);

  return instant ? target : value;
}
