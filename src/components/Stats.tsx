import { ProjectStats } from '../types'

interface StatsProps {
  stats: ProjectStats
  progressPercentage: number
}

const Stats = ({ stats, progressPercentage }: StatsProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 mt-6 md:mt-8 mb-8 md:mb-12">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-8 border-b border-gray-200 pb-8">
          <div className="text-center md:text-left md:border-r border-gray-200 md:pr-12">
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">
              {formatCurrency(stats.totalBacked)}
            </div>
            <div className="text-dark-gray text-sm md:text-base">
              of {formatCurrency(stats.goal)} backed
            </div>
          </div>
          
          <div className="text-center md:text-left md:border-r border-gray-200 md:px-12">
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">
              {formatNumber(stats.totalBackers)}
            </div>
            <div className="text-dark-gray text-sm md:text-base">total backers</div>
          </div>
          
          <div className="text-center md:text-left md:pl-12">
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">
              {stats.daysLeft}
            </div>
            <div className="text-dark-gray text-sm md:text-base">days left</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-moderate-cyan transition-all duration-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats

