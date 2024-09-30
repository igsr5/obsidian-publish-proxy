/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          destination:
            "https://publish.obsidian.md/serve?url=blog.igsr5.dev/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
