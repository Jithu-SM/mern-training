import React from 'react'

const Product = ({ product, onPurchase }) => {
  const handlePurchase = () => {
    if (onPurchase) {
      onPurchase(product)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-indigo-600">${parseFloat(product.price).toFixed(2)}</span>
        </div>

        <button
          onClick={handlePurchase}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-medium"
        >
          Purchase
        </button>
      </div>
    </div>
  )
}

export default Product