import React from 'react';
import { useState, useContext } from 'react';
import BooksContext from '../context/books';

export default function BookEdit({book, onSubmit}) {
  const { editBookById } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event)=>{
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }
  const handleChange = (event)=>{
    setTitle(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input className='input' onChange={handleChange} value={title}/>
      <button className='button is-primary'>Save</button>
    </form>
  )
}
