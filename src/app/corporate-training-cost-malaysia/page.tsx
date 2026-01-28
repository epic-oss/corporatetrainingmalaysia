import Link from 'next/link'
import QuickAnswer from '@/components/QuickAnswer'
import SchemaMarkup, { generateFAQSchema, generateArticleSchema } from '@/components/SchemaMarkup'
import { getCurrentYear } from '@/lib/utils'

export default function CorporateTrainingCostPage() {
  const currentYear = getCurrentYear()

  const faqs = [
    {
      question: 'How much does corporate training cost in Malaysia?',
      answer: 'Corporate training in Malaysia costs between RM2,000 to RM15,000 per day. The exact cost depends on the training type, trainer expertise, group size, and whether the program is customized or off-the-shelf.',
    },
    {
      question: 'What is the average cost of leadership training in Malaysia?',
      answer: 'Leadership training in Malaysia typically costs RM5,000 to RM15,000 per day. Executive coaching and C-suite programs can cost RM8,000 to RM20,000 per day due to the specialized expertise required.',
    },
    {
      question: 'How much does team building cost in Malaysia?',
      answer: 'Team building programs in Malaysia range from RM3,000 to RM8,000 per day. Outdoor adventure-based team building tends to be on the higher end, while indoor workshop-style programs are more affordable.',
    },
    {
      question: 'Can I claim corporate training costs from HRDF?',
      answer: 'Yes, HRDF-registered companies can claim training costs. Companies contribute 1% of employee wages as levy and can claim up to RM8,000 per day for approved programs from registered training providers.',
    },
    {
      question: 'What factors affect corporate training prices in Malaysia?',
      answer: 'Key factors include: trainer expertise and reputation, program customization level, number of participants, training duration, venue requirements, and whether materials are included.',
    },
  ]

  return (
    <>
      <SchemaMarkup schema={generateFAQSchema(faqs)} />
      <SchemaMarkup schema={generateArticleSchema(
        `Corporate Training Cost in Malaysia ${currentYear}: Complete Price Guide`,
        'Comprehensive guide to corporate training costs in Malaysia. Learn about pricing for leadership, team building, and technical training programs.',
        '2024-01-01',
        `${currentYear}-01-15`
      )} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Corporate Training Cost in Malaysia ({currentYear})
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Complete pricing guide for corporate training programs
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <QuickAnswer
            question="How much does corporate training cost in Malaysia?"
            answer="Corporate training in Malaysia typically costs RM2,000-RM15,000 per day. Leadership training averages RM5,000-RM15,000/day, team building RM3,000-RM8,000/day, and technical training RM4,000-RM12,000/day. HRDF-registered companies can claim up to RM8,000/day for approved programs."
          />
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Corporate Training Prices by Type
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Training Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Cost Per Day (RM)</th>
                  <th className="px-6 py-4 text-left font-semibold">HRDF Claimable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Leadership Training</td>
                  <td className="px-6 py-4">RM5,000 - RM15,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Management Training</td>
                  <td className="px-6 py-4">RM4,000 - RM12,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Team Building</td>
                  <td className="px-6 py-4">RM3,000 - RM8,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Sales Training</td>
                  <td className="px-6 py-4">RM3,500 - RM10,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Digital Marketing</td>
                  <td className="px-6 py-4">RM2,500 - RM6,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">AI & Technology Training</td>
                  <td className="px-6 py-4">RM4,000 - RM12,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Soft Skills / Communication</td>
                  <td className="px-6 py-4">RM2,000 - RM5,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Data Analytics / Power BI</td>
                  <td className="px-6 py-4">RM3,500 - RM8,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Cybersecurity Training</td>
                  <td className="px-6 py-4">RM5,000 - RM15,000</td>
                  <td className="px-6 py-4"><span className="text-green-600 font-medium">Yes</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            * Prices are estimates based on market rates as of {currentYear}. Actual costs may vary by provider.
          </p>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Factors That Affect Training Costs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Trainer Expertise</h3>
              <p className="text-gray-600">
                Senior trainers with 15+ years experience and industry certifications command higher fees (RM8,000-RM15,000/day) compared to junior trainers (RM2,000-RM4,000/day).
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Group Size</h3>
              <p className="text-gray-600">
                Most programs are priced for 15-25 participants. Larger groups (30+) may require additional facilitators, increasing costs by 30-50%.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Customization Level</h3>
              <p className="text-gray-600">
                Off-the-shelf programs are cheaper. Fully customized training with company-specific case studies adds 20-40% to the base price.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Duration & Format</h3>
              <p className="text-gray-600">
                Half-day programs cost 60-70% of full-day rates. Multi-day programs often offer discounts of 10-20% per day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HRDF Claim Section */}
      <section className="py-12 bg-hrdf-light/10">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            HRDF Training Cost Claims
          </h2>

          <QuickAnswer
            question="How much can I claim from HRDF for training?"
            answer="HRDF-registered companies can claim up to RM8,000 per day for approved training programs. The exact claimable amount depends on your levy balance, the training scheme used, and the number of participants. Most companies can claim 100% of training costs if they have sufficient levy."
          />

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mt-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">HRDF Claim Limits by Scheme</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-hrdf mr-2">•</span>
                <span><strong>SBL-Khas:</strong> Up to RM8,000/day for external training</span>
              </li>
              <li className="flex items-start">
                <span className="text-hrdf mr-2">•</span>
                <span><strong>SBL:</strong> Claim based on approved course fee</span>
              </li>
              <li className="flex items-start">
                <span className="text-hrdf mr-2">•</span>
                <span><strong>PLT:</strong> Up to RM5,000 for Future Skills programs</span>
              </li>
            </ul>
            <Link href="/tools/hrdf-calculator" className="inline-block mt-4 text-hrdf font-medium hover:underline">
              Calculate your HRDF claim →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
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
      <section className="py-16 bg-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Accurate Quotes for Your Training Needs
          </h2>
          <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto">
            Compare prices from multiple HRDF-approved training providers in Malaysia
          </p>
          <Link href="/providers" className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Browse Training Providers
          </Link>
        </div>
      </section>
    </>
  )
}
