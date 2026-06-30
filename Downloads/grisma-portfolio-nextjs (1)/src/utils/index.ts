/* Small shared helpers. */

export const cn = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(" ");

/* Smooth-scroll to a section id. Uses Lenis if present, else native. */
export const scrollToId = (id: string): void => {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element, o?: object) => void } })
    .__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
