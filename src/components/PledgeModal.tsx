import { useState, useEffect } from 'react'
import { Reward } from '../types'
const iconCloseModal = '/images/icon-close-modal.svg'


interface PledgeModalProps {
  rewards: Reward[]
  selectedReward: string | null
  onClose: () => void
  onPledge: (amount: number, rewardId: string | null) => void
}

const PledgeModal = ({ rewards, selectedReward, onClose, onPledge }: PledgeModalProps) => {
  const [activeReward, setActiveReward] = useState<string | null>(selectedReward || null)
  const [hoveredReward, setHoveredReward] = useState<string | null>(null)
  const [isCloseButtonHovered, setIsCloseButtonHovered] = useState(false)

  useEffect(() => {
    if (selectedReward) {
      setActiveReward(selectedReward)
    }
  }, [selectedReward])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  const [pledgeAmounts, setPledgeAmounts] = useState<Record<string, number>>({
    noReward: 0,
    bamboo: 25,
    black: 75,
    mahogany: 200,
  })

  const handlePledge = (rewardId: string | null) => {
    const amount = rewardId ? pledgeAmounts[rewardId] : pledgeAmounts.noReward
    if (amount > 0) {
      onPledge(amount, rewardId)
    }
  }

  const handleAmountChange = (rewardId: string, value: string) => {
    const numValue = parseInt(value) || 0
    setPledgeAmounts(prev => ({ ...prev, [rewardId]: numValue }))
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full p-6 md:p-8 my-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black">Back this project</h2>
          <button
            onClick={onClose}
            onMouseEnter={() => setIsCloseButtonHovered(true)}
            onMouseLeave={() => setIsCloseButtonHovered(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <img 
              src={iconCloseModal} 
              alt="Close" 
              className="w-4 h-4 transition-all duration-200"
              style={{ 
                filter: isCloseButtonHovered ? 'brightness(0)' : 'none',
                transition: 'filter 0.2s ease-in-out'
              }}
            />
          </button>
        </div>
        
        <p className="text-dark-gray mb-6">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>

        <div className="space-y-4">
          {/* No Reward Option */}
          <div
            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
              activeReward === null
                ? 'border-moderate-cyan'
                : 'border-gray-200 hover:border-moderate-cyan'
            }`}
            onClick={() => setActiveReward(null)}
            onMouseEnter={() => setHoveredReward('noReward')}
            onMouseLeave={() => setHoveredReward(null)}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                  activeReward === null
                    ? 'border-moderate-cyan bg-moderate-cyan'
                    : 'border-gray-300'
                }`}
              >
                {activeReward === null && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3
                    className={`font-bold ${
                      activeReward === null || hoveredReward === 'noReward'
                        ? 'text-moderate-cyan'
                        : 'text-black'
                    }`}
                  >
                    Pledge with no reward
                  </h3>
                </div>
                <p className="text-dark-gray text-sm leading-relaxed">
                  Choose to support us without a reward if you simply believe in our project. 
                  As a backer, you will be signed up to receive product updates via email.
                </p>
              </div>
            </div>

            {activeReward === null && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-dark-gray text-sm">Enter your pledge</div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-gray">$</span>
                      <input
                        type="number"
                        min="1"
                        value={pledgeAmounts.noReward || ''}
                        onChange={(e) => handleAmountChange('noReward', e.target.value)}
                        className="border-2 border-gray-300 rounded-full pl-8 pr-4 py-3 w-32 font-bold focus:outline-none focus:border-moderate-cyan"
                        placeholder="0"
                      />
                    </div>
                    <button
                      onClick={() => handlePledge(null)}
                      disabled={!pledgeAmounts.noReward || pledgeAmounts.noReward < 1}
                      className="bg-moderate-cyan hover:bg-dark-cyan text-white font-bold px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Reward Options */}
          {rewards.map((reward) => {
            const isActive = activeReward === reward.id
            const isOutOfStock = reward.left === 0
            const currentAmount = pledgeAmounts[reward.id] || reward.minPledge

            return (
              <div
                key={reward.id}
                className={`border-2 rounded-lg p-6 transition-all ${
                  isOutOfStock
                    ? 'opacity-50 cursor-not-allowed'
                    : isActive
                    ? 'border-moderate-cyan cursor-pointer'
                    : 'border-gray-200 hover:border-moderate-cyan cursor-pointer'
                }`}
                onClick={() => !isOutOfStock && setActiveReward(reward.id)}
                onMouseEnter={() => !isOutOfStock && setHoveredReward(reward.id)}
                onMouseLeave={() => setHoveredReward(null)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                      isActive
                        ? 'border-moderate-cyan bg-moderate-cyan'
                        : 'border-gray-300'
                    }`}
                  >
                    {isActive && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3
                        className={`font-bold ${
                          isActive || hoveredReward === reward.id
                            ? 'text-moderate-cyan'
                            : 'text-black'
                        }`}
                      >
                        {reward.title}
                      </h3>
                      <p className="text-moderate-cyan font-medium text-sm sm:text-base">
                        Pledge ${reward.pledgeAmount} or more
                      </p>
                    </div>
                    <p className="text-dark-gray text-sm leading-relaxed mb-4">
                      {reward.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-black">{reward.left}</span>
                      <span className="text-dark-gray text-sm">left</span>
                    </div>
                  </div>
                </div>

                {isActive && !isOutOfStock && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-dark-gray text-sm">Enter your pledge</div>
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-gray">$</span>
                          <input
                            type="number"
                            min={reward.minPledge}
                            value={currentAmount || ''}
                            onChange={(e) => handleAmountChange(reward.id, e.target.value)}
                            className="border-2 border-gray-300 rounded-full pl-8 pr-4 py-3 w-32 font-bold focus:outline-none focus:border-moderate-cyan"
                            placeholder={reward.minPledge.toString()}
                          />
                        </div>
                        <button
                          onClick={() => handlePledge(reward.id)}
                          disabled={!currentAmount || currentAmount < reward.minPledge}
                          className="bg-moderate-cyan hover:bg-dark-cyan text-white font-bold px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PledgeModal

