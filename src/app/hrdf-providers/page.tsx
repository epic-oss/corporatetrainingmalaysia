'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { ProviderCard, useQuoteModal } from '@/components'
import { getProviders, getProvidersCount } from '@/lib/supabase'
import { Provider, mapProvidersFromSupabase } from '@/lib/providers'
import { getCurrentYear } from '@/lib/utils'

const ITEMS_PER_PAGE = 24

// Quick filter options
const quickFilters = [
  { label: 'All Providers', value: '' },
  { label: 'Kuala Lumpur', value: 'Kuala Lumpur', type: 'location' },
  { label: 'Selangor', value: 'Selangor', type: 'location' },
  { label: 'Penang', value: 'Penang', type: 'location' },
  { label: 'Leadership', value: 'Leadership', type: 'specialization' },
  { label: 'AI Training', value: 'AI', type: 'specialization' },
  { label: 'Team Building', value: 'Team Building', type: 'specialization' },
]

// Sort options
const sortOptions = [
  { label: 'Rating (High to Low)', value: 'rating-desc' },
  { label: 'Rating (Low to High)', value: 'rating-asc' },
  { label: 'Name (A-Z)', value: 'name-asc' },
  { label: 'Name (Z-A)', value: 'name-desc' },
  { label: 'Reviews (Most)', value: 'reviews-desc' },
]

// FAQs for schema markup
const faqs = [
  {
    question: 'How do I find HRDF registered training providers?',
    answer: 'You can browse our directory above which lists 100+ HRD Corp registered training providers in Malaysia. Filter by location, training type, or specialization to find the right provider for your needs.',
  },
  {
    question: 'Is there an official HRDF training provider list PDF?',
    answer: "HRD Corp maintains a list of registered providers on the e-TRIS portal. However, our directory provides an easier way to search, filter, and compare providers with ratings and reviews.",
  },
  {
    question: 'How do I verify if a provider is HRDF registered?',
    answer: 'You can verify registration status on the HRD Corp e-TRIS portal or ask the provider directly for their HRD Corp registration number. All providers in our directory are verified as registered.',
  },
  {
    question: 'What training courses are HRDF claimable?',
    answer: 'Most professional development courses are claimable including leadership, management, technical skills, soft skills, digital marketing, cybersecurity, AI training, and industry-specific programs. The course must be conducted by a registered provider.',
  },
  {
    question: 'How much can I claim from HRDF per training?',
    answer: 'Claim limits depend on training type: Public programs up to RM8,000/day, in-house training RM3,000-5,000/day, online training RM1,000/day. Use our HRDF Calculator for exact estimates.',
  },
  {
    question: 'Can SMEs claim HRDF training?',
    answer: 'Yes, SMEs registered with HRD Corp can claim training costs. Companies with 5-9 employees can register voluntarily, while those with 10+ employees must register mandatorily.',
  },
  {
    question: 'What is the difference between HRDF and HRD Corp?',
    answer: "HRDF (Human Resources Development Fund) was rebranded to HRD Corp (Human Resource Development Corporation) in 2021. They are the same organization - many people still use 'HRDF' when searching.",
  },
  {
    question: 'How long does HRDF claim approval take?',
    answer: 'Grant applications should be submitted 30 days before training. After training completion, claims are typically processed within 14-30 working days.',
  },
]

