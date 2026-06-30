"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "@/hooks/useLenis";
import Loader from "./Loader";
import AnimatedBackground from "./AnimatedBackground";
import ScrollProgress from "./ScrollProgress";
import CursorGlow from "./CursorGlow";

/* Hosts all global client-side effects: smooth scroll, loader,
   ambient background, progress bar, cursor glow, and a subtle GSAP
   parallax on elements tagged `.gsap-parallax`. */
export default function ClientLayer() {
  const [showLoader, setShowLoader] = useState(true);
  useLenis();

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 1300);

    gsap.registerPlugin(ScrollTrigger);
    const lenis = (window as unknown as { __lenis?: { on: (e: string, cb: () => void) => void } })
      .__lenis;
    if (lenis) lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        gsap.to(el, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      <AnimatedBackground />
      <ScrollProgress />
      <CursorGlow />
    </>
  );
}
