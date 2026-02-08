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
    slug: 'leadership-training',
    description: 'Develop effective leaders with executive coaching, management skills, and leadership development programs.'
  },
  {
    name: 'Sales Training',
    slug: 'sales-training',
    description: 'Boost your sales team performance with negotiation skills, closing techniques, and customer relationship training.'
  },
  {
    name: 'Communication Training',
    slug: 'communication-training',
    description: 'Enhance workplace communication with presentation skills, business writing, and interpersonal communication programs.'
  },
  {
    name: 'Digital Skills Training',
    slug: 'digital-skills-training',
    description: 'Upskill your workforce with IT training, data analytics, and digital tools certification programs.'
  },
  {
    name: 'Safety & Compliance Training',
    slug: 'safety-compliance-training',
    description: 'Ensure regulatory compliance with workplace safety, data protection, and industry-specific compliance training.'
  },
  {
    name: 'Soft Skills Training',
    slug: 'soft-skills-training',
    description: 'Build essential workplace skills including time management, emotional intelligence, and teamwork.'
  },
  {
    name: 'Team Building',
    slug: 'team-building',
    description: 'Strengthen team cohesion with outdoor activities, workshops, and collaborative exercises.'
  },
] as const

export const TRAINING_TYPES = [
  // Core categories
  'Leadership Training',
  'Management Training',
  'Sales Training',
  'Communication Skills',
  'Soft Skills',
  'Team Building',
  'HR Training',
  // Trending 2026
  'AI & Prompt Engineering',
  'Data Analytics & Power BI',
  'Digital Marketing',
  'Cybersecurity',
  'Agile & Scrum',
  'Financial Modelling',
  'ESG & Sustainability',
  // Technical/Compliance
  'Safety & Compliance',
  'Technical Training',
  'Industry-Specific',
  'Other',
] as const

export const PRICE_RANGES = [
  { value: 'budget', label: 'Budget-Friendly', description: 'Below RM5,000' },
  { value: 'mid-range', label: 'Mid-Range', description: 'RM5,000 - RM15,000' },
  { value: 'premium', label: 'Premium', description: 'Above RM15,000' },
] as const

export const PARTICIPANT_RANGES = [
  '1-10 pax',
  '11-30 pax',
  '31-50 pax',
  '51-100 pax',
  '100+ pax',
] as const

export const BUDGET_RANGES = [
  'Below RM5,000',
  'RM5,000 - RM10,000',
  'RM10,000 - RM20,000',
  'RM20,000 - RM50,000',
  'Above RM50,000',
  'Not sure yet',
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
