'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ProviderCard, StatsBar, useQuoteModal } from '@/components'
import FactCard from '@/components/FactCard'
import { CATEGORIES, LOCATIONS, ALL_STATES, TRAINING_TYPES } from '@/lib/constants'
import { getFeaturedProviders } from '@/lib/supabase'
import { Provider, mapProvidersFromSupabase } from '@/lib/providers'
import { getCurrentYear } from '@/lib/utils'

export default function HomePage() {
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [featuredProviders, setFeaturedProviders] = useState<Provider[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedProviders() {
      setIsLoading(true)
      const data = await getFeaturedProviders(6)
      setFeaturedProviders(mapProvidersFromSupabase(data))
      setIsLoading(false)
    }
    fetchFeaturedProviders()
  }, [])

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedLocation) params.set('location', selectedLocation)
    if (selectedType) params.set('type', selectedType)
    window.location.href = `/providers${params.toString() ? `?${params.toString()}` : ''}`
  }

  return (
    <>
      {/* FAQ Schema for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much does corporate training cost in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Corporate training in Malaysia typically costs RM2,000-RM15,000 per day depending on the program type, trainer expertise, and group size. HRDF-registered companies can claim back these training costs through their levy contributions.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is HRDF claimable training?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HRDF (now HRD Corp) allows Malaysian companies with 10+ employees to claim back training costs. Companies contribute 1% of employee wages as levy and can claim up to 100% for approved training programs from registered providers.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many corporate training providers are in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'There are over 1,000 HRD Corp registered training providers in Malaysia. CorporateTrainingMY.com lists 109+ verified providers across Kuala Lumpur, Selangor, Penang, Johor and other states.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the most popular corporate training programs in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The most in-demand corporate training in Malaysia includes: Leadership Training, Digital Marketing, AI & Prompt Engineering, Data Analytics & Power BI, Cybersecurity, and Team Building programs.',
                },
              },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Find Corporate Training Providers in Malaysia ({currentYear})
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8">
              Compare HRDF-approved trainers, leadership coaches, and skills development companies
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-left text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-gray-900"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    {ALL_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-left text-sm font-medium text-gray-700 mb-1">
                    Training Type
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-gray-900"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">All Training Types</option>
                    {TRAINING_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    className="w-full md:w-auto btn-primary flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={() => openQuoteModal()}
                className="btn-accent text-lg px-8 py-4"
              >
                Get Free Quotes
              </button>
              <p className="text-primary-200 text-sm mt-3">
                No obligation. Connect with multiple providers instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Quick Facts Section - AI Optimized */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Corporate Training Malaysia: Quick Facts ({currentYear})</h2>
            <p className="section-subheading">
              Everything you need to know about corporate training in Malaysia
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <FactCard
              question="How much does corporate training cost in Malaysia?"
              answer="Corporate training in Malaysia typically costs RM2,000-RM15,000 per day depending on the program type, trainer expertise, and group size. HRDF-registered companies can claim back these training costs through their levy contributions."
            />
            <FactCard
              question="What is HRDF claimable training?"
              answer="HRDF (now HRD Corp) allows Malaysian companies with 10+ employees to claim back training costs. Companies contribute 1% of employee wages as levy and can claim up to 100% for approved training programs from registered providers."
            />
            <FactCard
              question="How many corporate training providers are in Malaysia?"
              answer="There are over 1,000 HRD Corp registered training providers in Malaysia. CorporateTrainingMY.com lists 109+ verified providers across Kuala Lumpur, Selangor, Penang, Johor and other states."
            />
            <FactCard
              question="What are the most popular corporate training programs?"
              answer="The most in-demand corporate training in Malaysia includes: Leadership Training, Digital Marketing, AI & Prompt Engineering, Data Analytics & Power BI, Cybersecurity, and Team Building programs."
            />
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Featured Training Providers</h2>
            <p className="section-subheading">
              Top-rated corporate training companies in Malaysia
            </p>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onGetQuote={openQuoteModal}
                />
              ))}
            </div>
          )}
          <div className="text-center mt-10">
            <Link href="/providers" className="btn-outline">
              View All Providers
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Browse by Category</h2>
            <p className="section-subheading">
              Find training providers by specialization
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="card p-6 hover:border-primary-200 border border-transparent transition-all group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-200 transition-colors">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Location */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Browse by Location</h2>
            <p className="section-subheading">
              Find corporate training providers near you
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/corporate-training-${location.slug}`}
                className="card p-6 text-center hover:border-primary-200 border border-transparent transition-all group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {location.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Our Directory */}
      <section className="py-16 md:py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Use Our Directory?</h2>
            <p className="section-subheading">
              The easiest way to find corporate training in Malaysia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Providers</h3>
              <p className="text-gray-600 text-sm">
                All training companies are reviewed and verified for quality
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hrdf-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-hrdf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">HRDF Approved</h3>
              <p className="text-gray-600 text-sm">
                Filter for HRDF-claimable training programs instantly
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Quotes</h3>
              <p className="text-gray-600 text-sm">
                Get competitive quotes from multiple providers at no cost
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">
                Providers respond within 24 hours of your inquiry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Training Provider?
          </h2>
          <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us your training needs and we&apos;ll connect you with the best providers in Malaysia
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes Now
          </button>
        </div>
      </section>
    </>
  )
}
