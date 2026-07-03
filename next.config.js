/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fisherpaintinc.com",
      },
      {
        protocol: "https",
        hostname: "images.fisherpaintinc.com",
      },
    ],
  },
};

module.exports = nextConfig;
