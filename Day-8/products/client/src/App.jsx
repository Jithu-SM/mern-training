import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <nav className='bg-gray-800 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <ul className='flex py-4 gap-6'>
            <li>
              <Link 
                to='/'
                className='text-white hover:text-gray-300'
              >Home</Link>
            </li>
            <li>
              <Link 
                to='/products'
                className='text-white hover:text-gray-300'
              >Products</Link>
            </li>
            <li>
              <Link 
                to='/addproduct'
                className='text-white hover:text-gray-300'
              >Add Product</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/addproduct' element={<AddProduct />}/>

      </Routes>

    </Router>
  )
}

export default App