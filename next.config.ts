import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "www.vectorlogo.zone" },
      { protocol: "https", hostname: "www.docker.com" },
      { protocol: "https", hostname: "www.python.org" },
      { protocol: "https", hostname: "cloud.google.com" },
      { protocol: "https", hostname: "www.linux.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
