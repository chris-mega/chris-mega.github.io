/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  generateStaticParams: async () => {
    return [{ "/api/fetchPreview": { page: "/api/fetchPreview" } }];
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
