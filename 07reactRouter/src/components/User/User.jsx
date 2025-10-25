import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className="w-full bg-gray-900 text-gray-100 text-lg font-medium tracking-wide px-6 py-4 flex items-center justify-center shadow-sm border-b border-gray-700">
      👤 User ID: <span className="ml-2 text-blue-400 font-semibold">{userid}</span>
    </div>
  )
}

export default User
