/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "specials-images.forbesimg.com",
        pathname: "/imageserve/**",
      },
      {
        protocol: "https",
        hostname: "undefined",
      },
    ],
  },
};

export default nextConfig;
