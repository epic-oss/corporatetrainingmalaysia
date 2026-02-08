import LocationPageContent from '@/components/LocationPageContent'

export const metadata = {
  title: 'Corporate Training Johor | HRDF Providers',
  description: 'Find the best HRDF-approved corporate training providers in Johor Bahru and Iskandar Malaysia. Compare trainers serving Malaysian and Singaporean companies.',
  openGraph: {
    title: 'Corporate Training Providers in Johor',
    description: 'Find the best HRDF-approved corporate training providers in Johor Bahru and Iskandar Malaysia.',
  },
}

export default function JohorTrainingPage() {
  return <LocationPageContent location="johor" />
}
