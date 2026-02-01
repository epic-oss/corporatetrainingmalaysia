import { Metadata } from 'next'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

export const metadata: Metadata = {
  title: `Top 10 Corporate Training Providers Malaysia ${currentYear} | Expert Ranked`,
  description: `Best corporate training companies in Malaysia ranked by reviews, HRDF status, and expertise. Compare Kognifi, Trainocate, IMTC, and more top providers.`,
  keywords: [
    'best corporate training malaysia',
    'top training provider malaysia',
    'best hrdf training provider',
    'top 10 training company malaysia',
    'best leadership training provider malaysia',
    'top corporate training company malaysia',
  ],
  openGraph: {
    title: `Top 10 Corporate Training Providers Malaysia ${currentYear}`,
    description: 'Best corporate training companies in Malaysia ranked by reviews, HRDF status, and expertise.',
  },
}

export default function TopTrainingProvidersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `Top 10 Corporate Training Providers in Malaysia ${currentYear}`,
            author: {
              '@type': 'Organization',
              name: 'CorporateTrainingMY',
            },
            datePublished: `${currentYear}-01-01`,
            dateModified: `${currentYear}-01-28`,
            publisher: {
              '@type': 'Organization',
              name: 'CorporateTrainingMY',
              url: 'https://corporatetrainingmalaysia.com',
            },
          }),
        }}
      />
      {/* ItemList Schema for Rankings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `Top 10 Corporate Training Providers in Malaysia ${currentYear}`,
            numberOfItems: 10,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Kognifi Sdn Bhd', description: 'Best for Leadership & Management Training' },
              { '@type': 'ListItem', position: 2, name: 'Trainocate Malaysia', description: 'Best for IT & Technical Training' },
              { '@type': 'ListItem', position: 3, name: 'IMTC', description: 'Best for Management & Professional Development' },
              { '@type': 'ListItem', position: 4, name: 'Knowledge Tree PLT', description: 'Best for HRDF Compliance & Technical Courses' },
              { '@type': 'ListItem', position: 5, name: 'Core Apex Training', description: 'Best for Team Building' },
              { '@type': 'ListItem', position: 6, name: 'Exceed Excellence Sdn Bhd', description: 'Best for Executive Coaching' },
              { '@type': 'ListItem', position: 7, name: 'SH Retail Academy', description: 'Best for Retail & Sales Training' },
              { '@type': 'ListItem', position: 8, name: 'iTrainingExpert Global PLT', description: 'Best for Variety of Programs' },
              { '@type': 'ListItem', position: 9, name: 'OTC Training Centre', description: 'Best for HR & Compliance Training' },
              { '@type': 'ListItem', position: 10, name: 'Malaysian Institute of Management (MIM)', description: 'Best for Established Reputation' },
            ],
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the best corporate training company in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The best corporate training company depends on your needs. For leadership training, Kognifi and Exceed Excellence are top choices. For IT/technical skills, Trainocate leads. For team building, Core Apex Training is highly rated. All are HRDF registered.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I choose a corporate training provider?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Consider: 1) HRDF registration status, 2) Specialization in your required area, 3) Google reviews and ratings, 4) Trainer qualifications and experience, 5) Price vs value, 6) Past client references in similar industries.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are all training providers HRDF claimable?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No, only HRD Corp registered training providers offer HRDF-claimable courses. Always verify registration status before booking. All providers in our top 10 list are HRDF registered.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much do top training providers charge?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Top corporate training providers in Malaysia charge RM2,000-RM15,000 per day depending on topic, trainer seniority, and program complexity. Most offer HRDF-claimable programs.',
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
