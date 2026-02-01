import { Metadata } from 'next'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

export const metadata: Metadata = {
  title: `Corporate Training Cost Malaysia ${currentYear} | RM2,000-RM15,000/Day`,
  description: `How much does corporate training cost in Malaysia? Prices range from RM2,000-RM15,000 per day. See cost breakdown by training type, location, and HRDF claimable amounts.`,
  keywords: [
    'corporate training cost malaysia',
    'training cost per pax malaysia',
    'hrdf training cost',
    'corporate trainer rates malaysia',
    'team building cost malaysia',
    'leadership training cost malaysia',
    'how much corporate training',
  ],
  openGraph: {
    title: `Corporate Training Cost Malaysia ${currentYear} | RM2,000-RM15,000/Day`,
    description: 'How much does corporate training cost in Malaysia? Prices range from RM2,000-RM15,000 per day. Complete pricing guide with HRDF claim info.',
  },
}

export default function CorporateTrainingCostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
