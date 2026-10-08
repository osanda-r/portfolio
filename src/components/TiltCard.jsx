import { useTilt } from "../hooks/useTilt";

/** A surface that tilts toward the pointer in 3D and shows a light spotlight under it. */
function TiltCard({ as: Tag = "div", max = 7, className = "", children, ...rest }) {
  const ref = useTilt({ max });

  return (
    <Tag ref={ref} className={`tilt ${className}`.trim()} {...rest}>
      {children}
      <span aria-hidden="true" className="spotlight" />
    </Tag>
  );
}

export default TiltCard;
