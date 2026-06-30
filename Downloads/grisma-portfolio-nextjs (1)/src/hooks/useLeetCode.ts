"use client";
import { useEffect, useState } from "react";
import { LEETCODE_USERNAME, LEETCODE_FALLBACK } from "@/constants";
import type { LeetCodeStats } from "@/types";

/* Fetches LeetCode stats from a public API with graceful fallback.
   👉 Endpoint is community-run; if it changes, swap the URL below
   or rely on LEETCODE_FALLBACK in constants. */
const ENDPOINT = (u: string) => `https://leetcode-stats-api.herokuapp.com/${u}`;

export default function useLeetCode() {
  const [stats, setStats] = useState<LeetCodeStats>(LEETCODE_FALLBACK);
  const [live, setLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(ENDPOINT(LEETCODE_USERNAME), { cache: "no-store" });
        if (!res.ok) throw new Error("bad status");
        const d = await res.json();
        if (d && d.status !== "error" && typeof d.totalSolved === "number") {
          if (!cancelled) {
            setStats({
              totalSolved: d.totalSolved,
              easySolved: d.easySolved,
              mediumSolved: d.mediumSolved,
              hardSolved: d.hardSolved,
              ranking: d.ranking,
            });
            setLive(true);
          }
        }
      } catch {
        /* keep fallback */
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { stats, live, loading };
}
