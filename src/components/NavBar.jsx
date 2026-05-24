// src/components/Navbar.jsx
import React, { useState } from "react";
import signature4 from "../images/signature4.png";

function MenuIcon({ className = "", width = 24, height = 24 }) {
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
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className = "", width = 24, height = 24 }) {
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
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Highlight active section
      const sections = ["skills", "projects", "contact"];
      let found = false;
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          if (visibleHeight > 0.3 * rect.height) {
            setActive(sec);
            found = true;
            break;
          }
        }
      }
      if (!found) setActive("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setShowMenu(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-9999 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md surface shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo with animation */}
        <a href="#" className="flex items-center group">
          <img
            src={signature4}
            alt="Logo"
            className="w-36 md:w-44 lg:w-52 h-12 md:h-14 lg:h-16 drop-shadow-lg group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {[
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-3 py-1 rounded-lg relative transition-colors duration-200
                hover:bg-indigo-900/60 hover:text-indigo-300
                ${
                  active === item.id
                    ? "text-indigo-300 font-semibold"
                    : "text-slate-200"
                }`}
            >
              {item.label}
              <span
                className={
                  "absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-8 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 transition-all duration-300 " +
                  (active === item.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0")
                }
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {!showMenu && (
          <div className="md:hidden flex items-center z-10000">
            <button
              className="bg-[#0b1226]/80 border border-indigo-800 px-4 py-2 rounded-xl hover:bg-[#0b1226]/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onClick={() => setShowMenu(true)}
              aria-label="Open navigation menu"
              aria-expanded={showMenu}
            >
              <MenuIcon className="text-indigo-300" width={26} height={26} />
            </button>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {showMenu && (
          <div
            className="fixed inset-0 z-9998 bg-black/40"
            onClick={() => setShowMenu(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 right-0 z-10001 w-64 h-full surface shadow-2xl transform transition-transform duration-300 md:hidden ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setShowMenu(false)} aria-label="Close menu">
              <CloseIcon className="text-indigo-300" width={26} height={26} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-4 mt-8 text-lg font-medium">
            {[
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`w-full text-center px-3 py-2 rounded-lg hover:bg-indigo-900/60 hover:text-indigo-300 transition-colors duration-200
                  ${
                    active === item.id
                      ? "text-indigo-300 font-semibold"
                      : "text-slate-200"
                  }`}
              >
                {item.label}
                <span
                  className={
                    "block mx-auto mt-1 h-0.5 w-8 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 transition-all duration-300 " +
                    (active === item.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0")
                  }
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
