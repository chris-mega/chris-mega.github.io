/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: [
      "media.licdn.com",
      "images.unsplash.com",
      "opengraph.githubassets.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
