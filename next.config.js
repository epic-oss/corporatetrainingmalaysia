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
      {
        source: '/leadership-training-malaysia',
        destination: '/categories/leadership-training',
        permanent: true,
      },
      {
        source: '/sales-training-malaysia',
        destination: '/categories/sales-training',
        permanent: true,
      },
      {
        source: '/communication-training-malaysia',
        destination: '/categories/communication-training',
        permanent: true,
      },
      {
        source: '/technical-training-malaysia',
        destination: '/categories/digital-skills-training',
        permanent: true,
      },
      {
        source: '/compliance-training-malaysia',
        destination: '/categories/safety-compliance-training',
        permanent: true,
      },
      {
        source: '/soft-skills-training-malaysia',
        destination: '/categories/soft-skills-training',
        permanent: true,
      },
      {
        source: '/team-building-training-malaysia',
        destination: '/categories/team-building',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
