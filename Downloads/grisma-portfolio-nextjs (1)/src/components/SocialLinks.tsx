"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Instagram, Twitter, Mail } from "lucide-react";
import { SOCIALS } from "@/constants";

/* Social icon row. Any social with an empty URL is hidden. LeetCode
   uses a code icon (lucide has no LeetCode glyph). */
const ITEMS = [
  { icon: Github, href: SOCIALS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
  { icon: Code2, href: SOCIALS.leetcode, label: "LeetCode" },
  { icon: Mail, href: `mailto:${SOCIALS.email}`, label: "Email" },
  { icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
  { icon: Twitter, href: SOCIALS.twitter, label: "X" },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  const visible = ITEMS.filter((i) => i.href && !i.href.endsWith("mailto:"));
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {visible.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          className="glass grad-border flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-ink hover:shadow-glow"
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}
