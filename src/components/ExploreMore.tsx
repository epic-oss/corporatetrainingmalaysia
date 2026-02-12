import Link from 'next/link'
import { LOCATIONS, CATEGORIES } from '@/lib/constants'

interface ExploreMoreProps {
  currentPath?: string
  showLocations?: boolean
  showCategories?: boolean
  showTools?: boolean
}

const usefulLinks = [
  { href: '/providers', label: 'All Providers' },
  { href: '/hrdf-providers', label: 'HRDF Providers' },
  { href: '/top-training-providers-malaysia', label: 'Top 10 Providers' },
  { href: '/tools/hrdf-calculator', label: 'HRDF Calculator' },
  { href: '/corporate-training-cost-malaysia', label: 'Training Costs' },
  { href: '/become-hrdf-provider', label: 'Become HRDF Provider' },
  { href: '/best-corporate-training-malaysia', label: 'Best Training Guide' },
]

export default function ExploreMore({
  currentPath,
  showLocations = true,
  showCategories = true,
  showTools = true,
}: ExploreMoreProps) {
  return (
    <div className="mt-12 border-t border-gray-200 pt-10">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Explore More</h3>

      {showLocations && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Training by Location</h4>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => {
              const href = `/corporate-training-${loc.slug}`
              if (href === currentPath) return null
              return (
                <Link
                  key={loc.slug}
                  href={href}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
                >
                  {loc.shortName} Training
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {showCategories && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Training Categories</h4>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const href = `/categories/${cat.slug}`
              if (href === currentPath) return null
              return (
                <Link
                  key={cat.slug}
                  href={href}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
                >
                  {cat.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {showTools && (
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Useful Resources</h4>
          <div className="flex flex-wrap gap-2">
            {usefulLinks.map((link) => {
              if (link.href === currentPath) return null
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
