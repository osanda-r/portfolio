import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has entered the viewport.
 * Returns [ref, inView]. With `once` (default) it stays true after the first entry.
 */
export function useInView({
  once = true,
  threshold = 0.2,
  rootMargin = "0px 0px -6% 0px",
} = {}) {
  const ref = useRef(null);
  // Without IntersectionObserver (very old browsers) show content immediately.
  const [inView, setInView] = useState(
    () => typeof window !== "undefined" && typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, inView];
}
