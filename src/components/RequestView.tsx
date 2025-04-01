import React from 'react'

interface Contact {
  name: string
  phone?: string
  countryCode?: string
  avatar?: string
  initials?: string
}

interface RequestViewProps {
  onBackClick: () => void
}

const RequestView: React.FC<RequestViewProps> = ({ onBackClick }) => {
  const contacts: Contact[] = [
    {
      name: "NICHOLAS CAVET",
      phone: "732 682 9083",
      countryCode: "+1",
      initials: "NC"
    }
  ]

  // Helper function to handle contact selection
  const handleContactSelect = () => {
    // In a real app this would open the request form for the selected contact
    // For now, we'll just go back to the main view
    onBackClick();
  };

  return (
    <div className="h-full -mx-4">
      {/* Search bar */}
      <div className="flex items-center px-4 py-2 bg-zinc-900">
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full py-1 px-2 bg-transparent text-white outline-none" 
        />
      </div>

      {/* Your contacts section */}
      <div className="mt-4 px-4">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="font-bold">Your contacts</span>
        </div>
        <p className="text-gray-400 text-sm mb-2">Your saved contacts go here</p>
        <button 
          className="w-full bg-gray-200 text-black rounded-lg py-3 flex items-center justify-center"
          onClick={onBackClick}
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <span>Add new contact</span>
        </button>
      </div>

      {/* People you may know */}
      <div className="mt-6 px-4">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="font-bold">People you may know</span>
        </div>
        <div 
          className="flex items-center py-2 cursor-pointer"
          onClick={handleContactSelect}
        >
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white mr-3">
            NC
          </div>
          <div>
            <div className="font-medium">{contacts[0].name}</div>
            <div className="text-sm text-gray-400 flex items-center">
              <span className="flex items-center">
                <svg className="w-4 h-3 mr-1" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="12" rx="1" fill="#D02F44"/>
                  <rect y="0.923077" width="20" height="0.923077" fill="white"/>
                  <rect y="2.76923" width="20" height="0.923077" fill="white"/>
                  <rect y="4.61538" width="20" height="0.923077" fill="white"/>
                  <rect y="6.46154" width="20" height="0.923077" fill="white"/>
                  <rect y="8.30769" width="20" height="0.923077" fill="white"/>
                  <rect y="10.1538" width="20" height="0.923077" fill="white"/>
                  <rect width="10" height="6.46154" fill="#46467F"/>
                </svg>
                {contacts[0].countryCode}
              </span>
              <span className="ml-1">{contacts[0].phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* MoveMoney users */}
      <div className="mt-6 px-4">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="font-bold">MoveMoney users</span>
        </div>
        <p className="text-gray-400 text-sm">
          Find people across the MoveMoney network by searching for their name
        </p>
      </div>
    </div>
  )
}

export default RequestView 