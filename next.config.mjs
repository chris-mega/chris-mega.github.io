/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      '/api/fetchPreview': { page: '/api/fetchPreview' },
    };
  },
  images: {
    domains: [
      "media.licdn.com",
      "images.unsplash.com",
      "opengraph.githubassets.com",
    ],
  },
};

export default nextConfig;
