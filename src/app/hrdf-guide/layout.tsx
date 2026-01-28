import { Metadata } from 'next'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

export const metadata: Metadata = {
  title: `HRDF Guide Malaysia ${currentYear} - How to Claim HRD Corp Training`,
  description: `Complete HRDF guide for Malaysian companies. Learn how to register, calculate levy (1% of wages), and claim training costs step by step. HRD Corp explained.`,
  keywords: [
    'hrdf malaysia',
    'hrdf claim',
    'how to claim hrdf',
    'hrd corp malaysia',
    'hrdf levy calculator',
    'hrdf training claim',
    'hrdf registration',
    'what is hrdf',
  ],
  openGraph: {
    title: `Complete HRDF Guide Malaysia ${currentYear}`,
    description: 'Everything you need to know about HRDF/HRD Corp. Learn to register, calculate levy, and claim training costs.',
  },
}

export default function HRDFGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
