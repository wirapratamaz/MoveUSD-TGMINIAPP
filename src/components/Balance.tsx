import { useState } from "react"
import { ChevronDown } from "./Icons"

const Balance = () => {
  const balance = 100.00; // Mock balance

  return (
    <div className="bg-gray-900 rounded-lg p-4 mb-6">
      <div className="text-gray-400 text-sm mb-1">Your Balance</div>
      <div className="flex items-baseline">
        <span className="text-white text-2xl font-bold">${balance.toFixed(2)}</span>
        <span className="text-gray-400 text-sm ml-1">USD</span>
      </div>
    </div>
  )
}

export default Balance

