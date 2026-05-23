// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-transparent text-slate-400 py-6 md:py-8 text-center shadow-inner mt-10 relative z-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-md md:text-lg font-semibold tracking-wide relative group">
          <span className="inline-block group-hover:underline group-hover:decoration-wavy group-hover:decoration-2 transition-all duration-300">
            &copy; {new Date().getFullYear()} Osanda Abeysinghe. All rights
            reserved.
          </span>
        </p>
        <div className="mt-2 flex gap-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href="#"
            className="hover:text-indigo-300 transition-colors duration-200 text-sm"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
