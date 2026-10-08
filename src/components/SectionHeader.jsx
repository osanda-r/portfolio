import Reveal from "./Reveal";

/** Shared section heading: index, kicker label, editorial title, and optional lead text. */
function SectionHeader({ index, eyebrow, title, lead, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "items-start"}`}>
      <Reveal className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        {index ? (
          <>
            <span className="font-mono text-xs tracking-[0.2em] text-fg-3">{index}</span>
            <span
              aria-hidden="true"
              className="h-px w-10 bg-linear-to-r from-violet-400/70 to-transparent"
            />
          </>
        ) : null}
        <span className="kicker">{eyebrow}</span>
      </Reveal>

      <Reveal as="h2" delay={90} className={`display-lg text-balance ${centered ? "" : "max-w-3xl"}`}>
        {title}
      </Reveal>

      {lead ? (
        <Reveal as="p" delay={180} className={`lead max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {lead}
        </Reveal>
      ) : null}
    </div>
  );
}

export default SectionHeader;
