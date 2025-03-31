import { useState } from "react"
import { ChevronDown } from "./Icons"
import CurrencyDrawer from "./CurrencyDrawer"

const Balance = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const balance = 5.20; // Reference shows 5.20 as the balance

  return (
    <div className="mb-6">
      <div 
        className="flex items-center justify-between bg-zinc-900 rounded py-1.5 px-3 w-full mb-2 cursor-pointer"
        onClick={() => setDrawerOpen(true)}
      >
        <span className="text-sm font-medium">USD Balance</span>
        <ChevronDown className="w-4 h-4" />
      </div>
      <div className="text-7xl font-bold tracking-tighter">
        {balance.toFixed(2)}
      </div>

      <CurrencyDrawer 
        open={drawerOpen} 
        onOpenChange={setDrawerOpen} 
      />
    </div>
  )
}

export default Balance

