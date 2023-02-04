/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    // loader: 'akamai',
    // path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nwcc.ru',
      },
    ],
  },
}

module.exports = nextConfig