export default function HRDFProvidersPage() {
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()
  const [providers, setProviders] = useState<Provider[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState<{ value: string; type?: string } | null>(null)
  const [sortBy, setSortBy] = useState('rating-desc')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Fetch providers
  useEffect(() => {
    async function fetchProviders() {
      setIsLoading(true)

      const options: {
        hrdfApproved: boolean
        location?: string
        specialization?: string
        limit: number
        offset: number
      } = {
        hrdfApproved: true,
        limit: ITEMS_PER_PAGE,
        offset: (currentPage - 1) * ITEMS_PER_PAGE,
      }

      if (activeFilter?.type === 'location') {
        options.location = activeFilter.value
      } else if (activeFilter?.type === 'specialization') {
        options.specialization = activeFilter.value
      }

      const [data, count] = await Promise.all([
        getProviders(options),
        getProvidersCount({
          hrdfApproved: true,
          location: activeFilter?.type === 'location' ? activeFilter.value : undefined,
          specialization: activeFilter?.type === 'specialization' ? activeFilter.value : undefined,
        }),
      ])

      setProviders(mapProvidersFromSupabase(data))
      setTotalCount(count)
      setIsLoading(false)
    }

    fetchProviders()
  }, [currentPage, activeFilter])

  // Sort providers client-side
  const sortedProviders = useMemo(() => {
    const sorted = [...providers]
    switch (sortBy) {
      case 'rating-desc':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case 'rating-asc':
        return sorted.sort((a, b) => (a.rating || 0) - (b.rating || 0))
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      case 'reviews-desc':
        return sorted.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
      default:
        return sorted
    }
  }, [providers, sortBy])

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

  const handleFilterChange = (filter: { value: string; type?: string } | null) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  // FAQ Schema markup
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container-custom">
            <nav className="flex items-center text-sm text-slate-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">HRDF Providers</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              HRDF Training Provider List Malaysia ({currentYear})
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mb-8">
              Browse 100+ HRD Corp registered training providers. Find HRDF-claimable courses for your team.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400">109+</div>
                <div className="text-sm text-slate-400">Training Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400">100%</div>
                <div className="text-sm text-slate-400">HRDF Claimable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400">Free</div>
                <div className="text-sm text-slate-400">Quotes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container-custom py-12">
          {/* Quick Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {quickFilters.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => handleFilterChange(filter.value ? { value: filter.value, type: filter.type } : null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (activeFilter?.value === filter.value) || (!activeFilter && !filter.value)
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-600 hover:text-primary-600'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <p className="text-gray-600">
              {isLoading ? 'Loading...' : `Showing ${sortedProviders.length} of ${totalCount} HRDF-registered providers`}
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Provider Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
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
          ) : sortedProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {sortedProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onGetQuote={openQuoteModal}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl mb-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or view all providers.</p>
              <button
                onClick={() => handleFilterChange(null)}
                className="btn-primary"
              >
                View All Providers
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mb-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1
                // Show first, last, current, and adjacent pages
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-primary-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  )
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2 py-2">...</span>
                }
                return null
              })}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}

          {/* What is HRDF Section */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is HRDF / HRD Corp?</h2>
            <p className="text-gray-700 mb-6">
              HRDF (Human Resources Development Fund), now known as HRD Corp, is Malaysia&apos;s government agency
              that collects levies from employers to fund employee training. Companies with 10+ Malaysian employees
              must register and contribute 1% of monthly wages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Using HRDF-Registered Providers</h3>
            <ul className="space-y-2 mb-6">
              {[
                'Claim back training costs from your levy balance',
                'Quality-assured training programs',
                'Certified trainers with industry experience',
                'Wide range of claimable courses',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Claim Section */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Claim HRDF Training</h2>
            <ol className="space-y-4 mb-8">
              {[
                { title: 'Check your levy balance', desc: 'Log in to e-TRIS portal' },
                { title: 'Choose a registered provider', desc: 'Use our directory above' },
                { title: 'Submit grant application', desc: '30 days before training' },
                { title: 'Attend training', desc: 'Complete the program' },
                { title: 'Submit claim', desc: 'Within 6 months of completion' },
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">{step.title}</strong>
                    <span className="text-gray-600"> - {step.desc}</span>
                  </div>
                </li>
              ))}
            </ol>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-700 font-medium">Not sure how much you can claim?</p>
              <Link
                href="/tools/hrdf-calculator"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Use HRDF Calculator
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-primary-600 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Find Your Training Provider?
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Get free quotes from multiple HRDF-registered providers. Compare prices, reviews, and specializations.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quotes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
