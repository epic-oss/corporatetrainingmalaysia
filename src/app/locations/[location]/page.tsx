'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ProviderCard, useQuoteModal } from '@/components'
import { getProvidersByLocation } from '@/lib/supabase'
import { Provider, mapProvidersFromSupabase } from '@/lib/providers'
import { LOCATIONS } from '@/lib/constants'
import { getCurrentYear } from '@/lib/utils'

interface LocationPageProps {
  params: { location: string }
}

// Location-specific intro paragraphs
const locationIntros: Record<string, string> = {
  'kuala-lumpur': 'Kuala Lumpur, Malaysia\'s capital and business hub, hosts the largest concentration of corporate training providers in the country. From Fortune 500 companies to growing SMEs, KL-based trainers serve organizations across all industries with world-class programs.',
  'selangor': 'Selangor, surrounding the capital, is home to major industrial zones and corporate headquarters. Training providers here specialize in manufacturing, technology, and service sector programs, with easy accessibility from across the Klang Valley.',
  'penang': 'Penang, the Silicon Valley of the East, offers specialized technical and manufacturing training programs. The state\'s strong electronics and semiconductor industry has cultivated expert trainers in lean manufacturing, quality management, and technical skills.',
  'johor': 'Johor, strategically located near Singapore, provides cost-effective corporate training solutions with international standards. Many providers here serve both Malaysian and Singaporean companies, offering bilingual programs and cross-border expertise.',
  'perak': 'Perak offers accessible and affordable corporate training for businesses in the northern corridor. Training providers understand the unique needs of regional SMEs, manufacturing sectors, and the growing tourism industry.',
  'melaka': 'Melaka, the historical trading port, specializes in hospitality, tourism, and customer service training. The state\'s unique heritage makes it an ideal location for experiential learning and team building programs.',
}

// Location-specific FAQs
const locationFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  'kuala-lumpur': [
    {
      question: 'How many HRDF-approved training providers are in Kuala Lumpur?',
      answer: 'Kuala Lumpur has the highest concentration of HRDF-approved training providers in Malaysia, with over 50 registered companies offering various corporate training programs across leadership, sales, technical, and soft skills development.',
    },
    {
      question: 'What is the average cost of corporate training in KL?',
      answer: 'Corporate training costs in Kuala Lumpur typically range from RM2,000 to RM25,000 per program, depending on the duration, number of participants, and trainer expertise. HRDF-claimable programs help offset these costs for eligible companies.',
    },
    {
      question: 'Can I find bilingual trainers in Kuala Lumpur?',
      answer: 'Yes, most KL-based training providers offer programs in English, Bahasa Malaysia, and Mandarin. Many trainers are multilingual and can customize content for diverse workforce needs.',
    },
    {
      question: 'Do KL trainers provide in-house training at our office?',
      answer: 'Absolutely. Most Kuala Lumpur training providers offer flexible delivery options including in-house training at your premises, external venues, or hybrid online-offline formats to suit your team\'s needs.',
    },
  ],
  'selangor': [
    {
      question: 'What industries do Selangor training providers specialize in?',
      answer: 'Selangor training providers excel in manufacturing, technology, logistics, and service sector training. With major industrial zones in Shah Alam, Subang, and Petaling Jaya, trainers have deep expertise in operational excellence and technical skills.',
    },
    {
      question: 'Are Selangor training programs HRDF claimable?',
      answer: 'Yes, many Selangor-based training providers are HRDF-registered. Companies contributing to HRDF can claim training costs for eligible programs, making professional development more affordable.',
    },
    {
      question: 'How accessible are training venues in Selangor?',
      answer: 'Selangor offers excellent accessibility with training venues near major highways, MRT/LRT stations, and business districts. Providers in Petaling Jaya, Shah Alam, and Subang Jaya are easily reachable from across the Klang Valley.',
    },
    {
      question: 'Do Selangor trainers offer customized programs?',
      answer: 'Most Selangor training companies specialize in customized corporate programs tailored to your industry, company culture, and specific skill gaps. Pre-training assessments ensure programs address your exact needs.',
    },
  ],
  'penang': [
    {
      question: 'What makes Penang training providers unique?',
      answer: 'Penang trainers specialize in manufacturing excellence, technical skills, and quality management due to the state\'s strong electronics and semiconductor industry. Many have certifications from international bodies and multinational experience.',
    },
    {
      question: 'Are there English-speaking trainers in Penang?',
      answer: 'Yes, Penang has a high concentration of bilingual and trilingual trainers proficient in English, Bahasa Malaysia, and Mandarin, reflecting the state\'s multicultural workforce.',
    },
    {
      question: 'What types of technical training are available in Penang?',
      answer: 'Penang offers specialized training in lean manufacturing, Six Sigma, quality management systems, automation, Industry 4.0, and electronics manufacturing. Many programs are certified by international bodies.',
    },
    {
      question: 'Can Penang trainers conduct programs in other states?',
      answer: 'Yes, most Penang-based trainers conduct nationwide programs. They regularly travel to KL, Selangor, and other states, or offer virtual training options for teams across Malaysia.',
    },
  ],
  'johor': [
    {
      question: 'Do Johor training providers serve Singapore companies?',
      answer: 'Yes, many Johor training providers cater to both Malaysian and Singaporean companies. The proximity to Singapore and competitive pricing make Johor an attractive option for cross-border corporate training.',
    },
    {
      question: 'What languages are training programs offered in?',
      answer: 'Johor trainers offer programs in English, Bahasa Malaysia, and Mandarin. Some providers also offer programs in Tamil, catering to the diverse workforce in the southern region.',
    },
    {
      question: 'Are there specialized manufacturing trainers in Johor?',
      answer: 'Yes, with Johor\'s strong manufacturing sector including automotive, electronics, and oil & gas, many trainers specialize in operational excellence, safety training, and technical skills development.',
    },
    {
      question: 'What is the typical training cost in Johor compared to KL?',
      answer: 'Training costs in Johor are generally 15-25% lower than Kuala Lumpur, while maintaining comparable quality. This makes Johor an cost-effective option for companies seeking value.',
    },
  ],
  'perak': [
    {
      question: 'What types of training are popular in Perak?',
      answer: 'Perak training providers specialize in SME development, manufacturing skills, customer service, and leadership for mid-sized companies. The region also has growing expertise in tourism and hospitality training.',
    },
    {
      question: 'Are Perak training programs affordable for SMEs?',
      answer: 'Yes, Perak offers some of the most affordable corporate training options in Malaysia. Combined with HRDF subsidies, SMEs can access quality training programs within budget.',
    },
    {
      question: 'Do Perak trainers have industry experience?',
      answer: 'Many Perak-based trainers have practical experience in manufacturing, mining, agriculture, and tourism industries that drive the local economy, bringing real-world insights to their programs.',
    },
    {
      question: 'Can I get team building programs in Perak?',
      answer: 'Yes, Perak is popular for team building programs leveraging its natural attractions. Providers offer outdoor activities, adventure-based learning, and retreat programs in scenic locations.',
    },
  ],
  'melaka': [
    {
      question: 'What training specializations are unique to Melaka?',
      answer: 'Melaka excels in hospitality, tourism, and customer service training, reflecting the state\'s heritage tourism industry. Providers also offer cultural awareness and soft skills programs.',
    },
    {
      question: 'Is Melaka good for corporate retreats and team building?',
      answer: 'Absolutely! Melaka\'s historical sites, resorts, and unique cultural experiences make it an ideal destination for corporate retreats and team building programs that combine learning with memorable experiences.',
    },
    {
      question: 'Are there HRDF-registered trainers in Melaka?',
      answer: 'Yes, several Melaka-based training providers are HRDF-registered, allowing companies to claim eligible training costs while benefiting from local expertise.',
    },
    {
      question: 'What makes Melaka training programs different?',
      answer: 'Melaka training programs often incorporate experiential learning, using the state\'s rich history and culture to create unique, memorable learning experiences that enhance retention.',
    },
  ],
}

