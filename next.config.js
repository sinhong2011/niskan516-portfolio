const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  // skipWaiting: true,
})

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    REACT_APP_ENV: process.env.REACT_APP_ENV,
    REACT_APP_API_BASE: process.env.REACT_APP_API_BASE,
    REACT_APP_PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL,
    REACT_APP_TITLE: process.env.REACT_APP_TITLE,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  env: {
    REACT_APP_ENV: process.env.REACT_APP_ENV,
    REACT_APP_API_BASE: process.env.REACT_APP_API_BASE,
    REACT_APP_PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL,
    REACT_APP_TITLE: process.env.REACT_APP_TITLE,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
