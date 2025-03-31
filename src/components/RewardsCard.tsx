import { Gift } from "./Icons"

const RewardsCard = () => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-zinc-800 p-2 rounded-lg mr-3">
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <div className="font-medium">Points</div>
          <div className="text-xs text-gray-400">1 Points</div>
        </div>
      </div>
      <div className="font-medium">$1.00</div>
    </div>
  )
}

export default RewardsCard

