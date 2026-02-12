'use client'

import Link from 'next/link'
import { useQuoteModal } from '@/components'
import QuickAnswer from '@/components/QuickAnswer'
import { getCurrentYear } from '@/lib/utils'
import ExploreMore from '@/components/ExploreMore'

const currentYear = getCurrentYear()

const faqs = [
  {
    question: 'How long does HRDF training provider registration take?',
    answer: 'The registration process takes 14-30 working days after submitting a complete application with payment. Delays occur if HRD Corp requests additional documents or conducts site verification.',
  },
  {
    question: 'What is the cost to register as HRDF training provider?',
    answer: 'Training provider registration costs RM500 (one-time). Additionally, trainer registration is RM100 per trainer, and course registration is RM50 per course. Renewal after 3 years costs RM200.',
  },
  {
    question: 'Do I need TTT certification to become HRDF trainer?',
    answer: 'Yes, all trainers must complete an HRD Corp recognized Train-The-Trainer (TTT) program. TTT courses take 5 days and cost RM2,500-4,500.',
  },
  {
    question: 'Can sole proprietors register as HRDF training provider?',
    answer: 'Yes, sole proprietors (Enterprise) can register, but Sdn Bhd companies are preferred. You must have valid SSM registration and meet all other requirements.',
  },
  {
    question: 'Can foreign trainers be registered under HRDF?',
    answer: 'Foreign trainers can be registered if they have valid Malaysian work permits and meet qualification requirements. Additional documentation may be required.',
  },
  {
    question: 'How often do I need to renew HRDF registration?',
    answer: 'Training provider registration is valid for 3 years. Renewal costs RM200 and should be submitted 3 months before expiry to avoid lapse.',
  },
  {
    question: 'What happens if my application is rejected?',
    answer: "You'll receive feedback explaining rejection reasons. You can address the issues and reapply. The RM500 fee is non-refundable.",
  },
  {
    question: 'What is e-TRIS?',
    answer: "e-TRIS (Electronic Training Information System) is HRD Corp's online portal where training providers register, submit grant applications, manage trainers, and track claims.",
  },
  {
    question: 'Can I register courses after becoming a training provider?',
    answer: 'Yes, after provider approval, you register individual courses/programs (RM50 each). Each course requires outline, learning outcomes, and sample materials.',
  },
  {
    question: 'Is there a minimum number of trainers required?',
    answer: 'No minimum, but you need at least one registered trainer to offer training. More trainers allow you to conduct multiple programs simultaneously.',
  },
]

