import { CoinIcon } from "./Icons"

const AssetsCard = () => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex justify-between items-center">
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
          <div className="text-xs text-gray-400">4.2 MOVEUSD</div>
        </div>
      </div>
      <div className="font-medium">$4.20</div>
    </div>
  )
}

export default AssetsCard

