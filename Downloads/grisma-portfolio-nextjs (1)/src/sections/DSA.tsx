"use client";
import { motion } from "framer-motion";
import { Code2, Flame, ExternalLink } from "lucide-react";
import { SOCIALS } from "@/constants";
import { fadeUp, stagger, viewport } from "@/animations/variants";
import SectionHeading from "@/components/SectionHeading";
import useLeetCode from "@/hooks/useLeetCode";
import useCountUp from "@/hooks/useCountUp";

/* Single animated stat (counts up in view). */
function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  const { ref, value: n } = useCountUp(value);
  return (
    <div ref={ref} className="glass grad-border p-5 text-center">
      <div className="font-display text-3xl font-bold sm:text-4xl" style={{ color }}>
        {n}
      </div>
      <p className="mt-1 font-body text-xs uppercase tracking-wider text-muted">{label}</p>
    </div>
  );
}

export default function DSA() {
  const { stats, live, loading } = useLeetCode();

  return (
    <section id="dsa" className="section-pad px-5">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Sharpening the fundamentals" title="DSA &" highlight="Problem Solving" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="surface p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold">
              <Code2 size={18} className="text-accent" /> LeetCode
            </h3>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-body text-xs text-muted">
                <span className={`h-2 w-2 rounded-full ${live ? "bg-emerald-400" : "bg-amber-400"}`} />
                {loading ? "Fetching…" : live ? "Live" : "Cached"}
              </span>
              <a href={SOCIALS.leetcode} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 font-body text-sm text-grad">
                Profile <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* total */}
          <div className="mb-6 flex items-center gap-4 rounded-2xl border border-line bg-bg/40 p-5">
            <Flame size={28} className="text-accent" />
            <div>
              <p className="font-display text-3xl font-bold">
                <CountInline value={stats.totalSolved} />
                <span className="text-muted">+</span>
              </p>
              <p className="font-body text-xs uppercase tracking-wider text-muted">
                Total problems solved
              </p>
            </div>
          </div>

          {/* breakdown */}
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-3 gap-4"
          >
            <motion.div variants={fadeUp}><Stat label="Easy" value={stats.easySolved} color="#22c55e" /></motion.div>
            <motion.div variants={fadeUp}><Stat label="Medium" value={stats.mediumSolved} color="#f59e0b" /></motion.div>
            <motion.div variants={fadeUp}><Stat label="Hard" value={stats.hardSolved} color="#ef4444" /></motion.div>
          </motion.div>

          <p className="mt-5 font-body text-sm text-muted">
            Actively practicing through Striver&apos;s DSA Sheet, with a focus on
            patterns over memorization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Inline count-up for the big total. */
function CountInline({ value }: { value: number }) {
  const { ref, value: n } = useCountUp(value);
  return <span ref={ref}>{n}</span>;
}
