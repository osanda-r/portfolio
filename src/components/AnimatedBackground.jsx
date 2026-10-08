/** Fixed, decorative backdrop: drifting aurora glows, a faint grid, grain, and vignette. */
function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950"
      aria-hidden="true"
    >
      <div className="aurora aurora-violet" />
      <div className="aurora aurora-gold" />
      <div className="grid-overlay" />
      <div className="grain" />
      <div className="vignette" />
    </div>
  );
}

export default AnimatedBackground;
