'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ProviderCard, useQuoteModal } from '@/components'
import { providers } from '@/lib/providers'
import { CATEGORIES } from '@/lib/constants'
import { getCurrentYear } from '@/lib/utils'

interface CategoryPageProps {
  params: { category: string }
}

const categoryExtendedDescriptions: Record<string, string> = {
  'leadership': 'Leadership training is essential for organizations looking to develop strong managers and executives. Our directory features Malaysia\'s top leadership development companies offering programs in executive coaching, strategic thinking, change management, and team leadership. Whether you\'re developing first-time managers or C-suite executives, find the right HRDF-approved provider here.',
  'sales': 'Sales training programs help your team close more deals and build stronger customer relationships. From consultative selling and negotiation skills to key account management, our listed providers offer comprehensive sales excellence programs. Many are HRDF-approved, making it easy to claim training grants for your sales team development.',
  'communication': 'Effective communication is the foundation of business success. Our directory lists top providers of business communication training in Malaysia, covering presentation skills, business writing, interpersonal communication, and public speaking. Find programs that transform your workforce into confident communicators.',
  'technical': 'Stay competitive with technical training programs that upskill your workforce in the latest technologies. From IT certifications and cloud computing to data analytics and cybersecurity, our listed providers offer cutting-edge technical training. Many are authorized partners of major technology companies.',
  'compliance': 'Compliance training is critical for risk management and regulatory adherence. Our directory features providers specializing in anti-corruption training, AML compliance, PDPA (data protection), corporate governance, and industry-specific regulations. Protect your organization with proper compliance education.',
  'soft-skills': 'Soft skills training develops the interpersonal abilities that drive workplace success. Our providers offer programs in emotional intelligence, time management, stress management, teamwork, and conflict resolution. These essential skills complement technical expertise and improve overall performance.',
  'team-building': 'Team building programs strengthen collaboration and trust among employees. From outdoor adventure activities to indoor workshops and virtual team building, our providers create memorable experiences that improve team dynamics. Perfect for department retreats and corporate events.',
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()

  const categoryData = CATEGORIES.find(c => c.slug === category)

  if (!categoryData) {
    notFound()
  }

  const categoryProviders = providers.filter(p =>
    p.specializations.some(s =>
      s.toLowerCase().includes(categoryData.slug.replace('-', ' ')) ||
      categoryData.slug.includes(s.toLowerCase().replace(' ', '-'))
    )
  )

  const extendedDescription = categoryExtendedDescriptions[category] || categoryData.description
  const uniqueLocations = Array.from(new Set(categoryProviders.map(p => p.location)))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{categoryData.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {categoryData.name} Providers Malaysia ({currentYear})
          </h1>
          <p className="text-primary-100 max-w-3xl">
            {categoryData.description}
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Extended Description */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-10 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            About {categoryData.name} in Malaysia
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {extendedDescription}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-primary-600">{categoryProviders.length}</p>
            <p className="text-gray-600 text-sm">Training Providers</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-hrdf">
              {categoryProviders.filter(p => p.hrdfApproved).length}
            </p>
            <p className="text-gray-600 text-sm">HRDF Approved</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-accent-600">
              {uniqueLocations.length}
            </p>
            <p className="text-gray-600 text-sm">Locations</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-primary-600">Free</p>
            <p className="text-gray-600 text-sm">Quote Requests</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent-600 rounded-xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              Find {categoryData.name} Providers
            </h2>
            <p className="text-accent-100">
              Get quotes from top-rated {categoryData.name.toLowerCase()} specialists in Malaysia
            </p>
          </div>
          <button
            onClick={() => openQuoteModal()}
            className="whitespace-nowrap bg-white text-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>

        {/* Providers Grid */}
        {categoryProviders.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {categoryData.name} Providers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onGetQuote={openQuoteModal}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No {categoryData.name.toLowerCase()} providers listed yet
            </h3>
            <p className="text-gray-600 mb-4">
              We&apos;re expanding our directory. Check back soon or view all providers.
            </p>
            <Link href="/providers" className="btn-primary">
              View All Providers
            </Link>
          </div>
        )}

        {/* Related Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Training Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.filter(c => c.slug !== category).map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}-training-malaysia`}
                className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-gray-900 hover:text-primary-600">
                  {cat.name}
                </span>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
