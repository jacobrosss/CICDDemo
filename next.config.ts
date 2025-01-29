import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/CICDDemo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
