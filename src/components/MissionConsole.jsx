import { useEffect, useState } from "react";
import { ArrowUpRight, Terminal } from "lucide-react";

const formatUtc = () => new Date().toLocaleTimeString("en-GB", { timeZone: "UTC", hour12: false });

/** A compact, honest status panel: live UTC clock and direct section links. */
function MissionConsole() {
  const [time, setTime] = useState(formatUtc);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(formatUtc()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="mission-console" aria-label="Mission console">
    <div className="console-header">
      <span className="inline-flex items-center gap-2"><Terminal size={14} aria-hidden="true" /> OPS / CONSOLE</span>
      <span className="console-live"><span className="console-live-dot" /> SYSTEM ONLINE</span>
    </div>
    <div className="console-body">
      <div className="console-command"><span className="console-prompt">$</span> initialize --mission=build-the-future<span className="console-caret" /></div>
      <div className="console-output"><span>✓</span> Software engineering + AI systems ready</div>
      <div className="console-output"><span>✓</span> Turning complex ideas into useful products</div>
    </div>
    <div className="console-footer">
      <span>UTC <time suppressHydrationWarning>{time}</time></span>
      <a href="#projects">EXPLORE MISSIONS <ArrowUpRight size={13} aria-hidden="true" /></a>
    </div>
  </div>;
}

export default MissionConsole;
