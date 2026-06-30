"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

/* Animated number that counts up the first time it scrolls into view. */
export default function useCountUp(end: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return { ref, value };
}
