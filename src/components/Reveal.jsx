import { useInView } from "../hooks/useInView";

/** Wraps content and fades/rises it in the first time it scrolls into view. */
function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={{ ...style, "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
