/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.vecteezy.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
