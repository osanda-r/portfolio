// src/components/Footer.jsx
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-fg-3 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Osanda Abeysinghe. All rights reserved.</p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-2 transition-colors duration-300 hover:text-fg"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
