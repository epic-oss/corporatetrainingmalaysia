import Link from 'next/link'

interface ProviderRankCardProps {
  rank: number
  name: string
  tagline: string
  rating: number
  reviewCount: number
  location: string
  specializations: string[]
  hrdfApproved: boolean
  highlights: string[]
  priceRange: string
  bestFor: string
  website: string
  ctaLink: string
}

export default function ProviderRankCard({
  rank,
  name,
  tagline,
  rating,
  reviewCount,
  location,
  specializations,
  hrdfApproved,
  highlights,
  priceRange,
  bestFor,
  website,
  ctaLink,
}: ProviderRankCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      {/* Header with rank */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-600">#{rank}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-primary-100 text-sm">{tagline}</p>
          </div>
        </div>
        {hrdfApproved && (
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            HRDF Approved
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating and Location Row */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-gray-900">{rating}</span>
            <span className="text-gray-500 text-sm">({reviewCount.toLocaleString()} reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2 mb-4">
          {specializations.map((spec, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Price and Best For */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Price Range</p>
            <p className="font-semibold text-gray-900">{priceRange}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Best For</p>
            <p className="font-semibold text-gray-900">{bestFor}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={ctaLink}
            className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-primary-700 transition-colors"
          >
            View Profile
          </Link>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {website}
          </a>
        </div>
      </div>
    </div>
  )
}
