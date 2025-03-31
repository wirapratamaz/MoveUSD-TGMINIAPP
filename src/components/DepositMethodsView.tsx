import React from 'react'

// Icons for deposit methods
const CryptoExchangeIcon = () => (
  <div className="bg-zinc-800 p-2 rounded-lg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="currentColor"/>
      <path d="M11.25 7.72H6.25V16.77H11.25V7.72Z" fill="currentColor"/>
      <path d="M18.24 10.72H13.24V16.77H18.24V10.72Z" fill="currentColor"/>
    </svg>
  </div>
)

const BankWireIcon = () => (
  <div className="bg-zinc-800 p-2 rounded-lg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 10H4.5V17H6.5V10ZM12.5 10H10.5V17H12.5V10ZM21 19H2V21H21V19ZM18.5 10H16.5V17H18.5V10ZM12 1L2 6V8H22V6L12 1Z" fill="currentColor"/>
    </svg>
  </div>
)

const SolanaIcon = () => (
  <div className="bg-zinc-800 p-2 rounded-lg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1"/>
      <path d="M7.5 15.5L16.5 15.5L16.5 14L7.5 14L7.5 15.5Z" fill="currentColor"/>
      <path d="M7.5 10.5L16.5 10.5L16.5 9L7.5 9L7.5 10.5Z" fill="currentColor"/>
      <path d="M16.5 13L7.5 13L7.5 11.5L16.5 11.5L16.5 13Z" fill="currentColor"/>
    </svg>
  </div>
)

interface DepositMethod {
  title: string
  description: string
  icon: React.ReactNode
}

interface DepositMethodsViewProps {
  onBackClick: () => void
}

const DepositMethodsView: React.FC<DepositMethodsViewProps> = ({ onBackClick }) => {
  const methods: DepositMethod[] = [
    {
      title: 'Crypto Exchange',
      description: 'Add funds directly from your crypto exchange.',
      icon: <CryptoExchangeIcon />
    },
    {
      title: 'Bank Wire',
      description: 'Add funds using your bank wire.',
      icon: <BankWireIcon />
    },
    {
      title: 'Solana',
      description: 'Deposit money from any Solana wallet',
      icon: <SolanaIcon />
    }
  ]

  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-6">Select Deposit Method</h1>
      
      <div className="space-y-4">
        {methods.map((method, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 rounded-lg p-4 flex items-center cursor-pointer"
            onClick={() => onBackClick()}
          >
            {method.icon}
            <div className="ml-3">
              <div className="font-medium">{method.title}</div>
              <div className="text-xs text-gray-400">{method.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepositMethodsView 