import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// GitHub Pages용 basePath 설정 (커스텀 도메인 사용 시에는 빈 문자열)
const useBasePath = process.env.USE_BASE_PATH === 'true';
const basePath = isProd && useBasePath ? '/Homepage' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: basePath,
  assetPrefix: isProd && useBasePath ? '/Homepage/' : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: basePath,
  },
};

export default nextConfig;
