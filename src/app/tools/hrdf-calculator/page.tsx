'use client'

import { useState } from 'react'
import Link from 'next/link'
import HRDFCalculator from '@/components/HRDFCalculator'
import { getCurrentYear } from '@/lib/utils'

const faqs = [
  {
    question: 'How is HRDF levy calculated?',
    answer: 'HRDF levy is 1% of employees\' monthly wages (basic salary + fixed allowances). For example, if total monthly wages are RM100,000, the levy is RM1,000/month or RM12,000/year.',
  },
  {
    question: 'What is the minimum employees for HRDF registration?',
    answer: 'Companies with 10 or more Malaysian employees are mandatory to register with HRD Corp. Companies with 5-9 employees can register voluntarily.',
  },
  {
    question: 'What training costs are HRDF claimable?',
    answer: 'Claimable costs include course fees, trainer fees, training materials, meals, accommodation, and transportation for approved training programs conducted by registered trainers.',
  },
  {
    question: 'What is the 4% HRDF service fee?',
    answer: 'HRD Corp deducts a 4% service fee from all approved claims. If your claim is RM10,000, you receive RM9,600. This fee covers administrative costs.',
  },
  {
    question: 'How much can I claim per training day?',
    answer: 'Limits vary by training type: Public programs up to RM8,000/day, in-house with local trainer RM3,000/day, foreign trainer RM5,000/day, online training RM1,000/day/group.',
  },
  {
    question: 'Can I claim HRDF for overseas training?',
    answer: 'Yes, overseas training is claimable up to RM8,000/day for course fees, subject to additional approval requirements and documentation.',
  },
  {
    question: 'Is annual dinner training HRDF claimable?',
    answer: 'Team building activities during annual events may be claimable if conducted by a registered trainer with proper training objectives, assessment, and structured learning outcomes.',
  },
  {
    question: 'How long does HRDF claim approval take?',
    answer: 'Grant applications should be submitted 30 days before training. Claims are typically processed within 14-30 working days after submission with complete documentation.',
  },
]

const costMatrix = [
  { type: 'In-house (Local Trainer)', maxFee: 'RM3,000/day', maxAllowance: 'RM150/pax/day' },
  { type: 'In-house (Foreign Trainer)', maxFee: 'RM5,000/day', maxAllowance: 'RM200/pax/day' },
  { type: 'Public Program', maxFee: 'RM8,000/day', maxAllowance: 'RM400/pax/day' },
  { type: 'Online/Remote', maxFee: 'RM1,000/day/group', maxAllowance: 'RM100/pax/day' },
  { type: 'Overseas Training', maxFee: 'RM8,000/day', maxAllowance: 'Varies' },
]

export default function HRDFCalculatorPage() {
  const currentYear = getCurrentYear()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">HRDF Calculator</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            HRDF Claim Calculator Malaysia ({currentYear})
          </h1>

          <p className="text-lg text-primary-100 max-w-3xl">
            Calculate your company's HRDF levy contribution and estimate claimable amounts for corporate training.
            Free calculator based on HRD Corp's allowable cost matrix.
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="container-custom py-12">
        <HRDFCalculator />

        {/* How HRDF Levy Works */}
        <div className="mt-16 bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How HRDF Levy Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monthly Contribution</h3>
              <p className="text-sm text-gray-600">
                Companies contribute 1% of employees' monthly wages to HRD Corp levy fund.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Conduct Training</h3>
              <p className="text-sm text-gray-600">
                Arrange training with HRD Corp registered providers and submit grant application.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Claim Reimbursement</h3>
              <p className="text-sm text-gray-600">
                Submit claim with documentation to receive reimbursement (minus 4% service fee).
              </p>
            </div>
          </div>
        </div>

        {/* Allowable Cost Matrix */}
        <div className="mt-8 bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            HRD Corp Allowable Cost Matrix ({currentYear})
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Training Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Max Course Fee</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Max Allowances</th>
                </tr>
              </thead>
              <tbody>
                {costMatrix.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">{row.type}</td>
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.maxFee}</td>
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.maxAllowance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            * Rates based on HRD Corp guidelines. Actual limits may vary. Always verify with HRD Corp for current rates.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About HRDF
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
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

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">Disclaimer</h3>
              <p className="text-sm text-yellow-700">
                This calculator provides estimates only. Actual HRDF claims are subject to HRD Corp approval,
                available levy balance, and compliance with all requirements. Always verify current rates and
                requirements with HRD Corp directly. Calculator updated for {currentYear} rates.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 bg-primary-600 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Find HRDF-Approved Training?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Browse verified corporate training providers in Malaysia. Compare quotes and find the
            perfect training partner for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hrdf-training-providers-malaysia"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              View HRDF Providers
            </Link>
            <Link
              href="/providers"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Browse All Providers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
