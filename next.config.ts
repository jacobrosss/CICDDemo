import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/actions-test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
