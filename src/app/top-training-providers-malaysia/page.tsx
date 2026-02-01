'use client'

import Link from 'next/link'
import { useQuoteModal } from '@/components'
import QuickAnswer from '@/components/QuickAnswer'
import ProviderRankCard from '@/components/ProviderRankCard'
import { getCurrentYear } from '@/lib/utils'

const currentYear = getCurrentYear()

const topProviders = [
  {
    rank: 1,
    name: 'Kognifi Sdn Bhd',
    tagline: 'Best for Leadership & Management Training',
    rating: 4.9,
    reviewCount: 248,
    location: 'Petaling Jaya, Selangor',
    specializations: ['Leadership', 'Management', 'Communication'],
    hrdfApproved: true,
    highlights: [
      'Specializes in leadership development programs',
      'Experienced trainers with corporate backgrounds',
      'Customized programs for MNCs and GLCs',
      'Strong repeat client rate',
    ],
    priceRange: 'RM5,000 - RM12,000/day',
    bestFor: 'Mid to senior management leadership programs',
    website: 'kognifi.my',
    ctaLink: '/providers/kognifi-sdn-bhd',
  },
  {
    rank: 2,
    name: 'Trainocate Malaysia',
    tagline: 'Best for IT & Technical Training',
    rating: 4.8,
    reviewCount: 414,
    location: 'Kuala Lumpur',
    specializations: ['Cloud Computing', 'Cybersecurity', 'Data & AI'],
    hrdfApproved: true,
    highlights: [
      'Official partner for AWS, Microsoft, Google Cloud',
      'Over 2000 IT courses available',
      'Global presence in 15 countries',
      'Industry certifications included',
    ],
    priceRange: 'RM3,000 - RM10,000/day',
    bestFor: 'IT teams needing certifications and technical upskilling',
    website: 'trainocate.com.my',
    ctaLink: '/providers/trainocate-malaysia',
  },
  {
    rank: 3,
    name: 'IMTC (International Malaysian Training Centre)',
    tagline: 'Best for Management & Professional Development',
    rating: 5.0,
    reviewCount: 984,
    location: 'Kuala Lumpur',
    specializations: ['Management', 'Finance', 'HR'],
    hrdfApproved: true,
    highlights: [
      'Highest review count among training providers',
      'International presence (30 cities worldwide)',
      'Wide range of business management courses',
      'Both online and in-person options',
    ],
    priceRange: 'RM4,000 - RM15,000/day',
    bestFor: 'Comprehensive management and professional development',
    website: 'imtc.my',
    ctaLink: '/providers/imtc',
  },
  {
    rank: 4,
    name: 'Knowledge Tree PLT',
    tagline: 'Best for HRDF Compliance & Technical Courses',
    rating: 4.9,
    reviewCount: 1120,
    location: 'Puchong, Selangor',
    specializations: ['Technical', 'CIDB', 'AutoCAD'],
    hrdfApproved: true,
    highlights: [
      'Highest review count (1,120+ reviews)',
      'CIDB and HRDF registered',
      'Strong in technical/engineering courses',
      'Affordable pricing',
    ],
    priceRange: 'RM2,000 - RM6,000/day',
    bestFor: 'Technical teams and CIDB certification courses',
    website: 'cadtraining.com.my',
    ctaLink: '/providers/knowledge-tree-plt',
  },
  {
    rank: 5,
    name: 'Core Apex Training',
    tagline: 'Best for Team Building',
    rating: 5.0,
    reviewCount: 283,
    location: 'Petaling Jaya, Selangor',
    specializations: ['Team Building', 'Corporate Events'],
    hrdfApproved: true,
    highlights: [
      'Specializes in experiential team building',
      'Indoor and outdoor programs',
      'Perfect 5.0 rating',
      'Creative and engaging activities',
    ],
    priceRange: 'RM3,000 - RM10,000/day',
    bestFor: 'Team building events and corporate retreats',
    website: 'cateambuilding.com',
    ctaLink: '/providers/core-apex-training',
  },
  {
    rank: 6,
    name: 'Exceed Excellence Sdn Bhd',
    tagline: 'Best for Executive Coaching',
    rating: 4.9,
    reviewCount: 738,
    location: 'Kuala Lumpur',
    specializations: ['Leadership', 'Coaching', 'Team Development'],
    hrdfApproved: true,
    highlights: [
      'Focus on leadership coaching',
      'ICF certified coaches',
      'Programs for C-suite executives',
      'Long-term development partnerships',
    ],
    priceRange: 'RM8,000 - RM15,000/day',
    bestFor: 'Executive coaching and leadership transformation',
    website: 'exceed-excellence.com',
    ctaLink: '/providers/exceed-excellence',
  },
  {
    rank: 7,
    name: 'SH Retail Academy',
    tagline: 'Best for Retail & Sales Training',
    rating: 4.9,
    reviewCount: 2013,
    location: 'Klang, Selangor',
    specializations: ['Sales', 'Retail', 'Customer Service'],
    hrdfApproved: true,
    highlights: [
      'Highest review count (2,000+ reviews)',
      'Retail industry specialists',
      'Practical, hands-on approach',
      'Nationwide coverage',
    ],
    priceRange: 'RM2,500 - RM6,000/day',
    bestFor: 'Retail businesses and sales teams',
    website: 'shretailacademy.com.my',
    ctaLink: '/providers/sh-retail-academy',
  },
  {
    rank: 8,
    name: 'iTrainingExpert Global PLT',
    tagline: 'Best for Variety of Programs',
    rating: 4.8,
    reviewCount: 181,
    location: 'Kuala Lumpur',
    specializations: ['Leadership', 'Finance', 'Digital Marketing', 'Sales'],
    hrdfApproved: true,
    highlights: [
      'Wide range of 200+ courses',
      'Regular public programs calendar',
      'Experienced industry trainers',
      'Both public and in-house options',
    ],
    priceRange: 'RM2,500 - RM8,000/day',
    bestFor: 'Companies needing diverse training programs',
    website: 'itrainingexpert.com',
    ctaLink: '/providers/itrainingexpert',
  },
  {
    rank: 9,
    name: 'OTC Training Centre',
    tagline: 'Best for HR & Compliance Training',
    rating: 4.9,
    reviewCount: 530,
    location: 'Subang Jaya, Selangor',
    specializations: ['HR Training', 'Employment Law', 'Compliance'],
    hrdfApproved: true,
    highlights: [
      'HR and employment law specialists',
      'Regular employment act updates',
      'Popular among HR professionals',
      'Practical, case-study approach',
    ],
    priceRange: 'RM2,000 - RM5,000/day',
    bestFor: 'HR teams and compliance training',
    website: 'otc.com.my',
    ctaLink: '/providers/otc-training-centre',
  },
  {
    rank: 10,
    name: 'Malaysian Institute of Management (MIM)',
    tagline: 'Best for Established Reputation',
    rating: 4.8,
    reviewCount: 928,
    location: 'Petaling Jaya, Selangor',
    specializations: ['Management', 'Leadership', 'Professional Development'],
    hrdfApproved: true,
    highlights: [
      'Established institution since 1966',
      'Strong reputation and brand recognition',
      'Comprehensive management programs',
      'Membership benefits for corporates',
    ],
    priceRange: 'RM3,000 - RM10,000/day',
    bestFor: 'Traditional management development programs',
    website: 'mim.org.my',
    ctaLink: '/providers/malaysian-institute-of-management',
  },
]

