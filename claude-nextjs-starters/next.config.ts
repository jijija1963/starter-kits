import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/starter-kits',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
