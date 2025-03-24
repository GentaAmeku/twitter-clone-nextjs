import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  env: {
    API_SERVER_URL: process.env.API_SERVER_URL,
  },
};

export default nextConfig;
