'use client'

import { useState, createContext, useContext, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import QuoteModal from './QuoteModal'
import FloatingElements from './FloatingElements'

interface QuoteModalContextType {
  openQuoteModal: (providerName?: string) => void
  closeQuoteModal: () => void
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
})

export function useQuoteModal() {
  return useContext(QuoteModalContext)
}

interface RootLayoutClientProps {
  children: ReactNode
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [preferredProvider, setPreferredProvider] = useState('')

  const openQuoteModal = (providerName?: string) => {
    setPreferredProvider(providerName || '')
    setIsQuoteModalOpen(true)
  }

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false)
    setPreferredProvider('')
  }

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      <div className="min-h-screen flex flex-col">
        <Header onOpenQuoteModal={() => openQuoteModal()} />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={closeQuoteModal}
          preferredProvider={preferredProvider}
        />
        <FloatingElements onOpenQuoteModal={() => openQuoteModal()} />
      </div>
    </QuoteModalContext.Provider>
  )
}
