import { STATS } from '@/lib/constants'

export default function StatsBar() {
  return (
    <div className="bg-primary-600 py-4">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <span className="text-2xl md:text-3xl font-bold text-white">{STATS.providers}</span>
            <p className="text-primary-200 text-sm">Providers</p>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-bold text-white">{STATS.categories}</span>
            <p className="text-primary-200 text-sm">Categories</p>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-bold text-white">{STATS.quotes}</span>
            <p className="text-primary-200 text-sm">Always Free</p>
          </div>
        </div>
      </div>
    </div>
  )
}
