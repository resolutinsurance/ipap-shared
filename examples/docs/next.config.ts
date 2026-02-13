import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@resolut/ipap-shared"],
  turbopack: {
    resolveAlias: {
      "@shared": path.resolve(__dirname, "../../src"),
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@shared": path.resolve(__dirname, "../../src"),
    };
    return config;
  },
};

export default nextConfig;
