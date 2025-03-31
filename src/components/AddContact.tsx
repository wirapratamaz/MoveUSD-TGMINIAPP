import { UserPlus } from "./Icons"

const AddContact = () => {
  return (
    <button className="bg-white text-black rounded-lg py-3.5 w-full flex items-center justify-center mb-6">
      <UserPlus className="w-5 h-5 mr-2 opacity-80" />
      <span className="font-medium">Add Contact</span>
    </button>
  )
}

export default AddContact

