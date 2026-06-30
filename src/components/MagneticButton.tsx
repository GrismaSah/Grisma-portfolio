"use client";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { prefersReducedMotion } from "@/utils";

/* Magnetic hover button/link. variant: "solid" | "ghost". */
export default function MagneticButton({
  children,
  href,
  download,
  onClick,
  variant = "solid",
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${
      (e.clientY - r.top - r.height / 2) * 0.35
    }px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition-[transform,box-shadow] duration-300 will-change-transform";
  const styles =
    variant === "solid"
      ? "text-white bg-gradient-to-r from-accent to-blue shadow-glow hover:shadow-glow-blue"
      : "glass grad-border text-ink hover:text-ink";
  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        aria-label={ariaLabel}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cls}
    >
      {children}
    </button>
  );
}
