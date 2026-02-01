import { Metadata } from 'next'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

export const metadata: Metadata = {
  title: `How to Become HRDF Training Provider ${currentYear} | Registration Guide`,
  description: `Step-by-step guide to registering as HRD Corp training provider in Malaysia. Requirements, costs (RM500), process, and tips for HRDF trainer registration.`,
  keywords: [
    'how to become hrdf training provider',
    'hrdf training provider registration',
    'hrd corp training provider registration',
    'how to register as hrdf trainer',
    'e-tris training provider registration',
    'psmb trainer registration',
  ],
  openGraph: {
    title: `How to Become HRDF Training Provider ${currentYear}`,
    description: 'Complete guide to registering as HRD Corp certified training provider in Malaysia. Requirements, costs, and step-by-step process.',
  },
}

export default function BecomeHRDFProviderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Become HRDF Training Provider',
            description: 'Register as HRD Corp certified training provider in Malaysia',
            totalTime: 'P30D',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'MYR',
              value: '500',
            },
            step: [
              { '@type': 'HowToStep', name: 'Prepare Documents', text: 'Gather SSM, company profile, trainer CVs, TTT certificates' },
              { '@type': 'HowToStep', name: 'Register on e-TRIS', text: 'Create account and submit application on etris.hrdcorp.gov.my' },
              { '@type': 'HowToStep', name: 'Pay Fee', text: 'Pay RM500 registration fee' },
              { '@type': 'HowToStep', name: 'Verification', text: 'Wait for HRD Corp review (14-30 days)' },
              { '@type': 'HowToStep', name: 'Receive Approval', text: 'Get registration number and start registering trainers/courses' },
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
                name: 'How long does HRDF training provider registration take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The registration process takes 14-30 working days after submitting a complete application with payment. Delays occur if HRD Corp requests additional documents or conducts site verification.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the cost to register as HRDF training provider?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Training provider registration costs RM500 (one-time). Additionally, trainer registration is RM100 per trainer, and course registration is RM50 per course. Renewal after 3 years costs RM200.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need TTT certification to become HRDF trainer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, all trainers must complete an HRD Corp recognized Train-The-Trainer (TTT) program. TTT courses take 5 days and cost RM2,500-4,500.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can sole proprietors register as HRDF training provider?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, sole proprietors (Enterprise) can register, but Sdn Bhd companies are preferred. You must have valid SSM registration and meet all other requirements.',
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
