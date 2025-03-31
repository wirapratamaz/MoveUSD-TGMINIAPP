import { CoinIcon } from "./Icons"

const AssetsCard = () => {
  const assets = [
    { name: "Bitcoin", symbol: "BTC", value: "$45,230.84", change: "+2.3%" },
    { name: "Ethereum", symbol: "ETH", value: "$3,270.12", change: "+1.8%" }
  ];

  return (
    <div className="bg-gray-900 rounded-lg mb-6">
      <div className="border-b border-gray-800 p-4">
        <h3 className="font-medium">Your Assets</h3>
      </div>
      {assets.map((asset, index) => (
        <div key={asset.symbol} className={`p-4 flex justify-between items-center ${index !== assets.length - 1 ? 'border-b border-gray-800' : ''}`}>
          <div className="flex items-center">
            <div className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold">{asset.symbol.substring(0, 1)}</span>
            </div>
            <div>
              <div className="font-medium">{asset.name}</div>
              <div className="text-xs text-gray-400">{asset.symbol}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">{asset.value}</div>
            <div className="text-xs text-green-500">{asset.change}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AssetsCard

