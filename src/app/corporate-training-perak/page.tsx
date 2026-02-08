import LocationPageContent from '@/components/LocationPageContent'

export const metadata = {
  title: 'Corporate Training Perak | HRDF Providers',
  description: 'Find affordable HRDF-approved corporate training providers in Perak. Compare SME development, manufacturing, and leadership trainers in Ipoh and beyond.',
  openGraph: {
    title: 'Corporate Training Providers in Perak',
    description: 'Find affordable HRDF-approved corporate training providers in Perak. Compare SME development, manufacturing, and leadership trainers.',
  },
}

export default function PerakTrainingPage() {
  return <LocationPageContent location="perak" />
}
