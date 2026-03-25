/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep deployment compatible with the existing Docker+nginx flow.
  // We generate a static site in `out/` and serve it via nginx (port 80).
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

