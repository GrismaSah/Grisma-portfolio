"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, X, Check } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/constants";
import { fadeUp, stagger, viewport } from "@/animations/variants";
import { cn } from "@/utils";
import SectionHeading from "@/components/SectionHeading";
import useTilt from "@/hooks/useTilt";
import type { Project } from "@/types";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const tilt = useTilt(6);
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -8 }} className="h-full">
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{ transition: "transform 0.25s ease" }}
        className="group glass grad-border flex h-full flex-col overflow-hidden hover:shadow-glow"
      >
        <div className="relative aspect-video overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.indexOf(project.placeholder) === -1) img.src = project.placeholder;
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
          {project.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-accent to-blue px-3 py-1 text-[11px] font-semibold text-white">
              Featured
            </span>
          )}
          <span className="absolute left-3 top-3 rounded-full border border-line bg-bg/60 px-3 py-1 text-xs text-muted backdrop-blur">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold">{project.title}</h3>
          <p className="mt-2 line-clamp-2 flex-1 font-body text-sm text-muted">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-bg/40 px-2.5 py-1 font-body text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button onClick={() => onOpen(project)} className="font-body text-sm font-semibold text-grad">
              View details
            </button>
            <div className="ml-auto flex gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="glass grid h-9 w-9 place-items-center rounded-full text-muted hover:text-ink">
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="surface relative w-full max-w-lg overflow-hidden"
      >
        <div className="relative aspect-video overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.indexOf(project.placeholder) === -1) img.src = project.placeholder;
            }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <button onClick={onClose} aria-label="Close"
            className="glass absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink">
            <X size={16} />
          </button>
        </div>
        <div className="p-7">
          <span className="rounded-full border border-line bg-bg/40 px-3 py-1 text-xs text-muted">
            {project.category}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 font-body text-sm leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-4 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 font-body text-sm text-muted">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-line bg-bg/40 px-2.5 py-1 font-body text-[11px] text-muted">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-ink">
                <Github size={15} /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad px-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Things I've built" title="Featured" highlight="Projects" />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={cn(
                "rounded-full px-4 py-2 font-body text-sm transition-all",
                filter === c
                  ? "bg-gradient-to-r from-accent to-blue font-semibold text-white shadow-glow"
                  : "glass text-muted hover:text-ink"
              )}>
              {c}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          variants={stagger(0, 0.08)} initial="hidden" whileInView="show" viewport={viewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={setActive} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
