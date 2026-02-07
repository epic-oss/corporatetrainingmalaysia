import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { RootLayoutClient } from '@/components'
import { getCurrentYear } from '@/lib/utils'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })
const GA_MEASUREMENT_ID = 'G-5NGPNKXHYG'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Corporate Training Providers Malaysia (${getCurrentYear()}) | Compare & Get Quotes`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `Find HRDF-approved corporate training providers in Malaysia. Compare leadership, sales, and technical training companies. Get free quotes today.`,
  keywords: [
    'corporate training malaysia',
    'hrdf training providers',
    'leadership training malaysia',
    'sales training malaysia',
    'soft skills training',
    'team building malaysia',
    'corporate trainers',
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Corporate Training Providers Malaysia (${getCurrentYear()})`,
    description: 'Find HRDF-approved corporate training providers in Malaysia. Compare and get free quotes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Corporate Training Providers Malaysia (${getCurrentYear()})`,
    description: 'Find HRDF-approved corporate training providers in Malaysia.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    google: 'LqiYtGK1Btu9kvTpqqsAnf2Z8ogskvzlV9ELIyGg3KY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* Website Schema for AI Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'CorporateTrainingMY',
              description: "Malaysia's directory of corporate training providers. Compare 109+ HRDF-approved trainers across Kuala Lumpur, Selangor, Penang, and Johor.",
              url: 'https://corporatetrainingmalaysia.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://corporatetrainingmalaysia.com/providers?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CorporateTrainingMY',
              url: 'https://corporatetrainingmalaysia.com',
              description: 'Malaysia\'s leading directory for finding and comparing corporate training providers. Get free quotes from HRDF-approved trainers.',
              areaServed: {
                '@type': 'Country',
                name: 'Malaysia',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  )
}
