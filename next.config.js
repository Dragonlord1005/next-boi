/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next-boi-git-og-image-dragonlord1005.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
