"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants";
import { fadeUp, stagger, viewport } from "@/animations/variants";
import SectionHeading from "@/components/SectionHeading";
import useTilt from "@/hooks/useTilt";
import type { SkillItem } from "@/types";

function SkillCard({ name, icon: Icon, color }: SkillItem) {
  const tilt = useTilt(12);
  return (
    <motion.div variants={fadeUp}>
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{ transition: "transform 0.2s ease" }}
        className="group glass grad-border flex flex-col items-center gap-3 px-5 py-6 hover:shadow-glow"
      >
        <Icon
          size={34}
          style={{ color }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="font-body text-sm font-medium text-muted group-hover:text-ink">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I work with" title="Skills &" highlight="Tools" />
        <div className="space-y-10">
          {SKILLS.map((cat) => (
            <div key={cat.group}>
              <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-semibold text-ink/85">
                <span className="h-px w-8 bg-gradient-to-r from-accent to-blue" />
                {cat.group}
              </h3>
              <motion.div
                variants={stagger(0, 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              >
                {cat.items.map((s) => (
                  <SkillCard key={s.name} {...s} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
