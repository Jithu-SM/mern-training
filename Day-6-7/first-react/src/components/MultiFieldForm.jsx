import React, { useState } from 'react'

const MultiFieldForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert(JSON.stringify(formData,null,2))
    setFormData({ name: '', age: '', city: '', email: '' })
  }

  return (
    <div className="max-w-md mx-auto my-6 p-8 bg-linear-to-br from-slate-900 to-slate-800 rounded-xl shadow-2xl font-sans border border-slate-700">
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">User Form</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor='name' className="block text-sm font-semibold text-cyan-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor='age' className="block text-sm font-semibold text-cyan-300 mb-2">Age</label>
              <input 
                type="number" 
                id="age" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                placeholder="Enter your age"
              />
            </div>
            <div>
              <label htmlFor='city' className="block text-sm font-semibold text-cyan-300 mb-2">City</label>
              <input 
                type="text" 
                id="city" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label htmlFor='email' className="block text-sm font-semibold text-cyan-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition transform hover:scale-105"
            >
              Submit
            </button>
        </form>
    </div>
  )
}

export default MultiFieldForm