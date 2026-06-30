"use client";
import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";
interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  toggle: () => {},
});

/* Dark-first theme provider. Persists choice to localStorage and
   toggles a `light` class on <html>. A blocking script in layout.tsx
   sets the initial class before paint to avoid a flash. */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "dark";
    setTheme(stored);
    document.documentElement.classList.toggle("light", stored === "light");
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("light", next === "light");
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
