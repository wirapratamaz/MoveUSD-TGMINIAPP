import { useEffect, useState } from "react"
import WebApp from "@twa-dev/sdk"
import Header from "./components/Header"
import Balance from "./components/Balance"
import ActionButtons from "./components/ActionButtons"
import AddContact from "./components/AddContact"
import RewardsCard from "./components/RewardsCard"
import AssetsCard from "./components/AssetsCard"
import DepositMethodsView from "./components/DepositMethodsView"
import SendView from "./components/SendView"
import RequestView from "./components/RequestView"
import SwapView from "./components/SwapView"
import "./index.css"

type View = "main" | "deposit" | "send" | "request" | "swap"

function App() {
  const [currentView, setCurrentView] = useState<View>("main")

  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready()
    WebApp.expand()

    // Set theme color to match the app background
    WebApp.setHeaderColor("#000000")
    WebApp.setBackgroundColor("#000000")
  }, [])

  // Handle Back Button
  useEffect(() => {
    // Only show back button when not on main view
    if (currentView !== "main") {
      // Set up back button
      WebApp.BackButton.show()
      WebApp.BackButton.onClick(() => {
        setCurrentView("main")
        WebApp.BackButton.hide()
      })
    } else {
      WebApp.BackButton.hide()
    }

    // Clean up event listener when component unmounts
    return () => {
      WebApp.BackButton.offClick(() => {
        setCurrentView("main")
      })
    }
  }, [currentView])

  // Handle action button clicks
  const handleActionClick = (action: string) => {
    if (action === "Deposit") {
      setCurrentView("deposit")
    } else if (action === "Send") {
      setCurrentView("send")
    } else if (action === "Request") {
      setCurrentView("request")
    } else if (action === "Swap") {
      setCurrentView("swap")
    }
  }

  const handleNavigateToSwap = () => {
    setCurrentView("swap")
  }
  
  const handleNavigateToSend = () => {
    setCurrentView("send")
  }
  
  const handleNavigateToReceive = () => {
    setCurrentView("deposit")
  }
  
  const handleBackToHome = () => {
    setCurrentView("main")
  }

  return (
    <div className="flex justify-center w-full bg-black">
      <div className="w-full max-w-md min-h-screen bg-black text-white px-4 pb-16">
        <Header />
        
        {currentView === "main" && (
          <>
            <Balance />
            <div className="mb-5">
              <ActionButtons onActionClick={handleActionClick} />
            </div>
            <AddContact />
            <div className="mb-2">
              <div className="text-sm mb-2">Rewards</div>
              <RewardsCard 
                title="MoveUSD Rewards" 
                description="Earn points when you hold MoveUSD"
                points={1}
                onNavigateToSwap={handleNavigateToSwap}
              />
            </div>
            <div className="mt-4">
              <div className="text-sm mb-2">Assets</div>
              <AssetsCard 
                onReceive={handleNavigateToReceive}
                onSend={handleNavigateToSend}
                onSwap={handleNavigateToSwap}
              />
            </div>
          </>
        )}

        {currentView === "deposit" && (
          <DepositMethodsView onBackClick={() => setCurrentView("main")} />
        )}

        {currentView === "send" && (
          <SendView onBackClick={() => setCurrentView("main")} />
        )}

        {currentView === "request" && (
          <RequestView onBackClick={() => setCurrentView("main")} />
        )}

        {currentView === "swap" && (
          <SwapView onBack={handleBackToHome} />
        )}
      </div>
    </div>
  )
}

export default App

