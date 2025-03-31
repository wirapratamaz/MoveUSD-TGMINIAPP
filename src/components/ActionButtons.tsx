import { ArrowDown, ArrowUpRight, ArrowDownLeft, ArrowsExchange } from "./Icons"

const ActionButtons = () => {
  const actions = [
    { name: "Deposit", icon: <ArrowDown className="w-5 h-5" /> },
    { name: "Send", icon: <ArrowUpRight className="w-5 h-5" /> },
    { name: "Request", icon: <ArrowDownLeft className="w-5 h-5" /> },
    { name: "Swap", icon: <ArrowsExchange className="w-5 h-5" /> },
  ]

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <div className="grid grid-cols-4">
        {actions.map((action, index) => (
          <button 
            key={action.name} 
            className={`flex flex-col items-center justify-center py-4 px-2 relative
              ${index === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''}
              ${index === actions.length - 1 ? 'rounded-tr-lg rounded-br-lg' : ''}
            `}
          >
            {action.icon}
            <span className="text-xs mt-1.5">
              {action.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ActionButtons

