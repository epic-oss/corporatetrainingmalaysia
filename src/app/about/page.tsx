'use client'

import Link from 'next/link'
import { useQuoteModal } from '@/components'
import { getCurrentYear } from '@/lib/utils'

export default function AboutPage() {
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About CorporateTrainingMY
          </h1>
          <p className="text-primary-100 max-w-3xl">
            Malaysia&apos;s leading directory for corporate training providers
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <section className="bg-white rounded-xl p-6 md:p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              CorporateTrainingMY was founded with a simple mission: to make it easy for Malaysian businesses
              to find the right training providers for their workforce development needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand that finding quality corporate training can be time-consuming and overwhelming.
              With hundreds of providers across Malaysia, each offering different specializations, pricing,
              and certifications, HR managers often struggle to compare options and make informed decisions.
            </p>
          </section>

          {/* What We Do Section */}
          <section className="bg-white rounded-xl p-6 md:p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Curate Top Providers</h3>
                  <p className="text-gray-600 text-sm">
                    We research and list Malaysia&apos;s best corporate training companies, focusing on quality,
                    reputation, and HRDF approval status.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enable Easy Comparison</h3>
                  <p className="text-gray-600 text-sm">
                    Filter by location, specialization, price range, and HRDF status to quickly find
                    providers that match your requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Connect You with Providers</h3>
                  <p className="text-gray-600 text-sm">
                    Submit one quote request and we&apos;ll connect you with relevant training providers
                    who will compete for your business.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-white rounded-xl p-6 md:p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose CorporateTrainingMY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">100% Free for Businesses</h3>
                <p className="text-gray-600 text-sm">
                  Our directory and quote matching service is completely free for companies seeking training.
                </p>
              </div>
              <div className="p-4 bg-hrdf-light/10 rounded-lg">
                <h3 className="font-semibold text-hrdf-dark mb-2">HRDF Focus</h3>
                <p className="text-gray-600 text-sm">
                  We prioritize HRDF-approved providers to help you maximize your training levy claims.
                </p>
              </div>
              <div className="p-4 bg-accent-50 rounded-lg">
                <h3 className="font-semibold text-accent-700 mb-2">Malaysia-Focused</h3>
                <p className="text-gray-600 text-sm">
                  We specialize exclusively in Malaysian corporate training, understanding local needs.
                </p>
              </div>
              <div className="p-4 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Verified Listings</h3>
                <p className="text-gray-600 text-sm">
                  All training providers are reviewed to ensure they meet our quality standards.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-accent-600 rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Find Your Training Provider?
            </h2>
            <p className="text-accent-100 mb-6">
              Get matched with top training companies in Malaysia today
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="bg-white text-accent-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quotes
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}
