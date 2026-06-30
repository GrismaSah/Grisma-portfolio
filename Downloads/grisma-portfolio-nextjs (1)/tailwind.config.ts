import type { Config } from "tailwindcss";

/* ───────────────────────────────────────────────────────────
   THEME — colors map to CSS variables defined in globals.css so
   the light/dark toggle works automatically. Edit palette there.
   ─────────────────────────────────────────────────────────── */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        line: "var(--line)",
        accent: "#7C5CFF",
        "accent-hover": "#9D7DFF",
        blue: "#4F9DFF",
        ink: "var(--text)",
        muted: "var(--muted)",
      },
      fontFamily: {
        // Sora for display/headings, Inter for body (next/font vars)
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(124,92,255,0.5)",
        "glow-blue": "0 0 40px -12px rgba(79,157,255,0.45)",
        soft: "0 24px 60px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        orb: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        orb: "orb 20s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        spinSlow: "spinSlow 10s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
