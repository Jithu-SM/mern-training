import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
// import Header from './components/Header.jsx'

const App = () => {
  return (
    <Router>
      <nav className='bg-gray-800 shadow-lg fixed w-full z-10 top-0'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <ul className='flex py-4 gap-6'>
            <li>
              <div className="w-15 h-10 rounded-md bg-linear-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">
                shoop
              </div>
            </li>
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
        {/* <Header /> */}
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