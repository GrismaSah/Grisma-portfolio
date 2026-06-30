"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/utils";

/* Soft glow + dot that trail the cursor (desktop, pointer:fine only). */
export default function CursorGlow() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;

    const target = { x: innerWidth / 2, y: innerHeight / 2 };
    const pos = { ...target };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current)
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    let raf = 0;
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      if (ring.current)
        ring.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-[320px] w-[320px] rounded-full md:block"
        style={{
          marginLeft: -160,
          marginTop: -160,
          background:
            "radial-gradient(circle, rgba(124,92,255,0.13), rgba(79,157,255,0.06) 40%, transparent 70%)",
        }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[81] hidden h-2 w-2 rounded-full bg-white/80 mix-blend-difference md:block"
        style={{ marginLeft: -4, marginTop: -4 }}
      />
    </>
  );
}
