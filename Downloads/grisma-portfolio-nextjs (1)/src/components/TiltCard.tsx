"use client";
import type { ReactNode } from "react";
import useTilt from "@/hooks/useTilt";

/* Glass card with 3D tilt-on-hover + gradient hover border. */
export default function TiltCard({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(max);
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 0.25s ease" }}
      className={`glass grad-border ${className}`}
    >
      {children}
    </div>
  );
}
