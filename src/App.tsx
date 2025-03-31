import { useEffect, useState } from "react"
import WebApp from "@twa-dev/sdk"
import Header from "./components/Header"
import Balance from "./components/Balance"
import ActionButtons from "./components/ActionButtons"
import AddContact from "./components/AddContact"
import RewardsCard from "./components/RewardsCard"
import AssetsCard from "./components/AssetsCard"
import DepositMethodsView from "./components/DepositMethodsView"
import "./index.css"

type View = "main" | "deposit"

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
    }
    // Handle other actions here
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
              <RewardsCard />
            </div>
            <div className="mt-4">
              <div className="text-sm mb-2">Assets</div>
              <AssetsCard />
            </div>
          </>
        )}

        {currentView === "deposit" && (
          <DepositMethodsView onBackClick={() => setCurrentView("main")} />
        )}
      </div>
    </div>
  )
}

export default App

