const experienceItems = [
  {
    role: "Intern Software Engineer",
    company: "GTS Active",
    location: "Kadawatha, Colombo",
    period: "Internship",
    description:
      "Worked as intern software engineer at GTS Active, Kadawatha, Colombo. Contributed to real-world software projects while improving problem-solving, teamwork, and development skills.",
    highlights: [
      "Worked on production-oriented software tasks",
      "Collaborated with team members on project delivery",
      "Improved debugging, communication, and code quality habits",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative z-10 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-4xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur-md md:p-8">
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
              >
                <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="absolute -right-6 bottom-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
              </div>

              <p className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-large font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Work Experience
              </p>
              <h2 className="mt-4 text-xl font-black tracking-tight text-white md:text-4xl">
                Practical experience from real software work.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                A concise overview of my internship experience and the skills I
                strengthened while working on real projects.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-cyan-400/60 via-white/10 to-transparent" />

              <div className="space-y-6 pl-0 md:pl-10">
                {experienceItems.map((item) => (
                  <article
                    key={`${item.company}-${item.role}`}
                    className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur-md md:p-7"
                  >
                    <div className="absolute left-[-1.15rem] top-7 hidden h-7 w-7 rounded-full border border-cyan-400/40 bg-slate-950 ring-4 ring-slate-950 md:block" />

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                        {item.period}
                      </span>
                      <span className="text-sm text-slate-400">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-cyan-200">
                      {item.company}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm leading-6 text-slate-200"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
