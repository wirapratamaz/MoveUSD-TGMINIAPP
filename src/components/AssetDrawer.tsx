import React from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription
} from './ui/drawer'

interface AssetDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  balance: number
  onReceive?: () => void
  onSend?: () => void
  onSwap?: () => void
}

const AssetDrawer: React.FC<AssetDrawerProps> = ({ 
  open, 
  onOpenChange,
  balance,
  onReceive,
  onSend,
  onSwap
}) => {
  const handleAction = (action: 'receive' | 'send' | 'swap') => {
    // Close the drawer and execute the appropriate action
    onOpenChange(false)
    setTimeout(() => {
      if (action === 'receive' && onReceive) {
        onReceive()
      } else if (action === 'send' && onSend) {
        onSend()
      } else if (action === 'swap' && onSwap) {
        onSwap()
      }
    }, 300) // Wait for drawer to close
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-zinc-700" />
        
        <div className="flex flex-col items-center px-4 py-6">
          <DrawerTitle className="text-center text-xl font-bold mb-2">MoveUSD</DrawerTitle>
          
          <div className="w-full flex flex-col items-center mb-2">
            <div className="text-4xl font-bold mb-2">{balance.toFixed(2)}</div>
            <div className="text-gray-400">MOVEUSD</div>
          </div>
          
          <div className="flex items-center justify-center mb-10">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <DrawerDescription className="text-xs">
              MOVEUSD is a USD backed stablecoin. All displayed values are redeemable 1:1.
            </DrawerDescription>
          </div>
          
          <div className="w-full grid grid-cols-3 gap-2">
            <button 
              onClick={() => handleAction('receive')}
              className="py-3 rounded-lg bg-zinc-800 flex flex-col items-center justify-center text-white font-medium"
            >
              <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 14L12 7L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Receive
            </button>
            
            <button 
              onClick={() => handleAction('send')}
              className="py-3 rounded-lg bg-zinc-800 flex flex-col items-center justify-center text-white font-medium"
            >
              <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10L12 17L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Send
            </button>
            
            <button 
              onClick={() => handleAction('swap')}
              className="py-3 rounded-lg bg-zinc-800 flex flex-col items-center justify-center text-white font-medium"
            >
              <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L12 9L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 19L12 15L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Swap
            </button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AssetDrawer 