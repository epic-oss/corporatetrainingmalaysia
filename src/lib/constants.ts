export const SITE_NAME = 'CorporateTrainingMY'
export const SITE_URL = 'https://corporatetrainingmalaysia.com'

export const LOCATIONS = [
  { name: 'Kuala Lumpur', slug: 'kuala-lumpur', shortName: 'KL' },
  { name: 'Selangor', slug: 'selangor', shortName: 'Selangor' },
  { name: 'Penang', slug: 'penang', shortName: 'Penang' },
  { name: 'Johor', slug: 'johor', shortName: 'Johor' },
  { name: 'Perak', slug: 'perak', shortName: 'Perak' },
  { name: 'Melaka', slug: 'melaka', shortName: 'Melaka' },
] as const

export const CATEGORIES = [
  {
    name: 'Leadership Training',
    slug: 'leadership',
    description: 'Develop effective leaders with executive coaching, management skills, and leadership development programs.'
  },
  {
    name: 'Sales Training',
    slug: 'sales',
    description: 'Boost your sales team performance with negotiation skills, closing techniques, and customer relationship training.'
  },
  {
    name: 'Communication Training',
    slug: 'communication',
    description: 'Enhance workplace communication with presentation skills, business writing, and interpersonal communication programs.'
  },
  {
    name: 'Technical Training',
    slug: 'technical',
    description: 'Upskill your workforce with IT training, software development, and technical certification programs.'
  },
  {
    name: 'Compliance Training',
    slug: 'compliance',
    description: 'Ensure regulatory compliance with anti-corruption, data protection, and industry-specific compliance training.'
  },
  {
    name: 'Soft Skills Training',
    slug: 'soft-skills',
    description: 'Build essential workplace skills including time management, emotional intelligence, and teamwork.'
  },
  {
    name: 'Team Building',
    slug: 'team-building',
    description: 'Strengthen team cohesion with outdoor activities, workshops, and collaborative exercises.'
  },
] as const

export const TRAINING_TYPES = [
  'Leadership',
  'Sales',
  'Communication',
  'Technical',
  'Compliance',
  'Team Building',
  'Soft Skills',
  'Industry-Specific',
] as const

export const PRICE_RANGES = [
  { value: 'budget', label: 'Budget-Friendly', description: 'Below RM5,000' },
  { value: 'mid-range', label: 'Mid-Range', description: 'RM5,000 - RM15,000' },
  { value: 'premium', label: 'Premium', description: 'Above RM15,000' },
] as const

export const PARTICIPANT_RANGES = [
  '10-20',
  '21-50',
  '51-100',
  '100+',
] as const

export const BUDGET_RANGES = [
  'Below RM5,000',
  'RM5,000 - RM15,000',
  'RM15,000 - RM30,000',
  'Above RM30,000',
] as const

export const ALL_STATES = [
  'Kuala Lumpur',
  'Selangor',
  'Penang',
  'Johor',
  'Perak',
  'Melaka',
  'Negeri Sembilan',
  'Pahang',
  'Kedah',
  'Kelantan',
  'Terengganu',
  'Sabah',
  'Sarawak',
  'Perlis',
  'Putrajaya',
  'Labuan',
] as const

export const STATS = {
  providers: '200+',
  categories: '50+',
  quotes: 'Free Quotes',
} as const
