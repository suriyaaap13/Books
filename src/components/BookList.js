import React from 'react';
import BookShow from './BookShow';

export default function BookList({books, deleteBookById, onEdit}) {
  const renderedBooks = books.map((book)=>{
    return <BookShow key = {book.id} book = {book} deleteBookById = {deleteBookById} onEdit = {onEdit}/>;
  })
  return (
    <div className='book-list'>
        {renderedBooks}
    </div>
  )
}
