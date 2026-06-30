/* Shared TypeScript types used across the app. */
import type { LucideIcon } from "lucide-react";

export interface Social {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  instagram?: string;
  twitter?: string;
}

export interface SkillItem {
  name: string;
  icon: LucideIcon;
  /** brand color for the icon */
  color: string;
}

export interface SkillGroup {
  group: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  /** real screenshot (png) — shown once added to /public/projects */
  image: string;
  /** gradient fallback shown until the screenshot exists */
  placeholder: string;
  github: string;
  featured: boolean;
}

export interface TimelineItem {
  kind: "education" | "experience";
  title: string;
  org: string;
  duration: string;
  meta?: string;
  points: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking?: number;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}
