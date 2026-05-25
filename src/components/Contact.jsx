// src/components/Contact.jsx
import React from "react";

function IconShell({ children, className = "", width = 24, height = 24 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function MailIcon(props) {
  return (
    <IconShell {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </IconShell>
  );
}

function LinkedinIcon(props) {
  return (
    <IconShell {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V8h4v2" />
      <rect x="2" y="9" width="4" height="11" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </IconShell>
  );
}

function GithubIcon(props) {
  return (
    <IconShell {...props}>
      <path d="M15 22v-3a4 4 0 0 0-1-3.1c3 0 6-2 6-6a5 5 0 0 0-1.4-3.5A4.2 4.2 0 0 0 18.5 3s-1.2 0-2.5 1.5a8.8 8.8 0 0 0-8 0C6.7 3 5.5 3 5.5 3a4.2 4.2 0 0 0-.1 3.4A5 5 0 0 0 4 9c0 4 3 6 6 6a4 4 0 0 0-1 3.1V22" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </IconShell>
  );
}

function FacebookIcon(props) {
  return (
    <IconShell {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </IconShell>
  );
}

function TwitterIcon(props) {
  return (
    <IconShell {...props}>
      <path d="M22 5.5c-.7.3-1.5.5-2.3.6A4 4 0 0 0 13 9v1a10 10 0 0 1-8-4s-4 9 5 13a11 11 0 0 1-7 2c9 5 20 0 20-11.5v-.5A7.2 7.2 0 0 0 22 5.5z" />
    </IconShell>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto flex justify-center items-center min-h-[40vh]">
        <div className="surface rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-2xl text-center border border-[#1f2937]/30">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Get in <span className="accent-text">Touch</span>
          </h2>

          <p className="text-slate-300 text-md md:text-lg max-w-2xl">
            Feel free to reach out via email or connect with me on social media
            — I usually reply within a couple of days.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 md:gap-10 mt-4 flex-wrap">
            <a
              href="mailto:osandarashmitha8@gmail.com"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="Email"
            >
              <MailIcon
                className="text-cyan-300 group-hover:animate-bounce"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/osandarashmitha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="LinkedIn"
            >
              <LinkedinIcon
                className="text-cyan-300 group-hover:animate-bounce"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://github.com/osanda-r"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="GitHub"
            >
              <GithubIcon
                className="text-slate-200 group-hover:animate-bounce"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.facebook.com/osanda.abeysinghe.5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="Facebook"
            >
              <FacebookIcon
                className="text-cyan-300 group-hover:animate-bounce"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://x.com/OsandaRashmitha"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b1226]/60 hover:bg-[#0b1226]/50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-600"
              aria-label="Twitter"
            >
              <TwitterIcon
                className="text-cyan-300 group-hover:animate-bounce"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
