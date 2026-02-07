/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/hrdf-training-provider-list',
        destination: '/hrdf-providers',
        permanent: true,
      },
      {
        source: '/locations/kuala-lumpur',
        destination: '/corporate-training-kuala-lumpur',
        permanent: true,
      },
      {
        source: '/locations/selangor',
        destination: '/corporate-training-selangor',
        permanent: true,
      },
      {
        source: '/locations/penang',
        destination: '/corporate-training-penang',
        permanent: true,
      },
      {
        source: '/locations/johor',
        destination: '/corporate-training-johor',
        permanent: true,
      },
      {
        source: '/locations/perak',
        destination: '/corporate-training-perak',
        permanent: true,
      },
      {
        source: '/locations/melaka',
        destination: '/corporate-training-melaka',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
