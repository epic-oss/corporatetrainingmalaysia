'use client'

import Link from 'next/link'
import { ProviderCard, useQuoteModal } from '@/components'
import { getHRDFApprovedProviders } from '@/lib/providers'
import { getCurrentYear } from '@/lib/utils'

export default function HRDFPage() {
  const currentYear = getCurrentYear()
  const hrdfProviders = getHRDFApprovedProviders()
  const { openQuoteModal } = useQuoteModal()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-hrdf py-12">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-green-100 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">HRDF Providers</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            HRDF Approved Training Providers Malaysia ({currentYear})
          </h1>
          <p className="text-green-100 max-w-3xl">
            Find training providers registered with HRD Corp (formerly HRDF) for claimable corporate training programs in Malaysia.
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* What is HRDF Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-10 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is HRDF / HRD Corp?</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>HRD Corp</strong> (Human Resources Development Corporation), formerly known as HRDF (Human Resources Development Fund),
              is a government agency under the Ministry of Human Resources Malaysia. Employers who contribute to HRD Corp
              can claim training expenses for their employees from the levy they&apos;ve contributed.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Benefits of HRDF-Approved Training:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hrdf mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cost Recovery:</strong> Claim back training expenses from your HRDF levy contributions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hrdf mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Quality Assurance:</strong> HRDF-registered providers meet government quality standards</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hrdf mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Wide Coverage:</strong> Various claim schemes including SBL, SBL-Khas, and PLT</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hrdf mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Tax Benefits:</strong> Training expenses are tax-deductible for employers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-hrdf">{hrdfProviders.length}</p>
            <p className="text-gray-600 text-sm">HRDF Providers</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-primary-600">
              {[...new Set(hrdfProviders.map(p => p.location))].length}
            </p>
            <p className="text-gray-600 text-sm">Locations</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-accent-600">
              {[...new Set(hrdfProviders.flatMap(p => p.specializations))].length}+
            </p>
            <p className="text-gray-600 text-sm">Specializations</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-primary-600">100%</p>
            <p className="text-gray-600 text-sm">Claimable</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-hrdf rounded-xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              Get HRDF-Claimable Training Quotes
            </h2>
            <p className="text-green-100">
              All providers listed below are HRD Corp registered for levy claims
            </p>
          </div>
          <button
            onClick={() => openQuoteModal()}
            className="whitespace-nowrap bg-white text-hrdf px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>

        {/* Providers Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          HRDF-Approved Training Providers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrdfProviders.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onGetQuote={openQuoteModal}
            />
          ))}
        </div>

        {/* How to Claim Section */}
        <div className="mt-16 bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Claim HRDF Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-hrdf-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-hrdf font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose a Provider</h3>
              <p className="text-gray-600 text-sm">
                Select an HRDF-registered training provider from our directory
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-hrdf-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-hrdf font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Grant Application</h3>
              <p className="text-gray-600 text-sm">
                Apply for training grant through HRD Corp e-TRIS system before training
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-hrdf-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-hrdf font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Claim After Training</h3>
              <p className="text-gray-600 text-sm">
                Submit claim with training completion documents to receive reimbursement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
