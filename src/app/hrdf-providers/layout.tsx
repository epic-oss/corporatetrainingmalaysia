import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `HRDF Training Provider List Malaysia ${currentYear} | 100+ Registered Providers`,
  description: 'Browse the complete list of HRDF/HRD Corp registered training providers in Malaysia. Find HRDF-claimable courses, compare providers, and get free quotes.',
  keywords: 'hrdf training provider list, hrdf training provider list 2026, hrd corp registered training provider, hrdf claimable training provider, list of training provider under hrdf, hrdf training provider list pdf',
  openGraph: {
    title: `HRDF Training Provider List Malaysia ${currentYear} | 100+ Registered Providers`,
    description: 'Browse the complete list of HRDF/HRD Corp registered training providers in Malaysia. Find HRDF-claimable courses, compare providers, and get free quotes.',
    type: 'website',
  },
}

export default function HRDFProvidersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
