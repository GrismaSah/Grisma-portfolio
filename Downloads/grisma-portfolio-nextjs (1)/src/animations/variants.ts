/* Shared Framer Motion variants so motion feels consistent. */
import type { Variants } from "framer-motion";

/* Typed cubic-bezier tuple (avoids TS inferring number[] instead of a
   4-tuple, which would break `next build`'s type check). */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// "Blur reveal"
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const stagger = (delay = 0, gap = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});

export const viewport = { once: true, amount: 0.2 } as const;
