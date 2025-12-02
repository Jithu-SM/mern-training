import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import BookList from './components/BookList.jsx'

createRoot(document.getElementById('root')).render(
  <BookList />
)
