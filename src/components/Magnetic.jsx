import { useMagnetic } from "../hooks/useMagnetic";

/** Wrapper that makes its child follow the pointer slightly. */
function Magnetic({ strength = 0.25, className = "", children }) {
  const ref = useMagnetic({ strength });

  return (
    <span ref={ref} className={`magnetic ${className}`.trim()}>
      {children}
    </span>
  );
}

export default Magnetic;
