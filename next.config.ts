import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        // Tencent COS - UAT bucket (Singapore)
        protocol: 'https',
        hostname: 'skker-cos-uat-1323270986.cos.ap-singapore.myqcloud.com',
      },
      {
        // Tencent COS - Production bucket (Singapore)
        protocol: 'https',
        hostname: 'skker-cos-prod-1323270986.cos.ap-singapore.myqcloud.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api'}/:path*`, // Proxy to Backend
      },
    ]
  },
};

export default nextConfig;
