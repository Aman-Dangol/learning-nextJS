import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/department",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
