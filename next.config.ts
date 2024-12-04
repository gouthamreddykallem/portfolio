import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Add this if you're using static exports
    domains: [], // Add any external image domains here if needed
  },
};

export default nextConfig;
