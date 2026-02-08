import LocationPageContent from '@/components/LocationPageContent'

export const metadata = {
  title: 'Corporate Training Selangor | HRDF Providers',
  description: 'Find the best HRDF-approved corporate training providers in Selangor. Compare trainers in Petaling Jaya, Shah Alam, and Subang Jaya. Get free quotes today.',
  openGraph: {
    title: 'Corporate Training Providers in Selangor',
    description: 'Find the best HRDF-approved corporate training providers in Selangor. Compare trainers in Petaling Jaya, Shah Alam, and Subang Jaya.',
  },
}

export default function SelangorTrainingPage() {
  return <LocationPageContent location="selangor" />
}
