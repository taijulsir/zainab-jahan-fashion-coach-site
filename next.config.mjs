/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e-commerce-test.sgp1.digitaloceanspaces.com",
        port: "",
        pathname: "/**", // <-- FIXED here
      },
    ],
  },
};

export default nextConfig;
