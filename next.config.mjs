/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // SVG placeholders are served from /public via plain <img>, so no
  // remote image domains are required. Add domains here if you later
  // load images from a CDN with next/image.
};

export default nextConfig;
