import Link from 'next/link'
import Image from 'next/image'
import { Provider } from '@/lib/providers'

interface ProviderCardProps {
  provider: Provider
  onGetQuote: (providerName: string) => void
}

// Get logo URL from website using Google Favicon API
function getLogoUrl(website: string | undefined): string | null {
  if (!website) return null
  try {
    const domain = new URL(website).hostname
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
  } catch {
    return null
  }
}

// Get initials from company name for fallback
function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()
}

export default function ProviderCard({ provider, onGetQuote }: ProviderCardProps) {
  const logoUrl = getLogoUrl(provider.website)

  return (
    <div className="card p-6 h-full flex flex-col">
      {/* Header: Logo + Name + Rating */}
      <div className="flex items-start gap-3 mb-4">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden mt-0.5">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`${provider.name} logo`}
              width={40}
              height={40}
              className="object-contain"
              unoptimized
            />
          ) : (
            <span className="text-sm font-bold text-primary-600">
              {getInitials(provider.name)}
            </span>
          )}
        </div>

        {/* Name + Location */}
        <div className="flex-1 min-w-0">
          <Link href={`/providers/${provider.slug}`}>
            <h3 className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2 leading-tight min-h-[2.5rem]">
              {provider.name}
            </h3>
          </Link>
          <div className="flex items-center mt-1.5 gap-2 flex-wrap">
            <span className="badge badge-location text-xs">
              {provider.location}
            </span>
            {provider.hrdfApproved && (
              <span className="badge badge-hrdf text-xs font-semibold">
                HRDF
              </span>
            )}
          </div>
        </div>

        {/* Rating - fixed top right */}
        <div className="flex items-center bg-primary-50 px-2 py-1 rounded-lg flex-shrink-0">
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm font-semibold text-primary-600">
            {provider.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Body: Specializations + Description */}
      <div className="flex-1 flex flex-col">
        {/* Specializations */}
        <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.75rem]">
          {provider.specializations.slice(0, 3).map((spec) => (
            <span key={spec} className="badge badge-category text-xs">
              {spec}
            </span>
          ))}
        </div>

        {/* Description Preview */}
        <p className="text-gray-600 text-sm line-clamp-2 flex-1">
          {provider.tagline}
        </p>
      </div>

      {/* Footer: Price + Actions */}
      <div className="mt-auto pt-4">
        {/* Price Range */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="capitalize">{provider.priceRange.replace('-', ' ')}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/providers/${provider.slug}`}
            className="flex-1 text-center py-2 px-4 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors text-sm"
          >
            View Profile
          </Link>
          <button
            onClick={() => onGetQuote(provider.name)}
            className="flex-1 py-2 px-4 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors text-sm"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}
