"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, FolderGit2, Send } from "lucide-react";
import { PROFILE } from "@/constants";
import { scrollToId } from "@/utils";
import { fadeUp, stagger, EASE } from "@/animations/variants";
import GradientText from "@/components/GradientText";
import MagneticButton from "@/components/MagneticButton";
import SocialLinks from "@/components/SocialLinks";
import Particles from "@/components/Particles";

/* Rotating word under the name (no external typing lib). */
function RotatingText() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % PROFILE.rotating.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="inline-block text-grad"
        >
          {PROFILE.rotating[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24"
    >
      <div className="dotted-grid gsap-parallax absolute inset-0 -z-[1]" />
      <Particles />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left */}
        <motion.div variants={stagger(0.15)} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {PROFILE.status}
          </motion.span>

          <motion.p variants={fadeUp} className="mt-6 font-body text-lg text-muted">
            {PROFILE.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-3 font-display text-2xl font-semibold sm:text-3xl"
          >
            <RotatingText />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href={PROFILE.resume} download>
              <Download size={16} /> Resume
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollToId("projects")}>
              <FolderGit2 size={16} /> Projects
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollToId("contact")}>
              <Send size={16} /> Contact
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right: floating profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden lg:block"
        >
          <div className="animate-float">
            <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-br from-accent to-blue opacity-40 blur-2xl" />
            <div className="grad-border relative rounded-[28px] p-[2px]">
              {/* 👉 Replace /public/profile.svg with your photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="relative h-[380px] w-[320px] rounded-[26px] object-cover shadow-soft"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToId("about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-muted/50 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </span>
      </button>
    </section>
  );
}
