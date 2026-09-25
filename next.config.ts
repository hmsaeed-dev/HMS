import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/story",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/now",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/academics",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/writing",
        destination: "/thought",
        permanent: true,
      },
      {
        source: "/writing/:slug*",
        destination: "/thought/:slug*",
        permanent: true,
      },
      {
        source: "/photography",
        destination: "/visuals",
        permanent: true,
      },
      {
        source: "/work/fire-car.html",
        destination: "/work/fire-fighting-car",
        permanent: true,
      },
      {
        source: "/work/vehicle-sys.html",
        destination: "/work/vehicle-management-system",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
