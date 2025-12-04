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
    <div>
      <header>
        <h1>Example Shop</h1>
        <nav>
          <a href="#features">Features</a> | <a href="#products">Products</a> | <a href="#subscribe">Subscribe</a>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h2>Launching Soon</h2>
          <p>New store, curated products, launch-day offers. Join early access.</p>
          <p>Launch date: Coming Soon</p>
        </section>

        <section id="features">
          <h3>What to expect</h3>
          <ul>
            <li>Curated selection of everyday essentials</li>
            <li>Launch-only discounts and bundles</li>
            <li>Fast shipping and simple returns</li>
          </ul>
        </section>

        <section id="products">
          <h3>Sample products</h3>
          <Products />
        </section>

        <section id="subscribe">
          <h3>Get early access</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-label="email"
              />
            </label>
            <button type="submit">Notify me</button>
          </form>
          {message && <p>{message}</p>}
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Example Shop. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home