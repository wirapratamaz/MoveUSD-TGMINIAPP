import { useEffect } from "react"
import WebApp from "@twa-dev/sdk"
import Header from "./components/Header"
import Balance from "./components/Balance"
import ActionButtons from "./components/ActionButtons"
import AddContact from "./components/AddContact"
import RewardsCard from "./components/RewardsCard"
import AssetsCard from "./components/AssetsCard"
import "./index.css"

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready()
    WebApp.expand()

    // Set theme color to match the app background
    WebApp.setHeaderColor("#000000")
    WebApp.setBackgroundColor("#000000")
  }, [])

  return (
    <div className="flex justify-center w-full bg-black">
      <div className="w-full max-w-md min-h-screen bg-black text-white px-4 pb-16">
        <Header />
        <Balance />
        <div className="mb-5">
          <ActionButtons />
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
      </div>
    </div>
  )
}

export default App

