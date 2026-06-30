"use client";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/utils";

interface Dot {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

/* Lightweight floating particles — pure CSS, no canvas, no deps.
   Generated AFTER mount so server/client HTML match (no hydration
   mismatch from Math.random). */
export default function Particles({ count = 22 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setDots(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
        opacity: Math.random() * 0.4 + 0.15,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-accent animate-float"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
