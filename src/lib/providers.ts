import { ProviderCorporate } from './supabase'

// Provider interface for UI components (maintains backward compatibility)
export interface Provider {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  location: string
  specializations: string[]
  hrdfApproved: boolean
  priceRange: 'budget' | 'mid-range' | 'premium'
  phone: string
  email: string
  website: string
  image: string
  rating: number
  featured: boolean
  reviewCount: number
  address: string
  city: string
  verified: boolean
}

// Map location slug to display name
export const locationMap: Record<string, string> = {
  'kuala-lumpur': 'Kuala Lumpur',
  'selangor': 'Selangor',
  'penang': 'Penang',
  'johor': 'Johor',
  'perak': 'Perak',
  'melaka': 'Melaka',
  'negeri-sembilan': 'Negeri Sembilan',
  'pahang': 'Pahang',
  'kedah': 'Kedah',
  'kelantan': 'Kelantan',
  'terengganu': 'Terengganu',
  'sabah': 'Sabah',
  'sarawak': 'Sarawak',
  'perlis': 'Perlis',
  'putrajaya': 'Putrajaya',
  'labuan': 'Labuan',
}

// Convert Supabase provider to UI provider format
export function mapProviderFromSupabase(provider: ProviderCorporate): Provider {
  return {
    id: provider.id,
    slug: provider.slug,
    name: provider.name,
    tagline: provider.description?.substring(0, 100) + '...' || '',
    description: provider.description || '',
    location: locationMap[provider.location] || provider.location,
    specializations: provider.specializations || [],
    hrdfApproved: provider.hrdf_approved,
    priceRange: provider.price_range || 'mid-range',
    phone: provider.phone || '',
    email: provider.email || '',
    website: provider.website || '',
    image: provider.image || '/images/placeholder-provider.jpg',
    rating: provider.rating || 0,
    featured: provider.featured,
    reviewCount: provider.review_count || 0,
    address: provider.address || '',
    city: provider.city || '',
    verified: provider.verified,
  }
}

// Convert array of Supabase providers
export function mapProvidersFromSupabase(providers: ProviderCorporate[]): Provider[] {
  return providers.map(mapProviderFromSupabase)
}

// Legacy static providers array (kept for fallback/testing)
export const staticProviders: Provider[] = []
