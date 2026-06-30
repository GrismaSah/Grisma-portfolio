/* Ambient fixed background: floating gradient orbs + faint dots.
   Purely decorative (z -10). */
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -left-32 top-[-10%] h-[420px] w-[420px] animate-orb rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute right-[-10%] top-[25%] h-[460px] w-[460px] animate-orb rounded-full bg-blue/20 blur-[130px] [animation-delay:-7s]" />
      <div className="absolute bottom-[-10%] left-1/3 h-[400px] w-[400px] animate-orb rounded-full bg-accent/15 blur-[130px] [animation-delay:-13s]" />
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
    </div>
  );
}
