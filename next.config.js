
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            
            hostname: 'images.unsplash.com',
            
          },
          {
            hostname: 'cdn.sanity.io'
          },
          {
            hostname: 'xchyxsks.api.sanity.io'
          }
        ],
      },
}

module.exports = nextConfig
