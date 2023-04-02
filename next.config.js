/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/comming-soon',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
