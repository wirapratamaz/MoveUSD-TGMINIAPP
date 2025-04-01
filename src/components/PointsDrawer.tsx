import React from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from './ui/drawer'

interface PointsDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  pointsBalance: number
  onSwap?: () => void
}

const PointsDrawer: React.FC<PointsDrawerProps> = ({ 
  open, 
  onOpenChange,
  pointsBalance,
  onSwap
}) => {
  const handleSwap = () => {
    // Close the drawer and navigate to swap view
    onOpenChange(false)
    if (onSwap) {
      setTimeout(() => onSwap(), 300) // Wait for drawer to close
    }
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-zinc-700" />
        
        <div className="flex flex-col items-center px-4 py-6">
          <DrawerTitle className="text-center text-xl font-bold mb-6">Points</DrawerTitle>
          
          <div className="w-full flex flex-col items-center mb-10">
            <div className="text-4xl font-bold mb-2">{pointsBalance.toFixed(2)}</div>
            <div className="text-gray-400">USD {pointsBalance.toFixed(2)}</div>
          </div>
          
          <button 
            onClick={handleSwap}
            className="w-full py-3 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-medium"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L12 9L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 19L12 15L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Swap
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default PointsDrawer 