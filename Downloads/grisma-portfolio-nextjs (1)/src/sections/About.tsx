"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Target, Trophy, Sparkles } from "lucide-react";
import { COURSEWORK } from "@/constants";
import { fadeUp, slideLeft, slideRight, stagger, viewport } from "@/animations/variants";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";

const CARDS = [
  { icon: GraduationCap, label: "B.Tech CSE · Jain University" },
  { icon: Code2, label: "Java · React · DSA" },
  { icon: Target, label: "Aiming for SWE roles" },
  { icon: Trophy, label: "100+ problems solved" },
];

/* Left-side developer composition (no second photo) */
const TECH = [
  "Java", "Python", "JavaScript", "React", "Next.js",
  "Tailwind", "SQL", "HTML5", "CSS3", "Git", "GitHub", "DSA",
];
const STATS = [
  { value: "9.11", label: "CGPA / 10" },
  { value: "100+", label: "DSA Solved" },
];
const LEARNING = ["Spring Boot", "Advanced DSA"];

export default function About() {
  return (
    <section id="about" className="section-pad px-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get to know me" title="About" highlight="Me" />

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative space-y-5"
          >
            {/* code snippet card */}
            <div className="glass grad-border relative overflow-hidden p-6">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-blue/20 blur-3xl" />
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-xs text-muted">developer.ts</span>
              </div>
              <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
                <code>
                  <span className="text-blue">const</span>{" "}
                  <span className="text-ink">developer</span>{" "}
                  <span className="text-muted">=</span>{" "}
                  <span className="text-muted">{"{"}</span>
                  {"\n  "}
                  <span className="text-accent">name</span>
                  <span className="text-muted">: </span>
                  <span className="text-emerald-400">&apos;Grisma Sah&apos;</span>
                  <span className="text-muted">,</span>
                  {"\n  "}
                  <span className="text-accent">role</span>
                  <span className="text-muted">: </span>
                  <span className="text-emerald-400">&apos;Aspiring SWE&apos;</span>
                  <span className="text-muted">,</span>
                  {"\n  "}
                  <span className="text-accent">stack</span>
                  <span className="text-muted">: [</span>
                  <span className="text-emerald-400">&apos;Java&apos;</span>
                  <span className="text-muted">, </span>
                  <span className="text-emerald-400">&apos;React&apos;</span>
                  <span className="text-muted">, </span>
                  <span className="text-emerald-400">&apos;DSA&apos;</span>
                  <span className="text-muted">],</span>
                  {"\n  "}
                  <span className="text-accent">learning</span>
                  <span className="text-muted">: </span>
                  <span className="text-emerald-400">true</span>
                  {"\n"}
                  <span className="text-muted">{"}"}</span>
                </code>
              </pre>
            </div>

            {/* floating tech badges */}
            <motion.div
              variants={stagger(0, 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex flex-wrap gap-2.5"
            >
              {TECH.map((t, i) => (
                <motion.span key={t} variants={fadeUp}>
                  <span
                    className="block animate-float rounded-full border border-line bg-bg/50 px-3.5 py-1.5 font-body text-xs text-muted transition-colors hover:border-accent/50 hover:text-ink"
                    style={{ animationDelay: `${(i % 6) * 0.4}s`, animationDuration: `${5 + (i % 4)}s` }}
                  >
                    {t}
                  </span>
                </motion.span>
              ))}
            </motion.div>

            {/* stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass grad-border p-5 text-center">
                  <p className="font-display text-3xl font-bold text-grad">{s.value}</p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* currently learning */}
            <div className="glass grad-border relative overflow-hidden p-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <Sparkles size={15} className="text-accent" />
                <p className="font-body text-xs uppercase tracking-[0.2em] text-muted">
                  Currently Learning
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {LEARNING.map((l) => (
                  <span
                    key={l}
                    className="rounded-full bg-gradient-to-r from-accent/15 to-blue/15 px-3 py-1 font-body text-sm text-ink"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="surface p-7 sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold">About Me</h3>
            <div className="mt-4 space-y-4 font-body text-[15px] leading-relaxed text-muted">
              <p>
                I&apos;m a Computer Science Engineering undergraduate at Jain
                University (CGPA 9.11), driven by clean code and elegant problem
                solving. My foundation is in <span className="text-ink">Java and DSA</span>
                {" "}— 100+ problems solved on LeetCode and counting.
              </p>
              <p>
                On the web I build with <span className="text-ink">React, Next.js, and
                modern CSS</span>, focusing on responsive, accessible interfaces.
                I interned as a Frontend Developer at OctaNet, shipping responsive
                pages and learning real workflows.
              </p>
              <p>
                My goal is a Software Engineering role at a top product company.
                Outside code, I&apos;m a state-level chess player and a relentless
                learner.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CARDS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-bg/40 px-4 py-3"
                >
                  <Icon size={18} className="text-accent" />
                  <span className="font-body text-sm text-muted">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="mb-2 font-body text-xs uppercase tracking-[0.25em] text-muted">
                Relevant coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {COURSEWORK.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-bg/40 px-3 py-1 font-body text-xs text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
