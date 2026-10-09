import { useEffect, useRef } from "react";
import { Rocket } from "lucide-react";

/** Pointer-following rocket with a short, inertial exhaust trail. */
function RocketCursor() {
  const rocketRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    if (motion.matches || !fine.matches) return undefined;

    const rocket = rocketRef.current;
    const dots = trailRef.current;
    const target = { x: -100, y: -100 };
    const points = Array.from({ length: dots.length }, () => ({ x: -100, y: -100 }));
    let visible = false;
    let frame = 0;
    let lastX = -100;

    const move = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) {
        visible = true;
        rocket.classList.add("is-active");
        dots.forEach((dot) => dot.classList.add("is-active"));
        points.forEach((point) => { point.x = target.x; point.y = target.y; });
      }
      rocket.classList.toggle("is-boosting", Boolean(event.target.closest("a, button")));
    };
    const hide = () => {
      visible = false;
      rocket.classList.remove("is-active", "is-boosting");
      dots.forEach((dot) => dot.classList.remove("is-active"));
    };
    const tick = () => {
      const dx = target.x - lastX;
      lastX = target.x;
      rocket.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) rotate(${Math.max(-25, Math.min(25, dx * 1.5))}deg)`;
      points.forEach((point, index) => {
        const follow = index === 0 ? target : points[index - 1];
        point.x += (follow.x - point.x) * 0.28;
        point.y += (follow.y - point.y) * 0.28;
        dots[index].style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
      });
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return <div className="rocket-cursor" aria-hidden="true">
    {Array.from({ length: 6 }, (_, index) => <span key={index} className="rocket-trail" ref={(node) => { trailRef.current[index] = node; }} style={{ "--trail-index": index }} />)}
    <span ref={rocketRef} className="rocket-body"><Rocket size={26} strokeWidth={1.8} /></span>
  </div>;
}

export default RocketCursor;
