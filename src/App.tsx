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
    WebApp.setHeaderColor("#121212")
    WebApp.setBackgroundColor("#121212")
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Header />
      <Balance />
      <ActionButtons />
      <AddContact />
      <RewardsCard />
      <AssetsCard />
    </div>
  )
}

export default App

