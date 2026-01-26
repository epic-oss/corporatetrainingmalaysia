'use client'

import { Suspense } from 'react'
import ProvidersContent from './ProvidersContent'

export default function ProvidersPage() {
  return (
    <Suspense fallback={<ProvidersLoading />}>
      <ProvidersContent />
    </Suspense>
  )
}

function ProvidersLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <div className="h-10 bg-primary-500 rounded w-2/3 mb-2 animate-pulse"></div>
          <div className="h-6 bg-primary-500 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
