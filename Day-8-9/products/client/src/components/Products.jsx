import React, { useState, useEffect } from 'react'
import Product from './Product'

const Products = ({ onNotify }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:3000/products')
        
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        setProducts(data.data || [])
        setError('')
      } catch (err) {
        console.log(err)
        setError('Failed to load products. Please try again later.')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-gray-600">Loading products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-gray-600">No products available yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
          onNotify={onNotify}
        />
      ))}
    </div>
  )
}

export default Products