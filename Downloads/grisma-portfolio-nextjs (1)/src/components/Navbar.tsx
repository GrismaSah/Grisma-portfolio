"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/constants";
import { scrollToId, cn } from "@/utils";
import useScrollSpy from "@/hooks/useScrollSpy";
import GradientText from "./GradientText";
import { EASE } from "@/animations/variants";
import ThemeToggle from "./ThemeToggle";

/* Sticky navbar: transparent at top, blurs + shrinks on scroll.
   Active link from scroll spy. Mobile hamburger drawer. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(["home", ...NAV_LINKS.map((l) => l.to)]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-[70] transition-all duration-300",
        scrolled ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-bold tracking-tight"
        >
          <GradientText>Grisma</GradientText>
          <span className="text-ink">.dev</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <button
                onClick={() => go(l.to)}
                className={cn(
                  "relative rounded-full px-3.5 py-2 font-body text-sm transition-colors",
                  active === l.to ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {active === l.to && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={PROFILE.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-accent to-blue px-4 py-2 font-body text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-blue sm:inline-flex"
          >
            <Download size={15} /> Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="glass grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <button
                    onClick={() => go(l.to)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left font-body text-sm transition-colors",
                      active === l.to
                        ? "bg-accent/15 text-ink"
                        : "text-muted hover:bg-white/5 hover:text-ink"
                    )}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <a
                href={PROFILE.resume}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-blue px-4 py-3 font-body text-sm font-semibold text-white"
              >
                <Download size={15} /> Download Resume
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
