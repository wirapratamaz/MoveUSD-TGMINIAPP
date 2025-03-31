const Header = () => {
  return (
    <div className="flex justify-between items-center mb-4 py-2">
      <div className="flex items-center">
        <img 
          src="https://movemoney.app/_next/static/media/logo-full-dark.547a00a3.svg" 
          alt="MoveMoney Logo"
          className="h-7 mr-2"
        />
      </div>
      <div className="bg-zinc-900 rounded-full px-2.5 py-1 text-xs font-bold">WP</div>
    </div>
  )
}

export default Header

