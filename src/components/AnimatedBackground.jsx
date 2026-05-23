function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute -top-32 left-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-[-8%] h-112 w-md rounded-full bg-indigo-500/20 blur-3xl animate-pulse [animation-delay:1.5s]" />
      <div className="absolute -bottom-48 left-1/3 h-104 w-104 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse [animation-delay:3s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.06),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20" />
    </div>
  );
}

export default AnimatedBackground;
