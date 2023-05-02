/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
