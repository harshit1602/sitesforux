import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Allows images hosted on Cloudinary
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

module.exports = nextConfig;