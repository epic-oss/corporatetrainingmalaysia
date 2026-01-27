import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create client only if credentials are available
let supabase: SupabaseClient | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

// Helper to check if Supabase is configured
function getSupabase() {
  if (!supabase) {
    console.warn('Supabase not configured - missing environment variables')
    return null
  }
  return supabase
}

// Types for providers_corporate table
export interface ProviderCorporate {
  id: string
  slug: string
  name: string
  description: string | null
  location: string
  address: string | null
  city: string | null
  phone: string | null
  email: string | null
  website: string | null
  image: string | null
  rating: number | null
  review_count: number | null
  specializations: string[] | null
  hrdf_approved: boolean
  price_range: 'budget' | 'mid-range' | 'premium' | null
  featured: boolean
  verified: boolean
  claimed: boolean
  created_at: string
  updated_at: string
}

// Fetch all providers with optional filters
export async function getProviders(options?: {
  location?: string
  specialization?: string
  hrdfApproved?: boolean
  priceRange?: string
  featured?: boolean
  limit?: number
  offset?: number
}) {
  const client = getSupabase()
  if (!client) return []

  let query = client
    .from('providers_corporate')
    .select('*')
    .order('featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (options?.location) {
    query = query.eq('location', options.location)
  }

  if (options?.specialization) {
    query = query.contains('specializations', [options.specialization])
  }

  if (options?.hrdfApproved) {
    query = query.eq('hrdf_approved', true)
  }

  if (options?.priceRange) {
    query = query.eq('price_range', options.priceRange)
  }

  if (options?.featured) {
    query = query.eq('featured', true)
  }

  // Handle pagination - use range for both limit and offset
  if (options?.limit !== undefined || options?.offset !== undefined) {
    const limit = options?.limit ?? 1000
    const offset = options?.offset ?? 0
    query = query.range(offset, offset + limit - 1)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching providers:', error)
    return []
  }

  return data as ProviderCorporate[]
}

// Fetch a single provider by slug
export async function getProviderBySlug(slug: string) {
  const client = getSupabase()
  if (!client) return null

  const { data, error } = await client
    .from('providers_corporate')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching provider:', error)
    return null
  }

  return data as ProviderCorporate
}

// Fetch providers by location
export async function getProvidersByLocation(location: string) {
  const client = getSupabase()
  if (!client) return []

  const { data, error } = await client
    .from('providers_corporate')
    .select('*')
    .eq('location', location)
    .order('featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (error) {
    console.error('Error fetching providers by location:', error)
    return []
  }

  return data as ProviderCorporate[]
}

// Fetch HRDF-approved providers
export async function getHRDFProviders() {
  const client = getSupabase()
  if (!client) return []

  const { data, error } = await client
    .from('providers_corporate')
    .select('*')
    .eq('hrdf_approved', true)
    .order('featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (error) {
    console.error('Error fetching HRDF providers:', error)
    return []
  }

  return data as ProviderCorporate[]
}

// Fetch featured providers
export async function getFeaturedProviders(limit: number = 6) {
  const client = getSupabase()
  if (!client) return []

  const { data, error } = await client
    .from('providers_corporate')
    .select('*')
    .eq('featured', true)
    .order('rating', { ascending: false, nullsFirst: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching featured providers:', error)
    return []
  }

  return data as ProviderCorporate[]
}

// Fetch providers by specialization
export async function getProvidersBySpecialization(specialization: string) {
  const client = getSupabase()
  if (!client) return []

  const { data, error } = await client
    .from('providers_corporate')
    .select('*')
    .contains('specializations', [specialization])
    .order('featured', { ascending: false })
    .order('rating', { ascending: false, nullsFirst: false })

  if (error) {
    console.error('Error fetching providers by specialization:', error)
    return []
  }

  return data as ProviderCorporate[]
}

// Get all provider slugs for sitemap generation
export async function getAllProviderSlugs() {
  const client = getSupabase()
  if (!client) return []

  const { data, error } = await client
    .from('providers_corporate')
    .select('slug')
    .order('slug')

  if (error) {
    console.error('Error fetching provider slugs:', error)
    return []
  }

  return data.map(p => p.slug)
}

// Get total count for pagination
export async function getProvidersCount(options?: {
  location?: string
  specialization?: string
  hrdfApproved?: boolean
  priceRange?: string
}) {
  const client = getSupabase()
  if (!client) return 0

  let query = client
    .from('providers_corporate')
    .select('id', { count: 'exact', head: true })

  if (options?.location) {
    query = query.eq('location', options.location)
  }

  if (options?.specialization) {
    query = query.contains('specializations', [options.specialization])
  }

  if (options?.hrdfApproved) {
    query = query.eq('hrdf_approved', true)
  }

  if (options?.priceRange) {
    query = query.eq('price_range', options.priceRange)
  }

  const { count, error } = await query

  if (error) {
    console.error('Error fetching provider count:', error)
    return 0
  }

  return count || 0
}
