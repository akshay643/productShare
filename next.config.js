/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PASSWORD: process.env.PASSWORD,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

module.exports = nextConfig;
