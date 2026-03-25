/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server-mode: enable a Node.js runtime (needed for /app/api/* route handlers).
  // Using `standalone` keeps Docker images smaller and self-contained.
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

