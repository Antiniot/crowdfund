import { Reward } from '../types'

interface RewardCardProps {
  reward: Reward
  onSelect: () => void
}

const RewardCard = ({ reward, onSelect }: RewardCardProps) => {
  const isOutOfStock = reward.left === 0

  return (
    <div className={`border-2 rounded-lg p-6 md:p-8 ${isOutOfStock ? 'opacity-50' : 'border-gray-200'}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-0">
          {reward.title}
        </h3>
        <p className="text-moderate-cyan font-medium text-sm md:text-base">
          Pledge ${reward.pledgeAmount} or more
        </p>
      </div>
      
      <p className="text-dark-gray mb-6 leading-relaxed text-sm md:text-base">
        {reward.description}
      </p>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl md:text-4xl font-bold text-black">{reward.left}</span>
          <span className="text-dark-gray text-sm md:text-base">left</span>
        </div>
        
        <button
          onClick={onSelect}
          disabled={isOutOfStock}
          className={`px-6 md:px-8 py-3 rounded-full font-bold transition-colors text-sm md:text-base ${
            isOutOfStock
              ? 'bg-gray-200 text-dark-gray cursor-not-allowed'
              : 'bg-moderate-cyan hover:bg-dark-cyan text-white'
          }`}
        >
          {isOutOfStock ? 'Out of Stock' : 'Select Reward'}
        </button>
      </div>
    </div>
  )
}

export default RewardCard

