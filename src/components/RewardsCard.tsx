import { Gift } from "./Icons"

const RewardsCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 mb-6">
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium">Rewards Available</span>
      </div>
      <p className="text-sm mb-3">Earn 5% back on all transactions. Tap to view your rewards.</p>
      <button className="bg-white text-blue-700 text-sm font-medium py-1 px-3 rounded-md">View Rewards</button>
    </div>
  )
}

export default RewardsCard

