import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
        description: ''
    })
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: value
        }))
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.price || !formData.image || !formData.description) {
      setMessage('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          price: parseFloat(formData.price),
          image: formData.image,
          description: formData.description
        })
      })

      if (response.ok) {
        const data = await response.json()
        setMessage('Product added successfully!')
        setFormData({ name: '', price: '', image: '', description: '' })
        console.log('Product added:', data)
      } else {
        const error = await response.json()
        setMessage(`Error: ${error.error}`)
      }
    } catch (error) {
      console.log(error)
      setMessage('Failed to add product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <main className="container mx-auto px-6 py-12">
        <section className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-3xl font-bold mb-2">Add New Product</h2>
            <p className="text-gray-600 mb-6">Fill in the details below to add a new product to your store.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-semibold mb-2 text-gray-700">Product Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter product price"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-semibold mb-2 text-gray-700">Product Image URL</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {formData.image && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <img src={formData.image} alt="Product preview" className="h-32 w-32 object-cover rounded-md border border-gray-200" />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold mb-2 text-gray-700">Product Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Adding Product...' : 'Add Product'}
              </button>
            </form>

            {message && (
              <div className={`mt-4 px-4 py-3 rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                <p className="text-sm">{message}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Shop. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex items-center space-x-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AddProduct