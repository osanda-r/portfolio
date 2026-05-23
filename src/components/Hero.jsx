// src/components/Hero.jsx

import React from "react";
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
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">
          Hi, I’m{" "}
          <span className="text-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">
            Osanda Abeysinghe
          </span>
        </h1>
        {/* Subtitle */}
        <h2 className="text-lg md:text-2xl text-slate-300 font-medium mb-6">
          Software Engineering Undergraduate
        </h2>

        {/* Description Paragraphs */}
        <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-2">
          Passionate about solving real-world problems through innovative
          technology. My interests span software development, web/mobile apps,
          database design, IoT, data science, and QA.
        </p>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
          Hands-on experience in front-end, Java-based mobile apps, IoT, and
          UI/UX. I focus on building intuitive, user-friendly, and scalable
          digital solutions. I love exploring new coding techniques, staying
          updated, and pushing creative boundaries.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
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
