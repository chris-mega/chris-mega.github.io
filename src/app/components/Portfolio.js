"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CATEGORIES, projects } from "../../data/projects";

export default function Portfolio() {
  const [selected, setSelected] = useState("All");

  const counts = useMemo(() => {
    const c = { All: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const visible =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section
      id="portfolio"
      className="w-full bg-band-c py-16 sm:py-20"
    >
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground lg:text-4xl">
              Portfolio
            </h2>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Sites people actually use, apps I&apos;ve shipped, and the vision
              and robotics work that got me here.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const isActive = selected === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelected(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "border-transparent bg-blue-600 text-white shadow-sm"
                      : "border-line bg-surface text-fg-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {category}
                  <span
                    className={`ms-2 text-xs ${
                      isActive
                        ? "text-blue-100"
                        : "text-fg-subtle"
                    }`}
                  >
                    {counts[category] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const primary = project.live || project.repo;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
      <a
        href={primary}
        target="_blank"
        rel="noreferrer"
        className="block"
        aria-label={`${project.title} preview`}
      >
        <Preview project={project} />
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
          <span>{project.year}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{project.role}</span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-foreground">
          <a
            href={primary}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            {project.title}
          </a>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          {project.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-on-accent-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-sm font-medium">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              Visit site
              <ArrowIcon />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-fg-subtle hover:text-foreground"
            >
              Source
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* Screenshot in a browser frame for live sites, generated tile for the rest. */
function Preview({ project }) {
  if (!project.shot) {
    return (
      <div
        className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[var(--tile-scrim)]" />
        <span className="relative text-6xl font-bold text-white/90 drop-shadow-sm">
          {initials(project.title)}
        </span>
        <span className="absolute bottom-3 right-4 text-xs font-medium uppercase tracking-widest text-white/70">
          {project.category}
        </span>
        {/* subtle grid texture so the tiles don't read as flat blocks */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
    );
  }

  return (
    <div className="bg-elevated">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ms-2 truncate text-[11px] text-fg-subtle">
          {project.domain}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.shot}
          alt={`${project.title} homepage`}
          fill
          sizes="(min-width: 1536px) 25vw, (min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

function initials(title) {
  const words = title
    .replace(/[^A-Za-z ]/g, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2") // BumpBites -> Bump Bites
    .split(" ")
    .filter(Boolean);
  const picked =
    words.length > 2 ? [words[0], words[words.length - 1]] : words.slice(0, 2);
  return picked.map((word) => word[0].toUpperCase()).join("");
}

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}
