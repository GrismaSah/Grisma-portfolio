"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Activity, BookMarked, Code2 } from "lucide-react";
import { GITHUB_USERNAME, SOCIALS } from "@/constants";
import { fadeUp, stagger, viewport } from "@/animations/variants";
import SectionHeading from "@/components/SectionHeading";
import useGitHub from "@/hooks/useGitHub";
import useCountUp from "@/hooks/useCountUp";

/* Contribution calendar — client-only (no SSR). */
const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => (
    <p className="py-8 text-center font-body text-sm text-muted">Loading contributions…</p>
  ),
});

const calendarTheme = {
  light: ["#161620", "#4f9dff55", "#7c5cff99", "#7c5cffcc", "#7c5cff"],
  dark: ["#161620", "#4f9dff55", "#7c5cff99", "#7c5cffcc", "#7c5cff"],
};

function Counter({ icon: Icon, label, value }: { icon: typeof Star; label: string; value: number }) {
  const { ref, value: n } = useCountUp(value);
  return (
    <div ref={ref} className="glass grad-border flex items-center gap-3 p-5">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-accent to-blue text-white">
        <Icon size={18} />
      </span>
      <div>
        <p className="font-display text-2xl font-bold">{n}</p>
        <p className="font-body text-xs uppercase tracking-wider text-muted">{label}</p>
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const { repos, topLanguages, publicRepos, contributions, live } = useGitHub();

  return (
    <section id="github" className="section-pad px-5">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Consistency over intensity" title="My" highlight="GitHub" />

        {/* counters */}
        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <motion.div variants={fadeUp}><Counter icon={BookMarked} label="Repositories" value={publicRepos} /></motion.div>
          <motion.div variants={fadeUp}><Counter icon={Activity} label="Contributions" value={contributions} /></motion.div>
          <motion.div variants={fadeUp}><Counter icon={Star} label="Languages" value={topLanguages.length || 4} /></motion.div>
          <motion.div variants={fadeUp}><Counter icon={Code2} label="LeetCode Solved" value={100} /></motion.div>
        </motion.div>

        {/* contribution calendar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="surface mb-8 p-6 sm:p-8"
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold">
              <Github size={18} /> Contributions
            </h3>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="font-body text-sm text-grad">
              @{GITHUB_USERNAME}
            </a>
          </div>
          <div className="overflow-x-auto">
            {/* 👉 Username is GITHUB_USERNAME in constants */}
            <GitHubCalendar
              username={GITHUB_USERNAME}
              theme={calendarTheme}
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={13}
            />
          </div>
        </motion.div>

        {/* repo cards */}
        {repos.length > 0 && (
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {repos.map((r) => (
              <motion.a
                key={r.name}
                variants={fadeUp}
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="glass grad-border flex flex-col p-5 hover:shadow-glow"
              >
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-accent" />
                  <span className="font-display text-sm font-semibold">{r.name}</span>
                </div>
                <p className="mt-2 line-clamp-2 flex-1 font-body text-xs text-muted">
                  {r.description ?? "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-4 font-body text-xs text-muted">
                  {r.language && <span>{r.language}</span>}
                  <span className="flex items-center gap-1"><Star size={12} /> {r.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} /> {r.forks_count}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {!live && (
          <p className="mt-6 text-center font-body text-xs text-muted">
            Showing cached values — GitHub&apos;s public API may be rate-limited. Live data loads when available.
          </p>
        )}
      </div>
    </section>
  );
}
