'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ProviderCard, useQuoteModal } from '@/components'
import { providers } from '@/lib/providers'
import { LOCATIONS } from '@/lib/constants'
import { getCurrentYear } from '@/lib/utils'

interface LocationPageProps {
  params: { location: string }
}

const locationDescriptions: Record<string, string> = {
  'kuala-lumpur': 'Kuala Lumpur, the capital city of Malaysia, is home to the country\'s leading corporate training providers. From world-class leadership development programs in KLCC to specialized technical training in Bangsar, KL offers the most diverse selection of HRDF-approved training companies in the nation.',
  'selangor': 'Selangor, Malaysia\'s most developed state, hosts numerous corporate training facilities in areas like Petaling Jaya, Shah Alam, and Subang Jaya. The state\'s strategic location and excellent infrastructure make it a hub for training providers serving the Greater Klang Valley region.',
  'penang': 'Penang is a key industrial hub in Northern Malaysia, with corporate training providers specializing in manufacturing, electronics, and technical skills. The state\'s thriving business community benefits from world-class training facilities in George Town and Bayan Lepas.',
  'johor': 'Johor Bahru and the Iskandar Malaysia economic zone are home to growing number of corporate training providers. The state\'s proximity to Singapore and diverse industrial base creates unique demand for cross-cultural and regional training programs.',
  'perak': 'Perak, with Ipoh as its capital, offers accessible and affordable corporate training options for businesses in the northern corridor. Local training providers understand the unique needs of regional SMEs and manufacturing sectors.',
  'melaka': 'Melaka, the historical trading port, now hosts training providers specializing in hospitality, tourism, and customer service. The state\'s unique heritage makes it an ideal location for experiential learning and team building programs.',
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = params.location
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()

  const locationData = LOCATIONS.find(l => l.slug === location)

  if (!locationData) {
    notFound()
  }

  const locationProviders = providers.filter(
    p => p.location.toLowerCase() === locationData.name.toLowerCase() ||
         (location === 'kuala-lumpur' && p.location === 'Kuala Lumpur')
  )

  const description = locationDescriptions[location] ||
    `Find the best corporate training providers in ${locationData.name}, Malaysia. Compare HRDF-approved trainers and get free quotes for your training needs.`

  const uniqueSpecializations = Array.from(new Set(locationProviders.flatMap(p => p.specializations)))

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
            <span className="text-white">{locationData.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Corporate Training Providers in {locationData.name} ({currentYear})
          </h1>
          <p className="text-primary-100 max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-primary-600">{locationProviders.length}</p>
            <p className="text-gray-600 text-sm">Training Providers</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-hrdf">
              {locationProviders.filter(p => p.hrdfApproved).length}
            </p>
            <p className="text-gray-600 text-sm">HRDF Approved</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-accent-600">
              {uniqueSpecializations.length}+
            </p>
            <p className="text-gray-600 text-sm">Specializations</p>
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
              Get Quotes from {locationData.name} Trainers
            </h2>
            <p className="text-accent-100">
              Connect with multiple providers in {locationData.name} - no obligation
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
        {locationProviders.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Training Providers in {locationData.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationProviders.map((provider) => (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No providers listed in {locationData.name} yet
            </h3>
            <p className="text-gray-600 mb-4">
              We&apos;re expanding our directory. Check back soon or view all providers.
            </p>
            <Link href="/providers" className="btn-primary">
              View All Providers
            </Link>
          </div>
        )}

        {/* Other Locations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Training in Other Locations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATIONS.filter(l => l.slug !== location).map((loc) => (
              <Link
                key={loc.slug}
                href={`/corporate-training-${loc.slug}`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-gray-900 hover:text-primary-600">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
