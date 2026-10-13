import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/", permanent: false },
      { source: "/privacy-policy/", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
