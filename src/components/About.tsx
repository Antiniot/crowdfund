import { Reward } from '../types'
import RewardCard from './RewardCard'

interface AboutProps {
  rewards: Reward[]
  onSelectReward: (rewardId: string) => void
}

const About = ({ rewards, onSelectReward }: AboutProps) => {
  return (
    <div className="max-w-3xl mx-auto px-6 mb-12 md:mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-6">About this project</h2>
        
        <p className="text-dark-gray mb-6 leading-relaxed text-sm md:text-base">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        
        <p className="text-dark-gray mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>

        <div className="space-y-6">
          {rewards.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              onSelect={() => onSelectReward(reward.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

