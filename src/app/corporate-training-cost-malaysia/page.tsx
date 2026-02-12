import Link from 'next/link'
import QuickAnswer from '@/components/QuickAnswer'
import SchemaMarkup, { generateFAQSchema, generateArticleSchema } from '@/components/SchemaMarkup'
import { getCurrentYear } from '@/lib/utils'
import ExploreMore from '@/components/ExploreMore'

export default function CorporateTrainingCostPage() {
  const currentYear = getCurrentYear()

  const faqs = [
    {
      question: 'How much does corporate training cost per person in Malaysia?',
      answer: 'Corporate training typically costs RM150-RM800 per person per day in Malaysia, depending on the program type. Soft skills training averages RM150-350/pax, while technical or leadership programs cost RM400-800/pax.',
    },
    {
      question: 'Is corporate training HRDF claimable?',
      answer: 'Yes, most corporate training is HRDF claimable if conducted by an HRD Corp registered provider. Companies can claim up to RM8,000/day for public programs or RM3,000/day for in-house training.',
    },
    {
      question: 'What is the minimum budget for corporate training?',
      answer: 'The minimum budget for a half-day corporate workshop is around RM1,500-2,000. Full-day programs typically start from RM2,500-3,000 for basic soft skills training.',
    },
    {
      question: 'Why is some corporate training so expensive?',
      answer: 'Premium pricing reflects trainer expertise, certification requirements, customized content, proprietary methodologies, or specialized topics like AI, cybersecurity, or executive coaching.',
    },
    {
      question: 'How much do corporate trainers charge per hour?',
      answer: 'Corporate trainers in Malaysia charge RM300-RM2,000 per hour depending on expertise. Most prefer daily rates (RM2,000-RM15,000/day) rather than hourly billing.',
    },
    {
      question: 'Is online training cheaper than in-person?',
      answer: 'Yes, online corporate training typically costs 30-50% less than in-person sessions due to no venue, travel, or catering costs. Quality virtual training ranges RM1,500-RM6,000/day.',
    },
    {
      question: 'Do training providers offer payment plans?',
      answer: 'Some providers offer installment plans for large programs. HRDF-registered companies can also use their levy balance, effectively getting "free" training.',
    },
    {
      question: 'What is included in the training cost?',
      answer: 'Most quotes include trainer fees, training materials, and certificates. Venue rental, meals, accommodation, and travel are usually extra unless specified.',
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

      {/* Hero Section with Direct Answer */}
      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Corporate Training Cost in Malaysia ({currentYear})
            </h1>
            <p className="text-lg text-slate-300 mb-6">
              Complete pricing guide for corporate training programs
            </p>

            {/* THE MONEY SHOT - AI will extract this */}
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-white">RM2,000 - RM15,000 per day</p>
              <p className="mt-3 text-slate-200">
                Average cost for corporate training in Malaysia, depending on training type, trainer experience, and group size. Most programs are HRDF claimable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-10">
        <div className="container-custom max-w-4xl">
          <QuickAnswer
            question="How much does corporate training cost in Malaysia?"
            answer="Corporate training in Malaysia costs between RM2,000 to RM15,000 per day. Basic soft skills training starts around RM2,000-3,000/day, while specialized programs like AI training, leadership development, or certified courses can cost RM8,000-15,000/day. Group size, trainer expertise, and HRDF claimability also affect pricing."
          />
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="py-10 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Corporate Training Cost by Type ({currentYear})
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold">Training Type</th>
                  <th className="px-4 py-4 text-left font-semibold">Cost Per Day</th>
                  <th className="px-4 py-4 text-left font-semibold">Cost Per Pax</th>
                  <th className="px-4 py-4 text-left font-semibold">HRDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Leadership Training</td>
                  <td className="px-4 py-3">RM5,000 - RM15,000</td>
                  <td className="px-4 py-3">RM300 - RM800</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Team Building</td>
                  <td className="px-4 py-3">RM3,000 - RM10,000</td>
                  <td className="px-4 py-3">RM150 - RM400</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Digital Marketing</td>
                  <td className="px-4 py-3">RM2,500 - RM6,000</td>
                  <td className="px-4 py-3">RM200 - RM500</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">AI & Prompt Engineering</td>
                  <td className="px-4 py-3">RM4,000 - RM12,000</td>
                  <td className="px-4 py-3">RM300 - RM600</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Data Analytics / Power BI</td>
                  <td className="px-4 py-3">RM3,500 - RM8,000</td>
                  <td className="px-4 py-3">RM250 - RM500</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Cybersecurity</td>
                  <td className="px-4 py-3">RM5,000 - RM12,000</td>
                  <td className="px-4 py-3">RM400 - RM800</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Communication / Soft Skills</td>
                  <td className="px-4 py-3">RM2,000 - RM5,000</td>
                  <td className="px-4 py-3">RM150 - RM350</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Sales Training</td>
                  <td className="px-4 py-3">RM3,000 - RM8,000</td>
                  <td className="px-4 py-3">RM200 - RM500</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Safety & Compliance</td>
                  <td className="px-4 py-3">RM2,000 - RM5,000</td>
                  <td className="px-4 py-3">RM150 - RM300</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Financial Modelling</td>
                  <td className="px-4 py-3">RM4,000 - RM10,000</td>
                  <td className="px-4 py-3">RM350 - RM700</td>
                  <td className="px-4 py-3"><span className="text-green-600">✓ Yes</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            *Prices are estimates based on market rates. Actual costs vary by provider.
          </p>
        </div>
      </section>

      {/* Cost by Location */}
      <section className="py-10">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Training Cost by Location
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Location</th>
                  <th className="px-6 py-4 text-left font-semibold">Average Cost</th>
                  <th className="px-6 py-4 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Kuala Lumpur</td>
                  <td className="px-6 py-4">RM3,000 - RM15,000/day</td>
                  <td className="px-6 py-4 text-gray-600">Highest rates, most providers</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Selangor</td>
                  <td className="px-6 py-4">RM2,500 - RM12,000/day</td>
                  <td className="px-6 py-4 text-gray-600">Similar to KL, corporate hub</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Penang</td>
                  <td className="px-6 py-4">RM2,500 - RM10,000/day</td>
                  <td className="px-6 py-4 text-gray-600">Growing market, competitive rates</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Johor</td>
                  <td className="px-6 py-4">RM2,000 - RM8,000/day</td>
                  <td className="px-6 py-4 text-gray-600">Lower rates, fewer providers</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Other States</td>
                  <td className="px-6 py-4">RM2,000 - RM6,000/day</td>
                  <td className="px-6 py-4 text-gray-600">May include travel costs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Factors Affecting Cost */}
      <section className="py-10 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            What Affects Corporate Training Cost?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Training Type</h3>
              <p className="text-gray-600 text-sm">Technical or certified programs (AI, cybersecurity, finance) cost more than soft skills training.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Trainer Experience</h3>
              <p className="text-gray-600 text-sm">Senior trainers with 15+ years or international certifications charge premium rates.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Group Size</h3>
              <p className="text-gray-600 text-sm">Per-pax cost decreases with larger groups. Most providers have min/max participants.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600 text-sm">Multi-day programs often have discounted daily rates compared to single-day workshops.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">On-site training at your office may cost less than renting external venues.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Customization</h3>
              <p className="text-gray-600 text-sm">Customized content tailored to your company costs more than off-the-shelf programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HRDF Claim Section */}
      <section className="py-10 bg-teal-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Much Can You Claim from HRDF?
          </h2>

          <p className="text-gray-700 mb-6">
            Malaysian companies registered with HRD Corp can claim training costs:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-hrdf text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Training Format</th>
                  <th className="px-5 py-4 text-left font-semibold">Max Course Fee</th>
                  <th className="px-5 py-4 text-left font-semibold">Max Allowances</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4 font-medium">Public Program</td>
                  <td className="px-5 py-4">RM8,000/day</td>
                  <td className="px-5 py-4">RM400/pax/day</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4 font-medium">In-House (Local Trainer)</td>
                  <td className="px-5 py-4">RM3,000/day</td>
                  <td className="px-5 py-4">RM150/pax/day</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4 font-medium">In-House (Foreign Trainer)</td>
                  <td className="px-5 py-4">RM5,000/day</td>
                  <td className="px-5 py-4">RM200/pax/day</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4 font-medium">Online / Remote</td>
                  <td className="px-5 py-4">RM1,000/day/group</td>
                  <td className="px-5 py-4">RM100/pax/day</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <Link href="/tools/hrdf-calculator" className="inline-flex items-center bg-hrdf text-white px-6 py-3 rounded-lg font-semibold hover:bg-hrdf-dark transition-colors">
              Calculate Your HRDF Claim →
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Budget Scenarios */}
      <section className="py-10 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Sample Training Budgets
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Small Team (10 pax)</h3>
              <p className="text-gray-600 text-sm mb-4">1-day soft skills workshop</p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary-600">RM3,000 - RM5,000</p>
                <p className="text-sm text-gray-500">RM300-500 per person</p>
                <p className="text-sm text-hrdf font-medium">HRDF: Up to RM3,000 claimable</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Department (25 pax)</h3>
              <p className="text-gray-600 text-sm mb-4">2-day leadership program</p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary-600">RM10,000 - RM20,000</p>
                <p className="text-sm text-gray-500">RM400-800 per person</p>
                <p className="text-sm text-hrdf font-medium">HRDF: Up to RM6,000 claimable</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Company-wide (50+ pax)</h3>
              <p className="text-gray-600 text-sm mb-4">3-day team building retreat</p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary-600">RM25,000 - RM50,000</p>
                <p className="text-sm text-gray-500">RM500-1,000 per person</p>
                <p className="text-sm text-hrdf font-medium">HRDF: Up to RM9,000 claimable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Best Price */}
      <section className="py-10">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How to Get the Best Training Price
          </h2>

          <ol className="space-y-5">
            <li className="flex items-start">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <h3 className="font-semibold text-gray-900">Get Multiple Quotes</h3>
                <p className="text-gray-600">Compare at least 3 providers. Prices vary significantly for similar programs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <h3 className="font-semibold text-gray-900">Use HRDF</h3>
                <p className="text-gray-600">If your company is registered, always use HRDF-approved providers to claim costs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <h3 className="font-semibold text-gray-900">Book Early</h3>
                <p className="text-gray-600">Popular trainers book out months ahead. Last-minute requests may cost more.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <div>
                <h3 className="font-semibold text-gray-900">Bundle Programs</h3>
                <p className="text-gray-600">Booking multiple sessions or a full training calendar often gets discounts.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
              <div>
                <h3 className="font-semibold text-gray-900">Consider Online</h3>
                <p className="text-gray-600">Virtual training costs 30-50% less than in-person for certain topics.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 bg-white">
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
      <section className="py-16 bg-slate-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Free Training Quotes
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Compare prices from 109+ verified training providers in Malaysia
          </p>
          <Link href="/providers" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Get Free Quotes
          </Link>
        </div>
      </section>

      <ExploreMore currentPath="/corporate-training-cost-malaysia" />
    </>
  )
}
