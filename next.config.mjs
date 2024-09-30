/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/my-notes/:path*",
        destination:
          "https://publish.obsidian.md/serve?url=blog.igsr5.dev/:path*",
      },
    ];
  },
};

export default nextConfig;
