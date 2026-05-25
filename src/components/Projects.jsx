// src/components/Projects.jsx
import pro1 from "../images/pro1.png";
import pro2 from "../images/pro2.png";
import pro3 from "../images/pro3.png";
import pro4 from "../images/pro4.png";
import pro5 from "../images/pro5.png";
import pro6 from "../images/pro6.png";
import pro7 from "../images/pro7.png";
import pro8 from "../images/pro8.png";
import github_pro from "../images/github_pro.png";

const projects = [
  {
    title: "Smart Parcel Delivery System",
    description:
      "Logistics management application to automate parcel scheduling and routing.",
    image: github_pro,
    url: "https://github.com/osanda-r/Smart-Parcel-Delivery-System/tree/main/DeliverySystem/src/main/java/com/logistics/delivery",
    tag: "Backend",
  },
  {
    title: "Smart Parking Management System",
    description:
      "IoT-based parking system that automates operations, improves space utilization, and reduces congestion.",
    image: github_pro,
    url: "https://github.com/osanda-r/SmartParkingSystem",
    tag: "IoT",
  },
  {
    title: "Artify",
    description:
      "Full-stack marketplace connecting artisans with consumers through a curated handmade products platform.",
    image: github_pro,
    url: "https://github.com/Roshan-Sandaruwan/Artisan-Marketplace",
    tag: "Full Stack",
  },
  {
    title: "Virtual Mouse",
    description:
      "AI-driven virtual mouse system that lets you control your computer with hand gestures.",
    image: github_pro,
    url: "https://github.com/osanda-r/virtualMouse/blob/main/main.py",
    tag: "AI",
  },
  {
    title: "EduCheck",
    description:
      "A mobile app for tracking attendance and managing student records.",
    image: pro1,
    url: "https://drive.google.com/drive/folders/1AO8XJ7CL6xa9YKgHBEK22ZbIGk8AFT3_?usp=sharing",
    tag: "Mobile",
  },
  {
    title: "Recipe Finder",
    description:
      "A web app for discovering recipes with a clean browsing flow.",
    image: pro2,
    url: "https://github.com/osanda-r/Recipe-Finder",
    tag: "Web App",
  },
  {
    title: "Hotel Management System",
    description:
      "A management system for handling hotel operations and bookings.",
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

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-black/20 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-white/0 to-fuchsia-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className={`${featured ? "grid md:grid-cols-[1.05fr_0.95fr]" : ""}`}>
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              featured ? "md:h-full" : "md:h-52"
            }`}
          />
        </div>

        <div className="relative flex flex-col p-6 md:p-7">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
              {project.tag}
            </span>
            {project.url ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                Open source
              </span>
            ) : (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                Concept
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 md:text-2xl">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cyan-400/40 underline-offset-4 hover:decoration-2"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-cyan-400/40 to-transparent" />
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
              >
                View Project
              </a>
            ) : (
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200">
                Available soon
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-4xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur-md md:p-8">
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
              >
                <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="absolute -right-6 bottom-0 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl" />
              </div>

              <p className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-large font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Featured Work
              </p>
              <h2 className="mt-4 text-xl font-black tracking-tight text-white md:text-4xl">
                Projects built to feel modern, functional, and polished.
              </h2>
              

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { value: "12", label: "Projects" },
                  { value: "4", label: "Categories" },
                  { value: "2", label: "Featured builds" },
                  { value: "100%", label: "Hands-on" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
                  >
                    <div className="text-2xl font-black text-white md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              
            </div>

            <div className="grid gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  featured={index < 2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
