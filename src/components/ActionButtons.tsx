import { ArrowDown, ArrowUpRight, ArrowDownLeft, ArrowsExchange } from "./Icons"

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      <div className="flex flex-col items-center">
        <button className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        <span className="text-sm text-gray-300">Send</span>
      </div>
      
      <div className="flex flex-col items-center">
        <button className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
        <span className="text-sm text-gray-300">Receive</span>
      </div>
      
      <div className="flex flex-col items-center">
        <button className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <span className="text-sm text-gray-300">More</span>
      </div>
    </div>
  )
}

export default ActionButtons

