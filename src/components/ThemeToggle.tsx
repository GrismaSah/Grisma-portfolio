"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

/* Dark/light toggle. Dark is the default; light is a clean variant. */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="glass grad-border grid h-10 w-10 place-items-center rounded-full text-ink"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
