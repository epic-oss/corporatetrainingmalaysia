import { Metadata } from 'next'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

export const metadata: Metadata = {
  title: `HRDF Calculator Malaysia ${currentYear} - Calculate Levy & Training Claims`,
  description: `Free HRDF levy calculator. Calculate your company's monthly HRDF contribution (1% of wages) and estimate training claim amounts. HRD Corp levy calculator.`,
  keywords: [
    'hrdf calculator',
    'hrdf levy calculator',
    'hrd corp calculator',
    'hrdf contribution calculator',
    'hrdf claim calculator',
    'malaysia hrdf calculator',
  ],
  openGraph: {
    title: `HRDF Calculator Malaysia ${currentYear}`,
    description: 'Calculate your HRDF levy contribution and training claims. Free online calculator for Malaysian companies.',
  },
}

export default function HRDFCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* WebApplication Schema for Calculator */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'HRDF Levy Calculator',
            description: 'Calculate your HRDF levy contribution and training claim amount for Malaysian companies',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'MYR',
            },
            featureList: [
              'Calculate monthly HRDF levy (1% of wages)',
              'Estimate annual training budget',
              'View claimable amount breakdown',
              'Compare different training scenarios',
            ],
          }),
        }}
      />
      {/* FAQ Schema for Calculator */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How is HRDF levy calculated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HRDF levy is calculated as 1% of employees monthly wages (basic salary plus fixed allowances). For example, if your company has total monthly wages of RM100,000, your HRDF levy is RM1,000 per month.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much can I claim from HRDF for training?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can claim up to RM8,000 per day for external training under the SBL-Khas scheme. The actual claimable amount depends on your levy balance and the training scheme used. Most companies can claim 100% of training costs if they have sufficient levy.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the HRDF levy rate in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The HRDF levy rate is 1% of employees monthly wages. This is mandatory for companies with 10 or more Malaysian employees. Smaller companies can register voluntarily.',
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
