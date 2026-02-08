import LocationPageContent from '@/components/LocationPageContent'

export const metadata = {
  title: 'Corporate Training Melaka | HRDF Providers',
  description: 'Find HRDF-approved corporate training providers in Melaka. Compare hospitality, tourism, customer service, and team building trainers. Get free quotes today.',
  openGraph: {
    title: 'Corporate Training Providers in Melaka',
    description: 'Find HRDF-approved corporate training providers in Melaka. Compare hospitality, tourism, customer service, and team building trainers.',
  },
}

export default function MelakaTrainingPage() {
  return <LocationPageContent location="melaka" />
}
