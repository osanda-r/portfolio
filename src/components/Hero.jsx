import { ArrowUpRight, Code2, Cpu, Sparkles } from "lucide-react";
import my from "../images/my2.PNG";

function Hero() {
  return (
    <section className="hero-section relative z-10 overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="hero-layout container mx-auto">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            Available for meaningful work
          </div>

          <h1 className="hero-heading">
            Building the
            <span>next layer</span>
            of digital.
          </h1>

          <p className="hero-description">
            I&apos;m Osanda Abeysinghe — a software engineer crafting
            intelligent products at the intersection of full-stack
            development, AI, and human-centered design.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              Explore my work <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="/resume.pdf" download className="hero-button hero-button-secondary">
              Download resume
            </a>
          </div>
        </div>

        <div className="hero-profile-scene" aria-label="Osanda Abeysinghe profile">
          <div className="hero-profile-orbits" aria-hidden="true">
            <span className="hero-profile-ring hero-profile-ring-one" />
            <span className="hero-profile-ring hero-profile-ring-two" />
            <span className="hero-profile-ring hero-profile-ring-three" />
            <span className="hero-profile-dot hero-profile-dot-one" />
            <span className="hero-profile-dot hero-profile-dot-two" />
          </div>

          <div className="hero-profile-card">
            <div className="hero-profile-meta">
              <span>OS / 01</span>
              <span className="hero-online">
                <i /> Online
              </span>
            </div>
            <div className="hero-profile-image-wrap">
              <img src={my} alt="Osanda Abeysinghe" className="hero-profile-image" />
            </div>
            <div className="hero-profile-name">Osanda Abeysinghe</div>
            <div className="hero-profile-role">Software / AI Engineer</div>
            <div className="hero-profile-divider" />
            <div className="hero-profile-skills">
              <span><Code2 aria-hidden="true" /> Full stack</span>
              <span><Cpu aria-hidden="true" /> AI &amp; ML</span>
            </div>
          </div>

          <div className="hero-profile-tag hero-profile-tag-top">
            <Sparkles aria-hidden="true" />
            Creative technologist
          </div>
          <div className="hero-profile-tag hero-profile-tag-bottom">
            <b>&lt;/&gt;</b>
            Make it useful.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