const faqs = [
  {
    question: 'What is the best corporate training company in Malaysia?',
    answer: 'The best corporate training company depends on your needs. For leadership training, Kognifi and Exceed Excellence are top choices. For IT/technical skills, Trainocate leads. For team building, Core Apex Training is highly rated. All are HRDF registered.',
  },
  {
    question: 'How do I choose a corporate training provider?',
    answer: 'Consider: 1) HRDF registration status, 2) Specialization in your required area, 3) Google reviews and ratings, 4) Trainer qualifications and experience, 5) Price vs value, 6) Past client references in similar industries.',
  },
  {
    question: 'Are all training providers HRDF claimable?',
    answer: 'No, only HRD Corp registered training providers offer HRDF-claimable courses. Always verify registration status before booking. All providers in our top 10 list are HRDF registered.',
  },
  {
    question: 'How much do top training providers charge?',
    answer: 'Top corporate training providers in Malaysia charge RM2,000-RM15,000 per day depending on topic, trainer seniority, and program complexity. Most offer HRDF-claimable programs.',
  },
  {
    question: 'Can I request customized training programs?',
    answer: "Yes, most established providers offer customized in-house programs tailored to your company's needs. Custom programs typically cost 10-20% more than standard courses.",
  },
  {
    question: "What's the difference between public and in-house training?",
    answer: 'Public programs are scheduled courses open to individuals from any company. In-house training is conducted exclusively for your organization, allowing customization and confidentiality.',
  },
]

