const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <div className="bg-white w-8 h-8 flex items-center justify-center mr-2 rounded">
          <span className="text-black font-bold">M</span>
        </div>
        <span className="text-white font-bold text-lg">MoveMoney™</span>
      </div>
      <div className="bg-gray-900 rounded-full px-2 py-1 text-xs font-bold border border-gray-700">WP</div>
    </div>
  )
}

export default Header

