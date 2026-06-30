"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/* Gradient scroll-progress bar pinned to the top. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-accent to-blue"
    />
  );
}
