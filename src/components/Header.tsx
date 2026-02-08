'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES, LOCATIONS } from '@/lib/constants'

interface HeaderProps {
  onOpenQuoteModal: () => void
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="CorporateTrainingMY"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-primary-600 hidden sm:inline">
              CorporateTraining<span className="text-accent-600">MY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5">
            <Link
              href="/providers"
              className="text-sm text-gray-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap"
            >
              Providers
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                onBlur={() => setTimeout(() => setIsCategoriesOpen(false), 150)}
                className="text-sm text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center whitespace-nowrap"
              >
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categories/${category.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                onBlur={() => setTimeout(() => setIsLocationsOpen(false), 150)}
                className="text-sm text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center whitespace-nowrap"
              >
                Locations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {LOCATIONS.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/corporate-training-${location.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/hrdf-providers"
              className="text-sm text-gray-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap"
            >
              HRDF Providers
            </Link>

            <Link
              href="/tools/hrdf-calculator"
              className="text-sm text-gray-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap"
            >
              Calculator
            </Link>

            <Link
              href="/about"
              className="text-sm text-gray-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap"
            >
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/for-providers"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors whitespace-nowrap"
            >
              List Your Company
            </Link>
            <button onClick={onOpenQuoteModal} className="btn-accent text-sm px-4 py-2">
              Get Quotes
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/providers"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Providers
              </Link>

              <div className="py-2">
                <span className="text-gray-500 text-sm uppercase tracking-wider">Categories</span>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categories/${category.slug}`}
                      className="text-gray-700 hover:text-primary-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2">
                <span className="text-gray-500 text-sm uppercase tracking-wider">Locations</span>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  {LOCATIONS.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/corporate-training-${location.slug}`}
                      className="text-gray-700 hover:text-primary-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/hrdf-providers"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HRDF Providers
              </Link>

              <Link
                href="/tools/hrdf-calculator"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HRDF Calculator
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/for-providers"
                className="text-primary-600 hover:text-primary-700 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                List Your Company
              </Link>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onOpenQuoteModal()
                }}
                className="btn-accent w-full mt-4"
              >
                Get Quotes
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
