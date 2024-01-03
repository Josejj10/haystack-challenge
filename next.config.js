/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    UNSPLASH_KEY: process.env.UNSPLASH_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
