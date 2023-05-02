/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
  },
  images: {
    domains: ["localhost", "res.cloudinary.com"],
    unoptimized: true,
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
