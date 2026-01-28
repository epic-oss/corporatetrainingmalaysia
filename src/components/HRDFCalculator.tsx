'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

// Training type configurations based on HRD Corp Allowable Cost Matrix
const TRAINING_TYPES = {
  'in-house-local': {
    label: 'In-house Training (Local Trainer)',
    maxCourseFeePerDay: 3000,
    maxAllowancePerPaxPerDay: 150,
  },
  'in-house-foreign': {
    label: 'In-house Training (Foreign Trainer)',
    maxCourseFeePerDay: 5000,
    maxAllowancePerPaxPerDay: 200,
  },
  'public-program': {
    label: 'Public Program',
    maxCourseFeePerDay: 8000,
    maxAllowancePerPaxPerDay: 400,
  },
  'online-remote': {
    label: 'Online / Remote Training',
    maxCourseFeePerDay: 1000,
    maxAllowancePerPaxPerDay: 100,
  },
  'overseas': {
    label: 'Overseas Training',
    maxCourseFeePerDay: 8000,
    maxAllowancePerPaxPerDay: 500,
  },
}

type TrainingType = keyof typeof TRAINING_TYPES

// Format number with commas
function formatCurrency(amount: number): string {
  return amount.toLocaleString('en-MY', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

export default function HRDFCalculator() {
  // Company Info
  const [numberOfEmployees, setNumberOfEmployees] = useState<number>(50)
  const [averageBasicSalary, setAverageBasicSalary] = useState<number>(3500)
  const [averageFixedAllowances, setAverageFixedAllowances] = useState<number>(500)

  // Training Details
  const [trainingType, setTrainingType] = useState<TrainingType>('in-house-local')
  const [trainingDays, setTrainingDays] = useState<number>(2)
  const [numberOfParticipants, setNumberOfParticipants] = useState<number>(20)
  const [courseFee, setCourseFee] = useState<number>(6000)
  const [includesMeals, setIncludesMeals] = useState<boolean>(true)
  const [includesAccommodation, setIncludesAccommodation] = useState<boolean>(false)

  // Calculate results
  const results = useMemo(() => {
    const config = TRAINING_TYPES[trainingType]

    // Levy Calculation
    const monthlyWagesPerEmployee = averageBasicSalary + averageFixedAllowances
    const totalMonthlyWages = monthlyWagesPerEmployee * numberOfEmployees
    const monthlyLevy = totalMonthlyWages * 0.01
    const annualLevy = monthlyLevy * 12

    // Claimable Amount Calculation
    const maxCourseFeeClaimable = config.maxCourseFeePerDay * trainingDays
    const actualCourseFeeClaimable = Math.min(courseFee, maxCourseFeeClaimable)

    // Allowances calculation
    let allowancePerPax = config.maxAllowancePerPaxPerDay
    if (includesMeals) allowancePerPax += 50 // Meal allowance
    if (includesAccommodation) allowancePerPax += 150 // Accommodation allowance
    const totalAllowances = allowancePerPax * numberOfParticipants * trainingDays
    const maxAllowancesClaimable = config.maxAllowancePerPaxPerDay * numberOfParticipants * trainingDays

    const totalClaimable = actualCourseFeeClaimable + Math.min(totalAllowances, maxAllowancesClaimable)
    const afterServiceFee = totalClaimable * 0.96 // 4% service fee deduction

    return {
      monthlyLevy,
      annualLevy,
      maxCourseFeeClaimable,
      actualCourseFeeClaimable,
      maxAllowancesClaimable,
      totalClaimable,
      afterServiceFee,
      trainingTypeLabel: config.label,
    }
  }, [
    numberOfEmployees,
    averageBasicSalary,
    averageFixedAllowances,
    trainingType,
    trainingDays,
    numberOfParticipants,
    courseFee,
    includesMeals,
    includesAccommodation,
  ])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="space-y-6">
        {/* Company Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Company Information
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Employees
                <span className="text-gray-400 font-normal ml-1">(min. 10 for HRDF)</span>
              </label>
              <input
                type="number"
                min="10"
                value={numberOfEmployees}
                onChange={(e) => setNumberOfEmployees(Math.max(10, parseInt(e.target.value) || 10))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Average Basic Salary (RM)
              </label>
              <input
                type="number"
                min="0"
                value={averageBasicSalary}
                onChange={(e) => setAverageBasicSalary(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Average Fixed Allowances (RM)
                <span className="text-gray-400 font-normal ml-1">(optional)</span>
              </label>
              <input
                type="number"
                min="0"
                value={averageFixedAllowances}
                onChange={(e) => setAverageFixedAllowances(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Training Details */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Training Details
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Training Type
              </label>
              <select
                value={trainingType}
                onChange={(e) => setTrainingType(e.target.value as TrainingType)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {Object.entries(TRAINING_TYPES).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Training Days
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={trainingDays}
                  onChange={(e) => setTrainingDays(Math.max(1, Math.min(30, parseInt(e.target.value) || 1)))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Participants
                </label>
                <input
                  type="number"
                  min="1"
                  value={numberOfParticipants}
                  onChange={(e) => setNumberOfParticipants(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Course Fee (RM)
              </label>
              <input
                type="number"
                min="0"
                value={courseFee}
                onChange={(e) => setCourseFee(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includesMeals}
                  onChange={(e) => setIncludesMeals(e.target.checked)}
                  className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">Include Meals</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includesAccommodation}
                  onChange={(e) => setIncludesAccommodation(e.target.checked)}
                  className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">Include Accommodation</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {/* Levy Results */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Your HRDF Levy Contribution
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-primary-500/30">
              <span className="text-primary-100">Monthly Levy</span>
              <span className="text-2xl font-bold">RM {formatCurrency(results.monthlyLevy)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-primary-100">Annual Levy</span>
              <span className="text-2xl font-bold">RM {formatCurrency(results.annualLevy)}</span>
            </div>
          </div>

          <p className="text-sm text-primary-200 mt-4">
            Based on 1% of total monthly wages (RM {formatCurrency((averageBasicSalary + averageFixedAllowances) * numberOfEmployees)})
          </p>
        </div>

        {/* Claim Results */}
        <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-accent-500">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Training Claim Estimate
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Max Claimable (Course Fee)</span>
              <span className="font-semibold text-gray-900">RM {formatCurrency(results.actualCourseFeeClaimable)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Max Claimable (Allowances)</span>
              <span className="font-semibold text-gray-900">RM {formatCurrency(results.maxAllowancesClaimable)}</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-accent-50 -mx-6 px-6 border-y border-accent-200">
              <span className="font-semibold text-accent-700">Total Claimable</span>
              <span className="text-2xl font-bold text-accent-600">RM {formatCurrency(results.totalClaimable)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">After 4% Service Fee</span>
              <span className="font-semibold text-gray-900">RM {formatCurrency(results.afterServiceFee)}</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 flex items-start gap-1">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Actual claim subject to HRD Corp approval and available levy balance
          </p>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            With <strong>{numberOfEmployees} employees</strong>, your company contributes approximately{' '}
            <strong>RM {formatCurrency(results.annualLevy)}</strong> annually to HRDF.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            For this <strong>{results.trainingTypeLabel}</strong> ({trainingDays} day{trainingDays > 1 ? 's' : ''}, {numberOfParticipants} participant{numberOfParticipants > 1 ? 's' : ''}),
            you can claim up to <strong>RM {formatCurrency(results.totalClaimable)}</strong>{' '}
            (RM {formatCurrency(results.afterServiceFee)} after service fee).
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Find HRDF-Approved Training Providers</h3>
          <p className="text-accent-100 text-sm mb-4">
            Get free quotes from verified corporate training providers in Malaysia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/providers"
              className="flex-1 text-center px-4 py-2 bg-white text-accent-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Providers
            </Link>
            <Link
              href="/hrdf-training-providers-malaysia"
              className="flex-1 text-center px-4 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              HRDF Providers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
