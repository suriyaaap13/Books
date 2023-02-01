import { useContext } from 'react';
import BooksContext from '../context/books';
import React from 'react';
import BookShow from './BookShow';

export default function BookList() {
  
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book)=>{
    return <BookShow key = {book.id} book = {book} />;
  })
  return (
    <div className='book-list'>
        {renderedBooks}
    </div>
  )
}
