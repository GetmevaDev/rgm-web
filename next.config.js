/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    GOOGLE_MAP_ID: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
  },

  images: {
    domains: ["localhost", "res.cloudinary.com"],
    unoptimized: true,
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
