/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PASSWORD: process.env.PASSWORD,
  },
};

module.exports = nextConfig;
