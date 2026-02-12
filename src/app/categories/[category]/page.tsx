'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ProviderCard, useQuoteModal } from '@/components'
import SchemaMarkup, { generateFAQSchema } from '@/components/SchemaMarkup'
import ExploreMore from '@/components/ExploreMore'
import { getProvidersBySpecialization } from '@/lib/supabase'
import { Provider, mapProvidersFromSupabase } from '@/lib/providers'
import { getCurrentYear, processTemplateVariables } from '@/lib/utils'
import { categories, CategoryContent } from '@/content/categories'

interface CategoryPageProps {
  params: { category: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()
  const [providers, setProviders] = useState<Provider[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const categoryContent = categories[categorySlug] as CategoryContent | undefined

  useEffect(() => {
    async function fetchProviders() {
      if (!categoryContent) return
      setIsLoading(true)
      const data = await getProvidersBySpecialization(categoryContent.dbValue)
      setProviders(mapProvidersFromSupabase(data))
      setIsLoading(false)
    }
    fetchProviders()
  }, [categorySlug, categoryContent])

  if (!categoryContent) {
    notFound()
  }

  const heading = processTemplateVariables(categoryContent.heading)

  // Generate FAQ schema for AI discovery
  const faqSchema = categoryContent.faqs.length > 0
    ? generateFAQSchema(categoryContent.faqs)
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* FAQ Schema for AI Discovery */}
      {faqSchema && <SchemaMarkup schema={faqSchema} />}

      {/* Hero Section */}
      <div className="bg-primary-600 py-12 md:py-16">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/providers" className="hover:text-white">Providers</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{categoryContent.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {heading}
          </h1>

          <p className="text-lg text-primary-100 max-w-3xl mb-6">
            {categoryContent.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors"
            >
              Get Free Quotes
            </button>
            <Link
              href="/providers"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Providers
            </Link>
          </div>
        </div>
      </div>

      {/* At a Glance Summary - AI Optimized */}
      <div className="container-custom py-8">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {categoryContent.name} in Malaysia - At a Glance
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">•</span>
              <span><strong>Average Cost:</strong> RM3,000-RM10,000 per day</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">•</span>
              <span><strong>Providers:</strong> {providers.length}+ in our directory</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">•</span>
              <span><strong>HRDF Claimable:</strong> Yes, up to RM8,000/day</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">•</span>
              <span><strong>Popular Locations:</strong> Kuala Lumpur, Selangor, Penang</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">•</span>
              <span><strong>Typical Duration:</strong> 1-3 days</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">•</span>
              <span><strong>Group Size:</strong> 10-30 participants</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Provider Count */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLoading ? 'Loading...' : `Showing ${providers.length} providers offering ${categoryContent.name}`}
          </h2>
          <button
            onClick={() => openQuoteModal()}
            className="hidden md:block bg-accent-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-700 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>

        {/* Providers Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : providers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {providers.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onGetQuote={openQuoteModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl mb-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found for {categoryContent.name}</h3>
            <p className="text-gray-600 mb-6">We&apos;re expanding our network. Check back soon or browse all providers.</p>
            <Link href="/providers" className="btn-primary inline-block">
              View All Providers
            </Link>
          </div>
        )}

        {/* What You'll Learn Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What You&apos;ll Learn
            </h2>
            <ul className="space-y-3">
              {categoryContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Who Should Attend
            </h2>
            <p className="text-gray-700 mb-6">
              {categoryContent.targetAudience}
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Request Customized Quote
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        {categoryContent.faqs.length > 0 && (
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About {categoryContent.name}
            </h2>
            <div className="space-y-6">
              {categoryContent.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Free Quotes for {categoryContent.name}
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Compare quotes from verified {categoryContent.name.toLowerCase()} providers in Malaysia.
            Tell us your requirements and receive customized proposals within 24 hours.
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Request Free Quotes Now
          </button>
        </div>

        {/* Other Categories */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Other Training Categories</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(categories)
              .filter(([slug]) => slug !== categorySlug)
              .map(([slug, cat]) => (
                <Link
                  key={slug}
                  href={`/categories/${slug}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
          </div>
        </div>

        <ExploreMore currentPath={`/categories/${categorySlug}`} showCategories={false} />
      </div>
    </div>
  )
}
