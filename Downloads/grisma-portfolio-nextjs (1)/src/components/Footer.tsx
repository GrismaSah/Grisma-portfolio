"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "@/utils";
import { PROFILE } from "@/constants";
import SocialLinks from "./SocialLinks";
import GradientText from "./GradientText";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center">
        <button
          onClick={() => scrollToId("home")}
          className="font-display text-xl font-bold"
        >
          <GradientText>Grisma</GradientText>
          <span className="text-ink">.dev</span>
        </button>
        <SocialLinks className="justify-center" />
        <p className="font-body text-sm text-muted">
          © {year} {PROFILE.name}. Built with Next.js, TypeScript &amp; Tailwind.
        </p>
        <motion.button
          onClick={() => scrollToId("home")}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          className="glass grad-border flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-ink hover:shadow-glow"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
