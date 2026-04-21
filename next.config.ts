import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/reading/articles", destination: "/reading/read", permanent: true },
      { source: "/reading/research", destination: "/reading/read", permanent: true },
      { source: "/reading/research/:slug", destination: "/reading/read/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
