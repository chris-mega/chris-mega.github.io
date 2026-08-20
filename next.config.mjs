/** @type {import('next').NextConfig} */
const nextConfig = {
  // Previously: trailingSlash + images.unoptimized, both required by the
  // GitHub Pages static export. On Vercel we get real routing and the
  // built-in image optimizer, so neither is needed.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
