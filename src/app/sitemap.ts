import { MetadataRoute } from 'next'
import { getAllProviderSlugs } from '@/lib/supabase'
import { LOCATIONS, CATEGORIES, SITE_URL } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL

  // Fetch provider slugs from Supabase
  const providerSlugs = await getAllProviderSlugs()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/providers`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hrdf-training-providers-malaysia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/for-providers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/become-hrdf-provider`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/top-training-providers-malaysia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Provider pages
  const providerPages: MetadataRoute.Sitemap = providerSlugs.map((slug) => ({
    url: `${baseUrl}/providers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Location pages
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${baseUrl}/corporate-training-${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${baseUrl}/${category.slug}-training-malaysia`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...providerPages,
    ...locationPages,
    ...categoryPages,
  ]
}
