// src/components/Projects.jsx
import { ArrowUpRight } from "lucide-react";
import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.png";
import pro4 from "../images/pro4.png";
import pro5 from "../images/pro5.png";
import pro6 from "../images/pro6.png";
import pro7 from "../images/pro7.png";
import pro8 from "../images/pro8.png";
import pro9 from "../images/pro9.jpeg";
import githubCover from "../images/github_pro.png";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { REDUCED_MOTION, useMediaQuery } from "../hooks/useMediaQuery";

const projects = [
  {
    title: "GovFactory",
    description:
      "Workshop planning system for the Department of Government Factory, Kolonnawa, Sri Lanka.",
    image: pro9,
    url: "https://osanda-r.github.io/GovFactory/",
    tag: "Full Stack",
  },
  {
    title: "Smart Parcel Delivery System",
    description:
      "Logistics management application to automate parcel scheduling and routing.",
    image: githubCover,
    url: "https://github.com/osanda-r/Smart-Parcel-Delivery-System/tree/main/DeliverySystem/src/main/java/com/logistics/delivery",
    tag: "Backend",
  },
  {
    title: "Smart Parking Management System",
    description:
      "IoT-based parking system that automates operations, improves space utilization, and reduces congestion.",
    image: githubCover,
    url: "https://github.com/osanda-r/SmartParkingSystem",
    tag: "IoT",
  },
  {
    title: "Artify",
    description:
      "Full-stack marketplace connecting artisans with consumers through a curated handmade products platform.",
    image: githubCover,
    url: "https://github.com/Roshan-Sandaruwan/Artisan-Marketplace",
    tag: "Full Stack",
  },
  {
    title: "Virtual Mouse",
    description:
      "AI-driven virtual mouse system that lets you control your computer with hand gestures.",
    image: githubCover,
    url: "https://github.com/osanda-r/virtualMouse/blob/main/main.py",
    tag: "AI",
  },
  {
    title: "EduCheck",
    description: "A mobile app for tracking attendance and managing student records.",
    image: pro1,
    url: "https://drive.google.com/drive/folders/1AO8XJ7CL6xa9YKgHBEK22ZbIGk8AFT3_?usp=sharing",
    tag: "Mobile",
  },
  {
    title: "Recipe Finder",
    description: "A web app for discovering recipes with a clean browsing flow.",
    image: pro2,
    url: "https://github.com/osanda-r/Recipe-Finder",
    tag: "Web App",
  },
  {
    title: "Hotel Management System",
    description: "A management system for handling hotel operations and bookings.",
    image: pro3,
    url: "https://github.com/osanda-r/Hotel-Booking-System",
    tag: "Business",
  },
  {
    title: "Student Management System",
    description: "A web app for managing student data and records.",
    image: pro4,
    url: "https://github.com/osanda-r/Student-management-system/tree/main/Student%20Management",
    tag: "Admin",
  },
  {
    title: "Weather App",
    description: "A web app for checking live weather information quickly.",
    image: pro5,
    url: "https://github.com/osanda-r/Weather-App",
    tag: "Utility",
  },
  {
    title: "Calculator",
    description: "A simple web calculator with a clean interface.",
    image: pro6,
    url: "https://github.com/osanda-r/Calculator",
    tag: "Utility",
  },
  {
    title: "Fitness Forge",
    description: "UI/UX design concept for a fitness website experience.",
    image: pro7,
    url: "https://drive.google.com/drive/folders/1ZcSQXvqqGKfdTuDNUQDkNnEAmqBAzuSV?usp=sharing",
    tag: "Design",
  },
  {
    title: "Estate",
    description: "Real estate website concept for home buyers.",
    image: pro8,
    url: "",
    tag: "Concept",
  },
];

const stats = [
  { value: 13, suffix: "+", label: "Projects" },
  { value: 4, suffix: "+", label: "Categories" },
  { value: 100, suffix: "%", label: "Real-world" },
  { value: 100, suffix: "%", label: "Hands-on" },
];

function Stat({ value, suffix, label, active, instant }) {
  const shown = useCountUp(value, active, { instant });
  return (
    <div className="glass rounded-2xl p-5 md:p-6">
      <div className="text-3xl font-semibold tracking-tight tabular-nums md:text-4xl">
        {shown}
        {suffix}
      </div>
      <div className="kicker mt-3 text-[10px] text-fg-3">{label}</div>
    </div>
  );
}

function ProjectCover({ project, featured = false }) {
  // Repos without a screenshot use the GitHub mark; show it on a branded backdrop instead of a white tile.
  if (project.image === githubCover) {
    return (
      <div className="cover-github absolute inset-0 grid place-items-center">
        <img
          src={githubCover}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-auto w-[36%] invert mix-blend-screen opacity-90 transition-transform duration-700 ease-premium group-hover:scale-110"
        />
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.06] ${
        featured ? "object-[20%_center]" : ""
      }`}
    />
  );
}

function ProjectCard({ project, featured }) {
  return (
    <TiltCard
      as="article"
      max={4}
      className={`glass group flex h-full flex-col overflow-hidden rounded-[1.75rem] ${
        featured ? "xl:flex-row" : ""
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden ${
          featured ? "aspect-[16/10] xl:aspect-auto xl:min-h-[20rem] xl:w-[55%]" : "aspect-[16/10]"
        }`}
      >
        <ProjectCover project={project} featured={featured} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/10 to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill">{project.tag}</span>
          <span className="pill pill-muted">{project.url ? "Open source" : "Concept"}</span>
        </div>

        <h3 className="display-md mt-5">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-violet-200"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-3 text-sm leading-7 text-fg-2 md:text-[0.95rem]">{project.description}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-7">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-cta"
            >
              View project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <span className="kicker text-fg-3">Available soon</span>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

function Projects() {
  const [statsRef, statsVisible] = useInView({ threshold: 0.4 });
  const reducedMotion = useMediaQuery(REDUCED_MOTION);

  return (
    <section id="projects" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          eyebrow="Featured Work"
          title={
            <>
              Projects built to feel <span className="serif-accent">modern, functional, and polished.</span>
            </>
          }
        />

        <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Stat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              active={statsVisible}
              instant={reducedMotion}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 90} className={index === 0 ? "xl:col-span-2" : ""}>
              <ProjectCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
