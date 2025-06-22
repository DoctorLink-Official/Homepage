import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Homepage' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: basePath,
  assetPrefix: isProd ? '/Homepage/' : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: basePath,
  },
};

export default nextConfig;
