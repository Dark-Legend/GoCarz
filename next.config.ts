import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedDevOrigins: [
      "https://aeb3-2401-4900-1c1a-6e7a-c1f8-a9eb-7b8d-e86e.ngrok-free.app",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spn-sta.spinny.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