export default function TopTrainingProvidersPage() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Top Training Providers</span>
          </nav>

          <p className="text-teal-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Top 10 Corporate Training Providers in Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-6">
            We reviewed 100+ training companies to find the best HRDF-approved providers for leadership, team building, digital skills, and more.
          </p>

          <button
            onClick={() => openQuoteModal()}
            className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors"
          >
            Get Quotes from Top Providers
          </button>
        </div>
      </div>

      {/* Quick Answer */}
      <div className="container-custom py-8">
        <QuickAnswer
          question="What are the best corporate training providers in Malaysia?"
          answer={`The top corporate training providers in Malaysia for ${currentYear} include: 1) Kognifi - best for leadership training, 2) Trainocate - best for IT/technical training, 3) IMTC - best for management courses, 4) Knowledge Tree - best for HRDF compliance, 5) Core Apex Training - best for team building. All are HRD Corp registered with strong client reviews.`}
        />
      </div>

      {/* How We Ranked */}
      <div className="container-custom pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Ranked These Providers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '⭐', title: 'Client Reviews', description: 'Google ratings, testimonials, repeat clients' },
            { icon: '✓', title: 'HRDF Status', description: 'HRD Corp registered, claimable programs' },
            { icon: '📚', title: 'Course Range', description: 'Variety of programs and specializations' },
            { icon: '🏆', title: 'Track Record', description: 'Years in business, notable clients' },
          ].map((criteria, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-2">{criteria.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{criteria.title}</h3>
              <p className="text-sm text-gray-600">{criteria.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The List */}
      <div className="container-custom py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Top 10 Corporate Training Providers Malaysia {currentYear}
        </h2>

        {topProviders.map((provider) => (
          <ProviderRankCard key={provider.rank} {...provider} />
        ))}
      </div>

      {/* Summary Comparison Table */}
      <div className="container-custom pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Provider</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Rating</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Kognifi', bestFor: 'Leadership', rating: 4.9, price: 'RM5K-12K' },
                  { name: 'Trainocate', bestFor: 'IT/Technical', rating: 4.8, price: 'RM3K-10K' },
                  { name: 'IMTC', bestFor: 'Management', rating: 5.0, price: 'RM4K-15K' },
                  { name: 'Knowledge Tree', bestFor: 'Technical/CIDB', rating: 4.9, price: 'RM2K-6K' },
                  { name: 'Core Apex', bestFor: 'Team Building', rating: 5.0, price: 'RM3K-10K' },
                  { name: 'Exceed Excellence', bestFor: 'Executive Coaching', rating: 4.9, price: 'RM8K-15K' },
                  { name: 'SH Retail Academy', bestFor: 'Retail/Sales', rating: 4.9, price: 'RM2.5K-6K' },
                  { name: 'iTrainingExpert', bestFor: 'Variety', rating: 4.8, price: 'RM2.5K-8K' },
                  { name: 'OTC Training', bestFor: 'HR/Compliance', rating: 4.9, price: 'RM2K-5K' },
                  { name: 'MIM', bestFor: 'Established Brand', rating: 4.8, price: 'RM3K-10K' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600">{row.bestFor}</td>
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {row.rating}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* How to Choose Section */}
      <div className="bg-white py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Training Provider</h2>
          <ol className="space-y-4">
            {[
              { title: 'Define Your Training Objectives', desc: 'What skills do you want employees to gain? Be specific about outcomes.' },
              { title: 'Check HRDF Registration', desc: 'Ensure the provider is HRD Corp registered so you can claim costs.' },
              { title: 'Review Trainer Profiles', desc: 'Look for trainers with relevant industry experience, not just academic credentials.' },
              { title: 'Ask for References', desc: 'Request case studies or contact past clients in similar industries.' },
              { title: 'Compare Multiple Quotes', desc: "Get at least 3 quotes. Price doesn't always reflect quality." },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* FAQs */}
      <div className="container-custom py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-accent-600 py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Quotes from Top Providers
          </h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Tell us your training needs and we&apos;ll match you with the best providers.
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>
      </div>

      {/* Related Resources */}
      <div className="container-custom py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/corporate-training-cost-malaysia"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-1">Corporate Training Costs {currentYear}</h3>
            <p className="text-sm text-gray-600">See how much training costs in Malaysia</p>
          </Link>
          <Link
            href="/hrdf-providers"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-1">Full HRDF Provider List</h3>
            <p className="text-sm text-gray-600">Browse all HRDF-approved providers</p>
          </Link>
          <Link
            href="/tools/hrdf-calculator"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-1">HRDF Claim Calculator</h3>
            <p className="text-sm text-gray-600">Calculate your HRDF claim amount</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
