import React from 'react';
import '../styles/Book.css';

const Book = (props) => {
  // guard against missing props.book
  const { book = {} } = props;
  const { title = 'Unknown Title', author = 'Unknown Author', year = 'Unknown Year' } = book;

  return (
    <div className='book'>
      <h2 className='title'>{title}</h2>
      <p className='author'><strong>Author:</strong> {author}</p>
      <p className='year'><strong>Year:</strong> {year}</p>
    </div>
  )
}

export default Book;
