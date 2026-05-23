// src/components/Contact.jsx
import React from "react";
import { Mail, Linkedin, Github, Facebook, Twitter } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto flex justify-center items-center min-h-[40vh]">
        <div className="surface rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-2xl text-center border border-[#1f2937]/30">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Get in <span className="accent-text">Touch</span>
          </h2>
          <p className="mb-8 text-slate-300 text-md md:text-lg">
            Feel free to reach out via email or connect with me on social media!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 md:gap-10 mt-4 flex-wrap">
            <a
              href="mailto:osandarashmitha8@gmail.com"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="Email"
            >
              <Mail
                size={32}
                className="text-indigo-300 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/osandarashmitha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={32}
                className="text-indigo-300 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://github.com/osanda-r"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="GitHub"
            >
              <Github
                size={32}
                className="text-slate-200 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.facebook.com/osanda.abeysinghe.5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="Facebook"
            >
              <Facebook
                size={32}
                className="text-indigo-300 group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://x.com/OsandaRashmitha"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="Twitter"
            >
              <Twitter
                size={32}
                className="text-indigo-300 group-hover:animate-bounce"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
