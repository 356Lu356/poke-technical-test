import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "pokeapi.co"],
  },
};

export default nextConfig;
