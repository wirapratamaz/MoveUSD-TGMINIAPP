import React, { useState } from 'react'
import PointsDrawer from './PointsDrawer'

interface RewardsCardProps {
  title: string
  description: string
  points: number
  onNavigateToSwap?: () => void
}

const RewardsCard: React.FC<RewardsCardProps> = ({ 
  title, 
  description, 
  points,
  onNavigateToSwap 
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col p-4 bg-zinc-900 rounded-xl">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
        
        <div 
          className="flex items-center justify-between mt-3 p-3 bg-zinc-800 rounded-lg cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <div>
            <p className="text-xs text-gray-400">Points</p>
            <p className="text-base font-medium">{points.toFixed(2)}</p>
          </div>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      
      <PointsDrawer 
        open={isDrawerOpen} 
        onOpenChange={setIsDrawerOpen} 
        pointsBalance={points}
        onSwap={onNavigateToSwap}
      />
    </>
  )
}

export default RewardsCard

