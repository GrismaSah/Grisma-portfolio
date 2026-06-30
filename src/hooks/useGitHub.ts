"use client";
import { useEffect, useState } from "react";
import { GITHUB_USERNAME, GITHUB_FALLBACK } from "@/constants";
import type { GitHubRepo } from "@/types";

interface GitHubData {
  repos: GitHubRepo[];
  topLanguages: { name: string; count: number }[];
  publicRepos: number;
  followers: number;
  contributions: number;
  live: boolean;
  loading: boolean;
}

/* Fetches public repos via the unauthenticated GitHub REST API
   (60 req/hr per IP). Computes top languages + featured repos.
   Falls back to constants if rate-limited or offline. */
export default function useGitHub(): GitHubData {
  const [data, setData] = useState<GitHubData>({
    repos: [],
    topLanguages: [],
    publicRepos: GITHUB_FALLBACK.publicRepos,
    followers: GITHUB_FALLBACK.followers,
    contributions: GITHUB_FALLBACK.contributions,
    live: false,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
          ),
        ]);
        if (!userRes.ok || !repoRes.ok) throw new Error("rate limited");
        const user = await userRes.json();
        const repos: GitHubRepo[] = await repoRes.json();

        // Contributions for the last year — same public source the
        // calendar uses. Best-effort; falls back to the constant.
        let contributions = GITHUB_FALLBACK.contributions;
        try {
          const cRes = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
          );
          if (cRes.ok) {
            const c = await cRes.json();
            const totals = c?.total ? Object.values(c.total as Record<string, number>) : [];
            if (totals.length) contributions = totals.reduce((a, b) => a + b, 0);
          }
        } catch {
          /* keep fallback */
        }

        const langCount = new Map<string, number>();
        repos.forEach((r) => {
          if (r.language) langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1);
        });
        const topLanguages = [...langCount.entries()]
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        const featured = [...repos]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        if (!cancelled) {
          setData({
            repos: featured,
            topLanguages,
            publicRepos: user.public_repos ?? GITHUB_FALLBACK.publicRepos,
            followers: user.followers ?? GITHUB_FALLBACK.followers,
            contributions,
            live: true,
            loading: false,
          });
        }
      } catch {
        if (!cancelled) setData((d) => ({ ...d, loading: false }));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}
