/** @type {import('next').NextConfig} */

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.plugins.push(new WindiCSSWebpackPlugin)
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
