import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import PledgeModal from './components/PledgeModal'
import SuccessModal from './components/SuccessModal'
import { ProjectStats, Reward } from './types'

const initialStats: ProjectStats = {
  totalBacked: 89914,
  totalBackers: 5007,
  daysLeft: 56,
  goal: 100000,
}

const initialRewards: Reward[] = [
  {
    id: 'bamboo',
    title: 'Bamboo Stand',
    pledgeAmount: 25,
    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    left: 101,
    minPledge: 25,
  },
  {
    id: 'black',
    title: 'Black Edition Stand',
    pledgeAmount: 75,
    description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    left: 64,
    minPledge: 75,
  },
  {
    id: 'mahogany',
    title: 'Mahogany Special Edition',
    pledgeAmount: 200,
    description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    left: 0,
    minPledge: 200,
  },
]

function App() {
  const [stats, setStats] = useState<ProjectStats>(initialStats)
  const [rewards, setRewards] = useState<Reward[]>(initialRewards)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [selectedReward, setSelectedReward] = useState<string | null>(null)

  const handlePledge = (amount: number, rewardId: string | null) => {
    setStats(prev => ({
      ...prev,
      totalBacked: prev.totalBacked + amount,
      totalBackers: prev.totalBackers + 1,
    }))
    
    if (rewardId) {
      setRewards(prev => prev.map(reward => 
        reward.id === rewardId && reward.left > 0
          ? { ...reward, left: reward.left - 1 }
          : reward
      ))
    }
    
    setIsPledgeModalOpen(false)
    setIsSuccessModalOpen(true)
    setSelectedReward(null)
  }

  const progressPercentage = Math.min((stats.totalBacked / stats.goal) * 100, 100)

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        onBackProject={() => setIsPledgeModalOpen(true)}
        isBookmarked={isBookmarked}
        onToggleBookmark={() => setIsBookmarked(!isBookmarked)}
      />
      <Stats stats={stats} progressPercentage={progressPercentage} />
      <About 
        rewards={rewards}
        onSelectReward={(rewardId: string) => {
          setSelectedReward(rewardId)
          setIsPledgeModalOpen(true)
        }}
      />
      
      {isPledgeModalOpen && (
        <PledgeModal
          rewards={rewards}
          selectedReward={selectedReward}
          onClose={() => {
            setIsPledgeModalOpen(false)
            setSelectedReward(null)
          }}
          onPledge={handlePledge}
        />
      )}
      
      {isSuccessModalOpen && (
        <SuccessModal
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
    </div>
  )
}

export default App

