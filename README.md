# Grisma Sah — Developer Portfolio

A premium, recruiter-focused portfolio built with **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS**, with Framer Motion + GSAP animations, Lenis smooth scrolling, a dark-first theme toggle, live LeetCode + GitHub stats, a GitHub contribution graph, and an EmailJS contact form.

## 🚀 Run locally

```bash
npm install      # if you hit peer-dep warnings: npm install --legacy-peer-deps
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> Requires Node.js 18.18+ (Node 20+ recommended). Deploys to Vercel as-is.

## ✏️ Where to edit your content

Almost everything lives in **one file**: `src/constants/index.ts`

| Change this | Where |
|---|---|
| Name, role, intro, status, email, phone, location | `PROFILE` |
| Profile photo | replace `/public/profile.svg`, update `PROFILE.photo` |
| Resume PDF | replace `/public/resume.pdf` |
| Social links (GitHub, LinkedIn, LeetCode) | `SOCIALS` |
| GitHub + LeetCode usernames (live stats) | `GITHUB_USERNAME`, `LEETCODE_USERNAME` |
| Skills (grouped) | `SKILLS` |
| Projects (+ screenshots in `/public/projects/`) | `PROJECTS` |
| Experience + Education timeline | `TIMELINE` |
| Certificates | `CERTIFICATES` |
| Fallback stat numbers (if APIs fail) | `LEETCODE_FALLBACK`, `GITHUB_FALLBACK` |
| Contact form email delivery | `EMAILJS` |

### Live stats (LeetCode + GitHub)
- **GitHub**: pulled from the public REST API (no key, 60 req/hr per IP). Shows repos, followers, top languages, and top repositories. Falls back to `GITHUB_FALLBACK` if rate-limited.
- **LeetCode**: pulled from a community API (`leetcode-stats-api`). If it's down, the UI uses `LEETCODE_FALLBACK`. A small dot shows **Live** vs **Cached**.
- The **contribution graph** uses `react-github-calendar` and reads `GITHUB_USERNAME`.

### Contact form (EmailJS)
1. Make a free account at https://www.emailjs.com
2. Create a service + template (variables: `name`, `email`, `message`)
3. Paste `serviceId`, `templateId`, `publicKey` into `EMAILJS` in `src/constants/index.ts`

Until those are set, the form falls back to opening the visitor's mail client.

### Theme
Dark is the default. The navbar toggle switches to a clean light variant. Palette and both themes are defined as CSS variables in `src/app/globals.css` (and mapped in `tailwind.config.ts`).

## 🧱 Structure

```
src/
├─ app/            layout.tsx, page.tsx, globals.css, sitemap.ts, robots.ts, icon.svg
├─ components/     Navbar, Footer, Loader, cards, buttons, ThemeToggle, providers/
├─ sections/       Hero, About, Skills, Projects, Timeline, DSA, GitHub, Contact
├─ hooks/          useLenis, useScrollSpy, useTilt, useCountUp, useLeetCode, useGitHub, useTheme
├─ animations/     shared Framer Motion variants
├─ constants/      ← ALL your content
├─ utils/          helpers
└─ types/          shared TypeScript types
```

## 🌐 Deploy
Push to GitHub and import into Vercel — zero config. SEO metadata, OpenGraph, sitemap, and robots are already wired up.

---
Built with Next.js, TypeScript & Tailwind.
