// src/components/Hero.jsx

import my from "../images/my2.PNG";

function Hero() {
  return (
    <section className=" py-16 md:py-24 min-h-[80vh] flex items-center relative z-10">
      <style>{`
        @keyframes flame-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.78;
          }
          50% {
            transform: translateY(-8px) scale(1.06);
            opacity: 1;
          }
        }

        @keyframes flame-sway {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(-6deg) scale(1);
          }
          50% {
            transform: translate(-50%, -54%) rotate(7deg) scale(1.08);
          }
        }

        @keyframes flame-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.92;
          }
        }
      `}</style>
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Profile Image with flame glow */}
        <div className="relative mx-auto mt-8 mb-6 md:mt-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl"
            aria-hidden="true"
          >
            <div
              className="absolute left-1/2 top-1/2 h-56 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-t from-cyan-400/45 via-sky-300/30 to-transparent blur-3xl md:h-80 md:w-56"
              style={{ animation: "flame-float 2.1s ease-in-out infinite" }}
            />
            <div
              className="absolute left-1/2 top-[46%] h-44 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-t from-sky-400/45 via-cyan-300/30 to-transparent blur-2xl md:h-64 md:w-40"
              style={{ animation: "flame-sway 1.4s ease-in-out infinite" }}
            />
            <div
              className="absolute left-1/2 top-[52%] h-28 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-t from-cyan-200/60 via-sky-300/35 to-transparent blur-xl md:h-40 md:w-28"
              style={{ animation: "flame-pulse 1.0s ease-in-out infinite" }}
            />
            <div
              className="absolute left-[18%] top-[22%] h-20 w-20 rounded-full bg-cyan-300/20 blur-2xl md:h-28 md:w-28"
              style={{ animation: "flame-float 1.6s ease-in-out infinite" }}
            />
            <div
              className="absolute right-[16%] top-[24%] h-24 w-24 rounded-full bg-sky-400/18 blur-3xl md:h-32 md:w-32"
              style={{ animation: "flame-sway 1.8s ease-in-out infinite" }}
            />
          </div>

          <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-cyan-400/18 via-sky-300/10 to-transparent blur-2xl" />

          <img
            src={my}
            alt="Your Photo"
            className="relative z-10 mx-auto w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-white/10 object-cover shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-transform duration-300 floaty"
          />
        </div>

        {/* Name Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-[#06b6d4] to-[#06d42c] bg-clip-text text-transparent">
            Osanda Abeysinghe
          </span>
        </h1>
        {/* Subtitle */}
        <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base md:text-lg font-medium text-slate-200 backdrop-blur-sm">
          Software Engineer / AI Engineer / Web & Mobile Developer
        </p>

        {/* Description Paragraphs */}
        <div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg text-slate-300 leading-relaxed mb-8">
          <p>
            with a strong passion for technology, innovation, and continuous
            learning. I possess hands-on experience in software engineering, web
            and mobile application development, AI engineering, database design,
            IoT systems, data science, and quality assurance.With strong
            analytical thinking and problem-solving abilities.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <a
            href="#projects"
            className="inline-block bg-transparent border border-[#2b3e42] text-slate-200 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-transparent border border-[#2b3e42] text-slate-200 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
