import React, { useState, useEffect } from 'react'

interface SwapViewProps {
  onBack: () => void
}

const SwapView: React.FC<SwapViewProps> = ({ onBack }) => {
  const [fromAmount, setFromAmount] = useState<string>('0')
  const [toAmount, setToAmount] = useState<string>('0')
  const [availableBalance] = useState<number>(1)
  
  // Convert points to MOVEUSD (1:1 for demo)
  useEffect(() => {
    const numericAmount = Number(fromAmount) || 0
    setToAmount(numericAmount.toString())
  }, [fromAmount])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate successful swap
    alert('Swap successful!')
    onBack()
  }

  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-8">How much do you want to swap?</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="amount" className="font-medium">
              Amount <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex">
            <input
              id="amount"
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-black border border-zinc-800 rounded-l-lg p-3 w-full text-white outline-none"
              min="0"
              max={availableBalance}
              step="0.01"
              required
            />
            <div className="bg-white text-black rounded-r-lg px-4 py-3 flex items-center justify-center font-medium">
              Points
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-1">
            Available balance: {availableBalance}
          </div>
        </div>

        <div className="flex justify-center my-6">
          <div className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L12 9L16 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 19L12 15L8 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="to" className="font-medium">To</label>
          </div>
          <div className="flex">
            <input
              id="to"
              type="number"
              value={toAmount}
              readOnly
              className="bg-black border border-zinc-800 rounded-l-lg p-3 w-full text-white outline-none"
            />
            <div className="bg-white text-black rounded-r-lg px-4 py-3 flex items-center justify-center font-medium">
              MOVEUSD
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center mt-auto fixed bottom-4 left-4 right-4 max-w-[calc(100%-2rem)]"
        >
          Confirm
        </button>
      </form>
    </div>
  )
}

export default SwapView 