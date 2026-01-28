'use client'

import { useState, useEffect, useCallback } from 'react'

interface FloatingElementsProps {
  onOpenQuoteModal: () => void
}

const socialProofs = [
  { company: 'A manufacturing company', location: 'Selangor', action: 'requested quotes', time: '2 minutes ago' },
  { company: 'An IT company', location: 'KL', action: 'requested quotes', time: '5 minutes ago' },
  { company: 'A logistics firm', location: 'Penang', action: 'is viewing providers', time: 'Just now' },
  { company: 'A retail chain', location: 'Johor', action: 'requested quotes', time: '8 minutes ago' },
  { company: 'A consulting firm', location: 'Selangor', action: 'is comparing providers', time: 'Just now' },
  { company: 'An F&B company', location: 'KL', action: 'requested quotes', time: '3 minutes ago' },
  { company: 'A tech startup', location: 'Penang', action: 'requested quotes', time: '12 minutes ago' },
  { company: 'A healthcare provider', location: 'Melaka', action: 'is viewing providers', time: 'Just now' },
]

export default function FloatingElements({ onOpenQuoteModal }: FloatingElementsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showMobileCTA, setShowMobileCTA] = useState(false)
  const [showSocialProof, setShowSocialProof] = useState(false)
  const [currentProofIndex, setCurrentProofIndex] = useState(0)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowBackToTop(scrollY > 500)
      setShowMobileCTA(scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Social proof timer
  useEffect(() => {
    const showNotification = () => {
      setCurrentProofIndex(Math.floor(Math.random() * socialProofs.length))
      setShowSocialProof(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setShowSocialProof(false)
      }, 5000)
    }

    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(() => {
      showNotification()
    }, 10000)

    // Then show every 20-40 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 20000 + 20000 // 20-40 seconds
      setTimeout(showNotification, randomDelay)
    }, 40000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const currentProof = socialProofs[currentProofIndex]

  return (
    <>
      {/* Social Proof Notification - Bottom Left */}
      {showSocialProof && (
        <div className="fixed bottom-20 left-4 z-40 bg-white shadow-lg rounded-lg p-3 max-w-xs animate-slide-up border border-gray-100">
          <button
            onClick={() => setShowSocialProof(false)}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 p-1"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center gap-3 pr-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">{currentProof.company} from {currentProof.location}</p>
              <p className="text-gray-500 text-xs">{currentProof.action} • {currentProof.time}</p>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button - Bottom Right */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-4 z-40 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all border border-gray-200 animate-fade-in"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Desktop Floating CTA - Bottom Right, above back-to-top */}
      <div className="hidden md:block fixed bottom-20 right-4 z-50">
        <button
          onClick={onOpenQuoteModal}
          className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Get Free Quotes
        </button>
      </div>

      {/* Mobile Floating CTA Bar - Bottom */}
      {showMobileCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-3 md:hidden animate-slide-up">
          <button
            onClick={onOpenQuoteModal}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Get Free Quotes
          </button>
        </div>
      )}
    </>
  )
}
