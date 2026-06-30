"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BadgeCheck, Award } from "lucide-react";
import { TIMELINE, CERTIFICATES } from "@/constants";
import { fadeUp, viewport } from "@/animations/variants";
import SectionHeading from "@/components/SectionHeading";

export default function Timeline() {
  return (
    <section id="experience" className="section-pad px-5">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="My journey" title="Experience &" highlight="Education" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* timeline */}
          <div className="relative">
            <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent to-blue/30" />
            <div className="space-y-6">
              {TIMELINE.map((item, i) => {
                const Icon = item.kind === "education" ? GraduationCap : Briefcase;
                return (
                  <motion.div
                    key={item.title + i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="relative pl-12"
                  >
                    <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-blue shadow-glow">
                      <Icon size={15} className="text-white" />
                    </span>
                    <div className="surface grad-border p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-body text-xs font-medium uppercase tracking-wider text-accent">
                          {item.duration}
                        </p>
                        {item.meta && (
                          <span className="rounded-full bg-bg/40 px-2.5 py-0.5 font-body text-[11px] text-grad">
                            {item.meta}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-bold">{item.title}</h3>
                      <p className="font-body text-sm text-muted">{item.org}</p>
                      <ul className="mt-3 space-y-2">
                        {item.points.map((p, idx) => (
                          <li key={idx} className="flex gap-2 font-body text-sm leading-relaxed text-muted">
                            <Award size={15} className="mt-0.5 shrink-0 text-blue" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* certificates */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="surface h-fit p-6"
          >
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold">
              <BadgeCheck size={18} className="text-accent" /> Certificates
            </h3>
            <ul className="space-y-3">
              {CERTIFICATES.map((c) => (
                <li key={c.name} className="rounded-2xl border border-line bg-bg/40 p-4">
                  <p className="font-body text-sm font-medium text-ink/90">{c.name}</p>
                  <p className="font-body text-xs text-muted">{c.issuer}</p>
                </li>
              ))}
              <li className="rounded-2xl border border-dashed border-line bg-bg/20 p-4 text-center font-body text-xs text-muted">
                More certificates coming soon
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
