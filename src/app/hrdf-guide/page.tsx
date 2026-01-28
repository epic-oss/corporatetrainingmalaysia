import Link from 'next/link'
import QuickAnswer from '@/components/QuickAnswer'
import SchemaMarkup, { generateFAQSchema, generateArticleSchema } from '@/components/SchemaMarkup'
import { getCurrentYear } from '@/lib/utils'

export default function HRDFGuidePage() {
  const currentYear = getCurrentYear()

  const faqs = [
    {
      question: 'What is HRDF in Malaysia?',
      answer: 'HRDF (Human Resources Development Fund), now known as HRD Corp, is a Malaysian government body that collects levy from employers to fund employee training and development. Companies with 10 or more employees must register and contribute 1% of monthly wages.',
    },
    {
      question: 'How much is HRDF levy in Malaysia?',
      answer: 'HRDF levy is 1% of employees monthly wages (basic salary + fixed allowances). For example, if total monthly wages are RM100,000, the levy is RM1,000 per month. Companies can then claim back this amount for approved training.',
    },
    {
      question: 'How do I claim HRDF for training?',
      answer: 'To claim HRDF: 1) Register your company with HRD Corp, 2) Ensure you have sufficient levy balance, 3) Choose an HRDF-registered training provider, 4) Submit a grant application before training, 5) Attend training and submit completion documents, 6) Receive reimbursement to your account.',
    },
    {
      question: 'What training is claimable under HRDF?',
      answer: 'Most corporate training programs are HRDF claimable including: leadership training, soft skills, technical skills, IT training, sales training, and compliance programs. The training must be conducted by HRD Corp registered providers and approved under relevant schemes.',
    },
    {
      question: 'How much can I claim from HRDF?',
      answer: 'HRDF claim limits vary by scheme: SBL-Khas allows up to RM8,000 per day for external training, SBL claims are based on approved course fees, and PLT allows up to RM5,000 for future skills programs. Claims are subject to available levy balance.',
    },
    {
      question: 'What is the difference between HRDF and HRD Corp?',
      answer: 'HRDF was rebranded to HRD Corp (Human Resource Development Corporation) in 2021. They are the same organization - HRD Corp is the current official name, while HRDF is still commonly used to refer to the levy and claims system.',
    },
  ]

  const claimSteps = [
    { step: 1, title: 'Register with HRD Corp', description: 'Companies with 10+ employees must register. Smaller companies can register voluntarily.' },
    { step: 2, title: 'Pay Monthly Levy', description: 'Contribute 1% of employee wages monthly. This builds your training fund balance.' },
    { step: 3, title: 'Choose Training Provider', description: 'Select an HRD Corp registered training provider from our directory.' },
    { step: 4, title: 'Submit Grant Application', description: 'Apply through e-TRiS system before training date. Allow 3-5 working days for approval.' },
    { step: 5, title: 'Attend Training', description: 'Employees complete the approved training program.' },
    { step: 6, title: 'Submit Claim Documents', description: 'Upload attendance, certificates, and invoices within 60 days.' },
    { step: 7, title: 'Receive Reimbursement', description: 'Approved claims are credited to your company account.' },
  ]

  const schemes = [
    {
      name: 'SBL-Khas',
      fullName: 'Skim Bantuan Latihan Khas',
      description: 'For external training programs conducted by registered providers',
      maxClaim: 'Up to RM8,000/day',
      eligibility: 'All registered employers',
    },
    {
      name: 'SBL',
      fullName: 'Skim Bantuan Latihan',
      description: 'For various training needs including in-house and overseas training',
      maxClaim: 'Based on approved fee',
      eligibility: 'All registered employers',
    },
    {
      name: 'PLT',
      fullName: 'Program Latihan Teras',
      description: 'For future skills and emerging technology training',
      maxClaim: 'Up to RM5,000',
      eligibility: 'SMEs and priority sectors',
    },
    {
      name: 'ILP',
      fullName: 'Industrial Learning Programme',
      description: 'For structured workplace learning with educational institutions',
      maxClaim: 'Varies by program',
      eligibility: 'Employers with apprenticeship programs',
    },
  ]

  return (
    <>
      <SchemaMarkup schema={generateFAQSchema(faqs)} />
      <SchemaMarkup schema={generateArticleSchema(
        `Complete HRDF Guide ${currentYear}: How to Claim Training Costs in Malaysia`,
        'Everything you need to know about HRDF/HRD Corp in Malaysia. Learn how to register, calculate levy, and claim training costs step by step.',
        '2024-01-01',
        `${currentYear}-01-15`
      )} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hrdf to-hrdf-dark text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Complete HRDF Guide Malaysia ({currentYear})
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Everything you need to know about HRD Corp training claims
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <QuickAnswer
            question="What is HRDF and how does it work?"
            answer="HRDF (now HRD Corp) is Malaysia's human resource development fund. Companies with 10+ employees contribute 1% of wages as levy, then claim back training costs. You can claim up to RM8,000/day for approved training from registered providers. The process involves: registering with HRD Corp, building levy balance, submitting grant applications before training, and claiming reimbursement after completion."
          />
        </div>
      </section>

      {/* What is HRDF */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What is HRDF / HRD Corp?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              <strong>HRDF (Human Resources Development Fund)</strong>, now officially known as <strong>HRD Corp (Human Resource Development Corporation)</strong>, is a Malaysian government agency under the Ministry of Human Resources.
            </p>
            <p>
              Its primary role is to collect levy from employers and use these funds to support employee training and development programs across Malaysia.
            </p>

            <div className="bg-hrdf-light/10 rounded-lg p-6 my-6 not-prose">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Key Facts About HRDF</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-hrdf mr-2 font-bold">•</span>
                  <span>Established under PSMB Act 2001</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hrdf mr-2 font-bold">•</span>
                  <span>Mandatory for companies with 10+ Malaysian employees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hrdf mr-2 font-bold">•</span>
                  <span>Levy rate: 1% of monthly wages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hrdf mr-2 font-bold">•</span>
                  <span>Over 1,000 registered training providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hrdf mr-2 font-bold">•</span>
                  <span>Claims processed through e-TRiS online system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HRDF Levy Calculation */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How is HRDF Levy Calculated?
          </h2>

          <QuickAnswer
            question="How much is HRDF levy?"
            answer="HRDF levy is 1% of employees' monthly wages. Wages include basic salary plus fixed allowances. For example: If your company has total monthly wages of RM500,000, your HRDF levy is RM5,000 per month (RM60,000 per year)."
          />

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mt-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Levy Calculation Examples</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Total Monthly Wages</th>
                    <th className="px-4 py-3 text-left font-semibold">Monthly Levy (1%)</th>
                    <th className="px-4 py-3 text-left font-semibold">Annual Levy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-3">RM100,000</td><td className="px-4 py-3">RM1,000</td><td className="px-4 py-3">RM12,000</td></tr>
                  <tr><td className="px-4 py-3">RM250,000</td><td className="px-4 py-3">RM2,500</td><td className="px-4 py-3">RM30,000</td></tr>
                  <tr><td className="px-4 py-3">RM500,000</td><td className="px-4 py-3">RM5,000</td><td className="px-4 py-3">RM60,000</td></tr>
                  <tr><td className="px-4 py-3">RM1,000,000</td><td className="px-4 py-3">RM10,000</td><td className="px-4 py-3">RM120,000</td></tr>
                </tbody>
              </table>
            </div>
            <Link href="/tools/hrdf-calculator" className="inline-block mt-4 text-hrdf font-medium hover:underline">
              Calculate your HRDF levy →
            </Link>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How to Claim HRDF: Step-by-Step Guide
          </h2>

          <div className="space-y-4">
            {claimSteps.map((item) => (
              <div key={item.step} className="flex items-start bg-gray-50 rounded-lg p-5">
                <div className="w-10 h-10 bg-hrdf rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HRDF Schemes */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            HRDF Training Schemes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {schemes.map((scheme) => (
              <div key={scheme.name} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <span className="bg-hrdf text-white px-3 py-1 rounded text-sm font-semibold mr-3">
                    {scheme.name}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{scheme.fullName}</h3>
                <p className="text-gray-600 text-sm mb-3">{scheme.description}</p>
                <div className="text-sm">
                  <p><strong className="text-gray-700">Max Claim:</strong> <span className="text-hrdf">{scheme.maxClaim}</span></p>
                  <p><strong className="text-gray-700">Eligibility:</strong> {scheme.eligibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            HRDF Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hrdf">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find HRDF-Approved Training Providers
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Browse our directory of 109+ HRD Corp registered training companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hrdf-providers" className="bg-white text-hrdf px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
              Browse HRDF Providers
            </Link>
            <Link href="/tools/hrdf-calculator" className="bg-hrdf-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-hrdf-dark/90 transition-colors inline-block border border-white/20">
              Calculate Your Levy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
