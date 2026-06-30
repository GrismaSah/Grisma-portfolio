import type { ReactNode } from "react";

export default function GradientText({
  children,
  animated = false,
  className = "",
}: {
  children: ReactNode;
  animated?: boolean;
  className?: string;
}) {
  return (
    <span className={`${animated ? "text-grad-anim" : "text-grad"} ${className}`}>
      {children}
    </span>
  );
}