export default function BecomeHRDFProviderPage() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Become HRDF Provider</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How to Become an HRDF Training Provider ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-6">
            Complete guide to registering as an HRD Corp certified training provider in Malaysia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#steps"
              className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors"
            >
              View Requirements
            </a>
            <Link
              href="/for-providers"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              List Your Company
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary-600">1,000+</p>
              <p className="text-sm text-gray-600">Registered Providers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary-600">RM500</p>
              <p className="text-sm text-gray-600">Registration Fee</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary-600">14-30 Days</p>
              <p className="text-sm text-gray-600">Approval Time</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary-600">3 Years</p>
              <p className="text-sm text-gray-600">Validity Period</p>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Answer */}
      <div className="container-custom py-8">
        <QuickAnswer
          question="How do I become an HRDF training provider?"
          answer="To become an HRDF (HRD Corp) registered training provider: 1) Prepare company documents (SSM, profile, trainer CVs), 2) Ensure trainers have TTT certification, 3) Register on e-TRIS portal, 4) Pay RM500 fee, 5) Wait 14-30 days for approval. Your company must be registered in Malaysia with at least 2 years operation."
        />
      </div>

      {/* Requirements */}
      <div className="container-custom pb-12" id="requirements">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Requirements to Become HRDF Training Provider
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Company Requirements</h3>
            <ul className="space-y-3">
              {[
                'Registered Malaysian company (SSM)',
                'Minimum 2 years in operation',
                'Business activities in training/education/consulting',
                'No blacklist record with HRD Corp',
                'Valid business premises',
                'Minimum paid-up capital (varies by company type)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trainer Requirements</h3>
            <ul className="space-y-3">
              {[
                'Minimum diploma or equivalent',
                'At least 3 years industry experience',
                'Completed Train-The-Trainer (TTT) program',
                'No criminal record',
                'Malaysian citizen or valid work permit',
                'Relevant certifications for specialized topics',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <div className="bg-white py-12" id="steps">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Step-by-Step Registration Process
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prepare Your Documents</h3>
                <p className="text-gray-600 mb-3">Gather all required documents before starting:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>- SSM registration (Form 9 &amp; 24/49)</li>
                  <li>- Company profile and brochure</li>
                  <li>- Trainer CVs with qualifications</li>
                  <li>- TTT certificates for all trainers</li>
                  <li>- Sample training materials/modules</li>
                  <li>- List of past clients and testimonials (if any)</li>
                  <li>- Company bank account details</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Register on e-TRIS Portal</h3>
                <p className="text-gray-600 mb-3">Create account on HRD Corp&apos;s e-TRIS system:</p>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Go to <strong>etris.hrdcorp.gov.my</strong></li>
                  <li>Click &quot;New Registration&quot;</li>
                  <li>Select &quot;Training Provider&quot;</li>
                  <li>Fill company details accurately</li>
                  <li>Upload all required documents</li>
                  <li>Submit application</li>
                </ol>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pay Registration Fee</h3>
                <p className="text-gray-600 mb-3">Pay the RM500 one-time registration fee via:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>- Online banking (FPX)</li>
                  <li>- Credit/debit card</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">Fee is non-refundable even if application is rejected.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verification Process</h3>
                <p className="text-gray-600 mb-3">HRD Corp will review your application (14-30 working days). They may:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>- Request additional documents</li>
                  <li>- Conduct site visit to your premises</li>
                  <li>- Interview your trainers</li>
                  <li>- Verify trainer qualifications</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Approval</h3>
                <p className="text-gray-600 mb-3">Once approved:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>- Receive HRD Corp Training Provider registration number</li>
                  <li>- Register your trainers (RM100 each)</li>
                  <li>- Register your courses (RM50 each)</li>
                  <li>- Start offering HRDF-claimable training!</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">Registration valid for 3 years.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Costs Table */}
      <div className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          HRDF Training Provider Registration Costs
        </h2>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Item</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-gray-700">Training Provider Registration</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">RM500</td>
                  <td className="px-6 py-4 text-gray-600">One-time</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Trainer Registration</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">RM100 per trainer</td>
                  <td className="px-6 py-4 text-gray-600">One-time per trainer</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Course/Program Registration</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">RM50 per course</td>
                  <td className="px-6 py-4 text-gray-600">One-time per course</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Registration Renewal</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">RM200</td>
                  <td className="px-6 py-4 text-gray-600">Every 3 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Trainer Renewal</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">RM50 per trainer</td>
                  <td className="px-6 py-4 text-gray-600">Every 3 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="px-6 py-3 text-sm text-gray-500 bg-gray-50">
            *Fees as of {currentYear}. Verify current rates on hrdcorp.gov.my
          </p>
        </div>
      </div>

      {/* TTT Section */}
      <div className="bg-amber-50 py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What is TTT (Train-The-Trainer)?
          </h2>
          <p className="text-gray-700 mb-4">
            TTT certification is mandatory for all HRDF trainers. The program teaches:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">-</span>
              Adult learning principles
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">-</span>
              Training delivery techniques
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">-</span>
              Course design and development
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">-</span>
              Assessment and evaluation methods
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-bold text-gray-900">5 Days</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-500">Cost</p>
              <p className="font-bold text-gray-900">RM2,500 - RM4,500</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-500">Providers</p>
              <p className="font-bold text-gray-900">HRD Corp Approved Only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Benefits of Becoming HRDF Registered
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Access Funded Market', description: 'Companies can claim your training fees from HRDF levy. Makes your services more affordable and attractive to clients.' },
            { title: 'Credibility & Trust', description: 'HRD Corp registration signals quality assurance. Many corporations only hire registered providers.' },
            { title: 'Larger Client Base', description: 'Access 50,000+ levy-paying companies actively looking for training providers.' },
            { title: 'Structured Programs', description: 'Registration process helps you formalize your training programs and materials.' },
            { title: 'Recurring Business', description: 'Companies have annual training budgets. HRDF registration means repeat clients.' },
            { title: 'Premium Pricing', description: 'HRDF-claimable programs can command higher rates since clients get reimbursed.' },
          ].map((benefit, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common Rejection Reasons */}
      <div className="container-custom pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Common Rejection Reasons (Avoid These)
        </h2>
        <div className="bg-red-50 p-6 md:p-8 rounded-xl">
          <ul className="space-y-3">
            {[
              'Incomplete documentation',
              'Trainers without TTT certification',
              "Business activities don't match training/education",
              'Company less than 2 years old',
              'Poor quality training materials',
              'Unable to verify trainer qualifications',
              'Previous blacklist record',
            ].map((reason, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA - List With Us */}
      <div className="bg-accent-600 py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Already an HRDF Training Provider?
          </h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Get discovered by companies actively looking for training. List your company on CorporateTrainingMY.com
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/for-providers"
              className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              List Your Company - FREE
            </Link>
            <Link
              href="/hrdf-providers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Current Listings
            </Link>
          </div>
          <p className="mt-6 text-sm text-teal-100">
            Free basic listing &nbsp;&bull;&nbsp; Receive quote requests &nbsp;&bull;&nbsp; 109+ providers already listed
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-primary-600 py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help Finding Training Providers?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Compare quotes from 109+ verified HRDF-approved training providers in Malaysia.
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>
      </div>

      {/* Internal Links */}
      <div className="container-custom py-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/hrdf-providers" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
            HRDF Providers
          </Link>
          <Link href="/hrdf-guide" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
            HRDF Guide
          </Link>
          <Link href="/tools/hrdf-calculator" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
            HRDF Calculator
          </Link>
          <Link href="/corporate-training-cost-malaysia" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
            Training Cost Guide
          </Link>
        </div>
      </div>

      <ExploreMore currentPath="/become-hrdf-provider" />
    </div>
  )
}
