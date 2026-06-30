"use client";
import { useRef } from "react";
import { prefersReducedMotion } from "@/utils";

/* Dependency-free 3D tilt on mouse move. Attach ref + handlers. */
export default function useTilt(max = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(
      2
    )}deg) rotateY(${(x * max).toFixed(2)}deg)`;
  };
  const onMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
