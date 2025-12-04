import React from 'react';
import Book from './Book.jsx';
import { books } from '../data/books.js';
import '../styles/Book.css';

const BookList = () => {
    console.log(books)
  return (
    <div className='book-card'>
      {
        books.map((item) => (
          <Book key={item.id} book={item} />
        ))
      }
    </div>
  )
}

export default BookList;
