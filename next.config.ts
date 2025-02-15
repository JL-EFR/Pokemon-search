import type { NextConfig } from "next";

module.exports = {
  distDir: 'build',
}

const nextConfig: NextConfig = {
  images: {
    domains: ['img.pokemondb.net'],
  }
};

export default nextConfig;
