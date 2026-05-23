// src/components/Hero.jsx

import my from "../images/my2.PNG";

function Hero() {
  return (
    <section className=" py-16 md:py-24 min-h-[80vh] flex items-center relative z-10">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Profile Image - circular, shadow, border, hover effect */}
        <img
          src={my}
          alt="Your Photo"
          className="mx-auto mb-6 w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-2 border-[#111827]/40 object-cover hover:scale-105 transition-transform duration-300 floaty"
        />

        {/* Name Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
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
            analytical thinking and problem-solving abilities,
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <a
            href="#projects"
            className="inline-block bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-transparent border border-[#2b2f42] text-slate-200 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
