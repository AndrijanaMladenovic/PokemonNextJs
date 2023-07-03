/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.pokemon.com",
      },
    ],
  },
};
