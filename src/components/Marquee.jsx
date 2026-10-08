import { allSkills } from "../data/skills";

/** Endless ticker of every skill. The second copy is hidden from assistive tech. */
function Marquee() {
  return (
    <div
      role="region"
      aria-label="Technologies I work with"
      className="marquee-wrap relative overflow-hidden border-y border-white/[0.06] bg-ink-900/60 py-5"
    >
      <div className="marquee-mask">
        <div className="marquee-track">
          {[false, true].map((isCopy) => (
            <ul
              key={isCopy ? "copy" : "original"}
              aria-hidden={isCopy || undefined}
              className="flex shrink-0 items-center"
            >
              {allSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={`${isCopy}-${skill.name}`}
                    className="flex shrink-0 items-center gap-3 pl-7 pr-7 text-fg-2"
                  >
                    <Icon className="h-5 w-5 shrink-0" style={{ color: skill.brand }} aria-hidden="true" />
                    <span className="whitespace-nowrap text-sm font-medium tracking-tight md:text-base">
                      {skill.name}
                    </span>
                    <span aria-hidden="true" className="ml-7 h-1 w-1 rounded-full bg-white/20" />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
