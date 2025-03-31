import { ChevronDown } from "./Icons"

const Balance = () => {
  const balance = 5.20; // Reference shows 5.20 as the balance

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between bg-zinc-900 rounded py-1.5 px-3 w-full mb-2">
        <span className="text-sm font-medium">USD Balance</span>
        <ChevronDown className="w-4 h-4" />
      </div>
      <div className="text-4xl font-bold tracking-tighter">
        {balance.toFixed(2)}
      </div>
    </div>
  )
}

export default Balance

