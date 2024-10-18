/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.media-amazon.com',
        pathname: '/images/I/61UExgKp4NL._SX569_.jpg',
      },
    ],
  },
}

module.exports = nextConfig
