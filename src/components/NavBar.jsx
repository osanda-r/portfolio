// src/components/NavBar.jsx
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import signature from "../images/signature4.png";

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

const LINKS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});
  const lastY = useRef(0);

  // Track scroll position and which section currently sits near the top of the viewport.
  useEffect(() => {
    let frame = 0;
    lastY.current = window.scrollY;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);

      // Slide the bar away while scrolling down; bring it back on scroll up or near the top.
      if (y <= 320 || y < lastY.current - 1) setHidden(false);
      else if (y > lastY.current + 1) setHidden(true);
      lastY.current = y;

      const marker = window.innerHeight * 0.4;
      let current = "";
      for (const { id } of LINKS) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) current = id;
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Slide the highlight pill under the active link.
  const placeIndicator = useCallback(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    const link = linkRefs.current[active];
    if (!link) {
      indicator.style.opacity = "0";
      return;
    }
    indicator.style.opacity = "1";
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.transform = `translateX(${link.offsetLeft}px)`;
  }, [active]);

  useLayoutEffect(() => {
    placeIndicator();
    window.addEventListener("resize", placeIndicator);
    return () => window.removeEventListener("resize", placeIndicator);
  }, [placeIndicator]);

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const navigate = (id) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-5 pt-3 transition-[translate,opacity] duration-500 ease-[var(--ease-premium)] md:px-8 md:pt-5 ${
          hidden && !menuOpen
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-ink-950 via-ink-950/70 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          aria-label="Primary"
          className={`relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-full transition-[padding,background-color,border-color,box-shadow] duration-500 ${
            scrolled ? "glass-nav px-3 py-2" : "border border-transparent px-0 py-2"
          }`}
        >
          <a
            href="#top"
            onClick={navigate("top")}
            aria-label="Osanda Abeysinghe, back to top"
            className="col-start-1 flex justify-self-start items-center rounded-full"
          >
            <img src={signature} alt="" className="h-11 w-auto md:h-12" />
          </a>

          <ul className="relative col-start-2 hidden items-center rounded-full border border-white/[0.07] bg-white/[0.03] p-1 md:flex">
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="nav-indicator"
              style={{ opacity: 0 }}
            />
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  ref={(node) => {
                    linkRefs.current[id] = node;
                  }}
                  href={`#${id}`}
                  onClick={navigate(id)}
                  aria-current={active === id ? "location" : undefined}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    active === id ? "text-fg" : "text-fg-2 hover:text-fg"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="col-start-3 flex items-center justify-self-end gap-2">
            <a href={RESUME_URL} download className="btn-ghost btn-sm hidden md:inline-flex">
              Resume
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.1] bg-white/[0.04] text-fg md:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-[60] transition-opacity duration-500 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/95 backdrop-blur-2xl"
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative flex h-full flex-col px-6 pb-10 pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.1] bg-white/[0.04] text-fg"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10">
            <ul>
              {LINKS.map(({ id, label }, index) => (
                <li
                  key={id}
                  className={`transition-all duration-500 ${
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: menuOpen ? `${120 + index * 70}ms` : "0ms" }}
                >
                  <a
                    href={`#${id}`}
                    onClick={navigate(id)}
                    className="flex items-center justify-between border-b border-white/[0.08] py-5 text-4xl font-semibold tracking-tight text-fg"
                  >
                    {label}
                    <ArrowUpRight className="h-6 w-6 text-violet-300" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href={RESUME_URL} download className="btn-primary mt-auto w-full justify-center">
            Download resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
