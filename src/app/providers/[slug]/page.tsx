'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useQuoteModal } from '@/components'
import { getProviderBySlug } from '@/lib/supabase'
import { Provider, mapProviderFromSupabase } from '@/lib/providers'
import { getCurrentYear } from '@/lib/utils'

interface ProviderPageProps {
  params: { slug: string }
}

export default function ProviderPage({ params }: ProviderPageProps) {
  const slug = params.slug
  const { openQuoteModal } = useQuoteModal()
  const currentYear = getCurrentYear()
  const [provider, setProvider] = useState<Provider | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notFoundState, setNotFoundState] = useState(false)

  useEffect(() => {
    async function fetchProvider() {
      setIsLoading(true)
      const data = await getProviderBySlug(slug)
      if (!data) {
        setNotFoundState(true)
      } else {
        setProvider(mapProviderFromSupabase(data))
      }
      setIsLoading(false)
    }
    fetchProvider()
  }, [slug])

  if (notFoundState) {
    notFound()
  }

  if (isLoading || !provider) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-primary-600 py-12">
          <div className="container-custom">
            <div className="animate-pulse">
              <div className="h-8 bg-primary-500 rounded w-1/3 mb-4"></div>
              <div className="h-12 bg-primary-500 rounded w-2/3 mb-2"></div>
              <div className="h-6 bg-primary-500 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/providers" className="text-gray-500 hover:text-primary-600">Providers</Link>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">{provider.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {provider.hrdfApproved && (
                  <span className="bg-hrdf-light text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    HRDF Approved
                  </span>
                )}
                <span className="bg-primary-500 text-primary-100 px-3 py-1 rounded-full text-sm">
                  {provider.location}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {provider.name}
              </h1>
              <p className="text-primary-100 text-lg">
                {provider.tagline}
              </p>
              <div className="flex items-center mt-4 gap-4">
                <div className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-white font-semibold">{provider.rating.toFixed(1)}</span>
                </div>
                {provider.reviewCount > 0 && (
                  <span className="text-primary-200">
                    {provider.reviewCount} reviews
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => openQuoteModal(provider.name)}
                className="btn-accent text-lg px-8"
              >
                Request Quote from {provider.name.split(' ')[0]}
              </button>
              {provider.website && (
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-primary-100 hover:text-white transition-colors"
                >
                  Visit Website →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {provider.name}</h2>
              <p className="text-gray-600 leading-relaxed">
                {provider.description}
              </p>
            </section>

            {/* Training Specializations */}
            {provider.specializations.length > 0 && (
              <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {provider.specializations.map((specialization, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-accent-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{specialization}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonials Placeholder */}
            <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-gray-500">
                  Testimonials coming soon. Contact {provider.name} for references.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">{provider.location}, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Price Range</p>
                    <p className="text-gray-900 font-medium capitalize">{provider.priceRange.replace('-', ' ')}</p>
                  </div>
                </div>

                {provider.hrdfApproved && (
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-hrdf mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">HRDF Status</p>
                      <p className="text-hrdf font-semibold">Approved Provider</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${provider.phone}`} className="text-gray-900 hover:text-primary-600">
                    {provider.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${provider.email}`} className="text-gray-900 hover:text-primary-600 break-all">
                    {provider.email}
                  </a>
                </div>

                {provider.website && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a
                      href={provider.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-primary-600"
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-accent-600 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">
                Interested in {provider.name}?
              </h3>
              <p className="text-accent-100 text-sm mb-4">
                Get a customized quote for your training needs
              </p>
              <button
                onClick={() => openQuoteModal(provider.name)}
                className="w-full bg-white text-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
