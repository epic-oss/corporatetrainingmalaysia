import { Metadata } from 'next'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

export const metadata: Metadata = {
  title: `Corporate Training Cost Malaysia ${currentYear} - Price Guide & HRDF Claims`,
  description: `How much does corporate training cost in Malaysia? Prices range from RM2,000-RM15,000/day. Compare leadership, team building, and technical training costs. HRDF claimable.`,
  keywords: [
    'corporate training cost malaysia',
    'training price malaysia',
    'hrdf training cost',
    'leadership training cost malaysia',
    'team building cost malaysia',
    'how much corporate training malaysia',
  ],
  openGraph: {
    title: `Corporate Training Cost Malaysia ${currentYear} - Complete Price Guide`,
    description: 'Corporate training in Malaysia costs RM2,000-RM15,000 per day. Get the complete pricing breakdown by training type.',
  },
}

export default function CorporateTrainingCostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
