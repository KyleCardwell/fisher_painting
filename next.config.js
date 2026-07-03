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
      {
        protocol: "https",
        hostname: "pub-114aa5ba9d9e4ce58bfee3087d7dc2f7.r2.dev",
      },
    ],
  },
};

module.exports = nextConfig;
