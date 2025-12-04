import React from 'react'
import { useState } from 'react'

const SimpleForm = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted', { name, email })
        setName('')
        setEmail('')
    }

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-md font-sans">
        <h2 className="text-xl font-semibold mb-4">Simple React Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                <input 
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="you@example.com"
                />
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    className="w-full inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default SimpleForm