"use client";
import { motion } from "framer-motion";
import { blurUp, viewport } from "@/animations/variants";
import GradientText from "./GradientText";

/* Eyebrow + big gradient title used at the top of each section. */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
}) {
  return (
    <motion.div
      variants={blurUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mb-12 text-center"
    >
      {eyebrow && (
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
        {title} {highlight && <GradientText>{highlight}</GradientText>}
      </h2>
      <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r from-accent to-blue" />
    </motion.div>
  );
}
