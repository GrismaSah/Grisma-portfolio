import type { MetadataRoute } from "next";

// 👉 Replace with your deployed domain
const BASE = "https://grisma-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: BASE, lastModified: new Date(), priority: 1 }];
}
