import React, { useState } from 'react'
import Products from './Products.jsx'

const Home = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) {
      setMessage('Please enter an email.')
      return
    }
    setMessage('Thanks! You will receive launch updates.')
    setEmail('')
    console.log('Subscribed:', email)
  }

  function notifyProduct(p) {
    setMessage(`We'll notify you when "${p.name}" is available.`)
    console.log('Notify requested for product:', p)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <main className="container mx-auto px-6 py-12">
        <section id="hero" className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Curated essentials. Launching soon.
            </h2>
            <p className="text-gray-600 mb-6">
              New store, curated products, launch-day offers. Join early access to get exclusive discounts and first dibs.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md">
                <label className="sr-only" htmlFor="hero-email">Email</label>
                <input
                  id="hero-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
                >
                  Notify me
                </button>
              </form>

              <a
                href="#products"
                className="inline-flex items-center px-4 py-3 text-sm border border-gray-200 rounded-md hover:bg-gray-100"
              >
                Browse sample products
              </a>
            </div>

            {message && (
              <div className="mt-4 max-w-md">
                <p className="text-sm text-green-700 bg-green-100 px-4 py-2 rounded">{message}</p>
              </div>
            )}
          </div>

          <div className="rounded-lg overflow-hidden bg-linear-to-tr from-pink-50 to-indigo-50 p-6 shadow-md">
            <div className="h-64 bg-white rounded-lg flex items-center justify-center border border-dashed border-gray-200">
              <div className="text-center px-6">
                <p className="text-sm text-gray-500">Preview</p>
                <h3 className="mt-2 text-lg font-semibold">Handpicked everyday essentials</h3>
                <p className="mt-2 text-gray-500">Quality items, curated for your daily life — launching with special offers.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">What to expect</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white p-5 rounded-lg shadow-sm border">
              <h4 className="font-semibold mb-2">Curated Selection</h4>
              <p className="text-gray-600 text-sm">Handpicked items for everyday use — quality over quantity.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border">
              <h4 className="font-semibold mb-2">Launch Discounts</h4>
              <p className="text-gray-600 text-sm">Special pricing and bundles available on launch day.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border">
              <h4 className="font-semibold mb-2">Fast Shipping</h4>
              <p className="text-gray-600 text-sm">Reliable delivery and simple returns for your convenience.</p>
            </div>
          </div>
        </section>

        <section id="products" className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Sample products</h3>
            <p className="text-sm text-gray-500">A taste of what’s coming</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            {/* Pass notify handler so individual product cards can call it */}
            <Products onNotify={notifyProduct} />
          </div>
        </section>

        <section id="subscribe" className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-3">Get early access</h3>
          <form onSubmit={handleSubmit} className="sm:flex sm:items-center gap-3">
            <label className="sr-only" htmlFor="subscribe-email">Email</label>
            <input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-label="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button type="submit" className="mt-3 sm:mt-0 px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
              Notify me
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-green-700">{message}</p>}
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

export default Home