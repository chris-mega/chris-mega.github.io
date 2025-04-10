/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: [
      "media.licdn.com",
      "images.unsplash.com",
      "opengraph.githubassets.com",
    ],
  },
};

export default nextConfig;
