import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.stanwith.me" },
    ],
  },
};

export default nextConfig;
