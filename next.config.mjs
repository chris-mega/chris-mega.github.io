/** @type {import('next').NextConfig} */
const nextConfig = {
  // Previously: trailingSlash + images.unoptimized, both required by the
  // GitHub Pages static export. On Vercel we get real routing and the
  // built-in image optimizer, so neither is needed.
  //
  // No `images.remotePatterns` on purpose: every image is served from
  // /public, so the optimizer has no reason to fetch external hosts.
};

export default nextConfig;
