import { UserPlus } from "./Icons"

const AddContact = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 mb-6 flex items-center">
      <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div>
        <div className="font-medium">Add a Contact</div>
        <div className="text-sm text-gray-400">Send and request money easily</div>
      </div>
    </div>
  )
}

export default AddContact

