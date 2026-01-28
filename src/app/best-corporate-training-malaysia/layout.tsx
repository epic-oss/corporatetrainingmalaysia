import { Metadata } from 'next'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

export const metadata: Metadata = {
  title: `Best Corporate Training Companies Malaysia ${currentYear} - Top Providers`,
  description: `Find the best corporate training companies in Malaysia. Compare 109+ HRDF-approved providers for leadership, team building, and soft skills training. Get free quotes.`,
  keywords: [
    'best corporate training malaysia',
    'top training companies malaysia',
    'corporate training provider malaysia',
    'hrdf training company',
    'best leadership training malaysia',
    'corporate trainer malaysia',
  ],
  openGraph: {
    title: `Best Corporate Training Companies Malaysia ${currentYear}`,
    description: 'Compare 109+ HRDF-approved corporate training providers in Malaysia. Find leadership, team building, and technical training companies.',
  },
}

export default function BestCorporateTrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* FAQ Schema for Best Providers Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What are the best corporate training companies in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The best corporate training companies in Malaysia include HRDF-registered providers specializing in leadership, soft skills, and technical training. Top providers are selected based on HRD Corp registration, 5+ years experience, client portfolio, certified trainers, and customizable programs.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I choose a corporate training provider in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Choose a provider based on: 1) HRDF registration for claimable training, 2) Relevant industry experience, 3) Trainer credentials and certifications, 4) Client testimonials and track record, 5) Customization options for your specific needs.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many corporate training providers are there in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'There are over 1,000 HRD Corp registered training providers in Malaysia. CorporateTrainingMY.com lists 109+ verified providers across Kuala Lumpur, Selangor, Penang, Johor, and other states.',
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
