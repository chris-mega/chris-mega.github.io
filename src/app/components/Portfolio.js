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
      className="w-full bg-white py-16 dark:bg-gray-950 sm:py-20"
    >
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white lg:text-4xl">
              Portfolio
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
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
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {category}
                  <span
                    className={`ms-2 text-xs ${
                      isActive
                        ? "text-blue-100"
                        : "text-gray-400 dark:text-gray-500"
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
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
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
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
          <span>{project.year}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{project.role}</span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
          <a
            href={primary}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {project.title}
          </a>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {project.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4 text-sm font-medium dark:border-gray-800">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
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
              className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
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
        <span className="text-6xl font-bold text-white/90 drop-shadow-sm">
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
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ms-2 truncate text-[11px] text-gray-500 dark:text-gray-400">
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
  return words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
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