export default function LocationPage({ params }: LocationPageProps) {
  const locationSlug = params.location
  const currentYear = getCurrentYear()
  const { openQuoteModal } = useQuoteModal()
  const [providers, setProviders] = useState<Provider[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const locationData = LOCATIONS.find(l => l.slug === locationSlug)

  useEffect(() => {
    async function fetchProviders() {
      if (!locationData) return
      setIsLoading(true)
      const data = await getProvidersByLocation(locationData.name)
      setProviders(mapProvidersFromSupabase(data))
      setIsLoading(false)
    }
    fetchProviders()
  }, [locationSlug, locationData])

  if (!locationData) {
    notFound()
  }

  const intro = locationIntros[locationSlug] || `Find the best corporate training providers in ${locationData.name}, Malaysia. Compare verified trainers and get free quotes for your training needs.`
  const faqs = locationFAQs[locationSlug] || []

  return (
    <div className="min-h-screen bg-gray-50">
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
            <span className="text-white">{locationData.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Corporate Training Providers in {locationData.name} ({currentYear})
          </h1>

          <p className="text-lg text-primary-100 max-w-3xl mb-6">
            {intro}
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

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Provider Count */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLoading ? 'Loading...' : `Showing ${providers.length} providers in ${locationData.name}`}
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found in {locationData.name}</h3>
            <p className="text-gray-600 mb-6">We're expanding our network. Check back soon or browse all providers.</p>
            <Link href="/providers" className="btn-primary inline-block">
              View All Providers
            </Link>
          </div>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Training in {locationData.name}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
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
            Get Free Quotes from {locationData.name} Training Providers
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Compare quotes from verified corporate training providers in {locationData.name}.
            Tell us your requirements and receive customized proposals within 24 hours.
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Request Free Quotes Now
          </button>
        </div>

        {/* Other Locations */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Other Locations</h3>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.filter(l => l.slug !== locationSlug).map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
