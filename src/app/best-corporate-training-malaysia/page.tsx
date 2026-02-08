'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ProviderCard, useQuoteModal } from '@/components'
import QuickAnswer from '@/components/QuickAnswer'
import { getProviders } from '@/lib/supabase'
import { Provider, mapProvidersFromSupabase } from '@/lib/providers'
import { getCurrentYear } from '@/lib/utils'

export default function BestCorporateTrainingPage() {
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()
  const [topProviders, setTopProviders] = useState<Provider[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTopProviders() {
      setIsLoading(true)
      const data = await getProviders({ limit: 12 })
      setTopProviders(mapProvidersFromSupabase(data))
      setIsLoading(false)
    }
    fetchTopProviders()
  }, [])

  const selectionCriteria = [
    { title: 'HRDF Registration', description: 'Provider must be HRD Corp registered for HRDF claimable programs' },
    { title: 'Track Record', description: 'Minimum 5 years experience delivering corporate training in Malaysia' },
    { title: 'Client Portfolio', description: 'Proven experience with reputable Malaysian companies and MNCs' },
    { title: 'Trainer Credentials', description: 'Certified trainers with industry-relevant qualifications' },
    { title: 'Program Quality', description: 'Customizable programs with post-training support' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Best Corporate Training Companies in Malaysia ({currentYear})
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Top-rated HRDF-approved training providers for Malaysian businesses
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <QuickAnswer
            question="What are the best corporate training companies in Malaysia?"
            answer={`The best corporate training companies in Malaysia include HRDF-registered providers specializing in leadership, soft skills, and technical training. Top providers are selected based on: HRD Corp registration, 5+ years experience, client portfolio (MNCs and local enterprises), certified trainers, and customizable programs. CorporateTrainingMY.com lists 109+ verified providers across Kuala Lumpur, Selangor, Penang, and Johor.`}
          />
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How We Select the Best Training Providers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectionCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{criteria.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Providers List */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Top Corporate Training Providers in Malaysia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Verified HRDF-approved training companies ready to help your team grow
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
              {topProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onGetQuote={openQuoteModal}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/providers" className="btn-primary">
              View All 109+ Providers
            </Link>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Popular Training Categories
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Training Category</th>
                  <th className="px-6 py-4 text-left font-semibold">Best For</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <Link href="/categories/leadership-training" className="text-primary-600 hover:underline">Leadership Training</Link>
                  </td>
                  <td className="px-6 py-4">Managers, Directors, Executives</td>
                  <td className="px-6 py-4">2-3 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <Link href="/categories/team-building" className="text-primary-600 hover:underline">Team Building</Link>
                  </td>
                  <td className="px-6 py-4">All departments, new teams</td>
                  <td className="px-6 py-4">1-2 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <Link href="/categories/sales-training" className="text-primary-600 hover:underline">Sales Training</Link>
                  </td>
                  <td className="px-6 py-4">Sales teams, business development</td>
                  <td className="px-6 py-4">1-2 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <Link href="/categories/communication-training" className="text-primary-600 hover:underline">Communication Skills</Link>
                  </td>
                  <td className="px-6 py-4">All employees, customer-facing roles</td>
                  <td className="px-6 py-4">1-2 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    <Link href="/categories/soft-skills-training" className="text-primary-600 hover:underline">Soft Skills</Link>
                  </td>
                  <td className="px-6 py-4">Entry to mid-level employees</td>
                  <td className="px-6 py-4">1 day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Malaysia Section */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Corporate Training is Essential in Malaysia
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Malaysia&apos;s corporate training industry continues to grow as companies invest in upskilling their workforce. With the government&apos;s support through HRDF (HRD Corp), businesses can access quality training while managing costs effectively.
            </p>
            <p>
              Key benefits of corporate training in Malaysia include:
            </p>
            <ul>
              <li><strong>HRDF Levy Claims:</strong> Recover training costs through your levy contributions</li>
              <li><strong>Local Expertise:</strong> Trainers understand Malaysian business culture and practices</li>
              <li><strong>Diverse Options:</strong> From international franchises to homegrown specialists</li>
              <li><strong>Competitive Pricing:</strong> More affordable than regional alternatives like Singapore</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find the Perfect Training Provider
          </h2>
          <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto">
            Get free quotes from Malaysia&apos;s top corporate training companies
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>
      </section>
    </>
  )
}
