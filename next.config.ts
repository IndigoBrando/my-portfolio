import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  basePath: '/my-portfolio', // Replace with your actual GitHub repo name
  trailingSlash: true, // Recommended for GitHub Pages
  images: {
    unoptimized: true, // Needed since Next.js image optimization requires a server
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent build failure on lint errors
  },
};

export default nextConfig;
