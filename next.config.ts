import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // prevents Next from running ESLint during `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
