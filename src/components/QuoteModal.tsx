'use client'

import { useState, useEffect } from 'react'
import { TRAINING_TYPES, PARTICIPANT_RANGES, BUDGET_RANGES } from '@/lib/constants'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  preferredProvider?: string
}

interface FormData {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  trainingType: string
  participants: string
  budget: string
  hrdfRequired: boolean
  details: string
  preferredProvider: string
}

export default function QuoteModal({ isOpen, onClose, preferredProvider = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    trainingType: '',
    participants: '',
    budget: '',
    hrdfRequired: false,
    details: '',
    preferredProvider: preferredProvider,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setFormData(prev => ({ ...prev, preferredProvider }))
  }, [preferredProvider])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit quote request')
      }

      setIsSuccess(true)
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        trainingType: '',
        participants: '',
        budget: '',
        hrdfRequired: false,
        details: '',
        preferredProvider: '',
      })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl transform transition-all">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6 md:p-8">
            {isSuccess ? (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  We&apos;ll connect you with top providers within 24 hours!
                </p>
                <button onClick={handleClose} className="btn-primary">
                  Close
                </button>
              </div>
            ) : (
              /* Form State */
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Get Free Training Quotes</h2>
                  <p className="text-gray-600 mt-1">
                    Tell us what you need and we&apos;ll match you with providers
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="input-field"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        className="input-field"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="input-field"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="input-field"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Training Type *
                    </label>
                    <select
                      required
                      className="input-field"
                      value={formData.trainingType}
                      onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                    >
                      <option value="">Select training type</option>
                      {TRAINING_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Participants *
                      </label>
                      <select
                        required
                        className="input-field"
                        value={formData.participants}
                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                      >
                        <option value="">Select range</option>
                        {PARTICIPANT_RANGES.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range *
                      </label>
                      <select
                        required
                        className="input-field"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Select budget</option>
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hrdfRequired"
                      className="w-4 h-4 text-accent-600 border-gray-300 rounded focus:ring-accent-500"
                      checked={formData.hrdfRequired}
                      onChange={(e) => setFormData({ ...formData, hrdfRequired: e.target.checked })}
                    />
                    <label htmlFor="hrdfRequired" className="ml-2 text-sm text-gray-700">
                      HRDF Claimable Required
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Training Details
                    </label>
                    <textarea
                      rows={3}
                      className="input-field"
                      placeholder="Tell us more about your training needs..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quotes'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to be contacted by training providers.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
