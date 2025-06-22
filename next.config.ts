import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: '/Homepage',
  assetPrefix: '/Homepage/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
