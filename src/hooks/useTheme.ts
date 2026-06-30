"use client";
import { useContext } from "react";
import { ThemeContext } from "@/components/providers/ThemeProvider";

/* Convenience hook to read/toggle the theme. */
export default function useTheme() {
  return useContext(ThemeContext);
}
