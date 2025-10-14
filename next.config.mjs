/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.mahalaxmitransport.co',
          },
        ],
        destination: 'https://mahalaxmitransport.co/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
