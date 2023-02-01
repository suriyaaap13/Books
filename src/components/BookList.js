import { useContext } from 'react';
import BooksContext from '../context/books';
import React from 'react';
import BookShow from './BookShow';

export default function BookList({books, deleteBookById, onEdit}) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBooks = books.map((book)=>{
    return <BookShow key = {book.id} book = {book} deleteBookById = {deleteBookById} onEdit = {onEdit}/>;
  })
  return (
    <div className='book-list'>
        {count}
        <button onClick={incrementCount}>click</button>
        {renderedBooks}
    </div>
  )
}
