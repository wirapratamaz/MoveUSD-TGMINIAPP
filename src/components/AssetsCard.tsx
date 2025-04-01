import React, { useState } from 'react'
import AssetDrawer from './AssetDrawer'

interface AssetsCardProps {
  onReceive?: () => void
  onSend?: () => void
  onSwap?: () => void
}

const AssetsCard: React.FC<AssetsCardProps> = ({ onReceive, onSend, onSwap }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const balance = 4.2 // Mock balance

  return (
    <>
      <div 
        className="bg-zinc-900 rounded-lg p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsDrawerOpen(true)}
      >
        <div className="flex items-center">
          <div className="bg-zinc-800 p-2 rounded-lg mr-3">
            <img 
              src="https://public.coinfx.network/token-logos/MOVEUSD.png" 
              alt="MoveUSD Coin" 
              className="w-5 h-5" 
            />
          </div>
          <div>
            <div className="font-medium">MoveUSD</div>
            <div className="text-xs text-gray-400">{balance} MOVEUSD</div>
          </div>
        </div>
        <div className="font-medium">${balance.toFixed(2)}</div>
      </div>

      <AssetDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        balance={balance}
        onReceive={onReceive}
        onSend={onSend}
        onSwap={onSwap}
      />
    </>
  )
}

export default AssetsCard

