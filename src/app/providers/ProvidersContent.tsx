'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProviderCard, useQuoteModal } from '@/components'
import { providers } from '@/lib/providers'
import { TRAINING_TYPES, ALL_STATES, PRICE_RANGES } from '@/lib/constants'
import { getCurrentYear } from '@/lib/utils'

type SortOption = 'featured' | 'rating' | 'alphabetical'

export default function ProvidersContent() {
  const currentYear = getCurrentYear()
  const searchParams = useSearchParams()
  const { openQuoteModal } = useQuoteModal()

  const [location, setLocation] = useState(searchParams.get('location') || '')
  const [trainingType, setTrainingType] = useState(searchParams.get('type') || '')
  const [hrdfOnly, setHrdfOnly] = useState(false)
  const [priceRange, setPriceRange] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const ITEMS_PER_PAGE = 9

  useEffect(() => {
    const locationParam = searchParams.get('location')
    const typeParam = searchParams.get('type')
    if (locationParam) setLocation(locationParam)
    if (typeParam) setTrainingType(typeParam)
  }, [searchParams])

  const filteredProviders = useMemo(() => {
    let filtered = [...providers]

    if (location) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase() === location.toLowerCase()
      )
    }

    if (trainingType) {
      filtered = filtered.filter(p =>
        p.specializations.some(s =>
          s.toLowerCase().includes(trainingType.toLowerCase())
        )
      )
    }

    if (hrdfOnly) {
      filtered = filtered.filter(p => p.hrdfApproved)
    }

    if (priceRange) {
      filtered = filtered.filter(p => p.priceRange === priceRange)
    }

    switch (sortBy) {
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return filtered
  }, [location, trainingType, hrdfOnly, priceRange, sortBy])

  const totalPages = Math.ceil(filteredProviders.length / ITEMS_PER_PAGE)
  const paginatedProviders = filteredProviders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const clearFilters = () => {
    setLocation('')
    setTrainingType('')
    setHrdfOnly(false)
    setPriceRange('')
    setCurrentPage(1)
  }

  const hasActiveFilters = location || trainingType || hrdfOnly || priceRange

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Corporate Training Providers in Malaysia ({currentYear})
          </h1>
          <p className="text-primary-100">
            Browse and compare {providers.length}+ training companies
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="lg:hidden flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
            {hasActiveFilters && (
              <span className="bg-accent-600 text-white text-xs px-2 py-0.5 rounded-full">
                Active
              </span>
            )}
          </button>

          {/* Filters Sidebar */}
          <aside className={`lg:w-72 ${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent-600 hover:text-accent-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  className="input-field"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value)
                    setCurrentPage(1)
                  }}
                >
                  <option value="">All States</option>
                  {ALL_STATES.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Training Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Training Type
                </label>
                <select
                  className="input-field"
                  value={trainingType}
                  onChange={(e) => {
                    setTrainingType(e.target.value)
                    setCurrentPage(1)
                  }}
                >
                  <option value="">All Types</option>
                  {TRAINING_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* HRDF Filter */}
              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-hrdf border-gray-300 rounded focus:ring-hrdf"
                    checked={hrdfOnly}
                    onChange={(e) => {
                      setHrdfOnly(e.target.checked)
                      setCurrentPage(1)
                    }}
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    HRDF Approved Only
                  </span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-8">
                  Filter for claimable training
                </p>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <label key={range.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        className="w-4 h-4 text-accent-600 border-gray-300 focus:ring-accent-500"
                        checked={priceRange === range.value}
                        onChange={() => {
                          setPriceRange(range.value)
                          setCurrentPage(1)
                        }}
                      />
                      <span className="ml-3 text-sm text-gray-700">
                        {range.label}
                        <span className="text-gray-500 text-xs ml-1">({range.description})</span>
                      </span>
                    </label>
                  ))}
                  {priceRange && (
                    <button
                      onClick={() => setPriceRange('')}
                      className="text-xs text-accent-600 hover:text-accent-700 mt-1"
                    >
                      Clear price filter
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProviders.length}</span> providers
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Rating</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Provider Grid */}
            {paginatedProviders.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedProviders.map((provider) => (
                    <ProviderCard
                      key={provider.id}
                      provider={provider}
                      onGetQuote={openQuoteModal}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg ${
                          currentPage === page
                            ? 'bg-primary-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No providers found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
