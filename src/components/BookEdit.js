import React from 'react';
import { useState } from 'react';

export default function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event)=>{
    event.preventDefault();
    onSubmit(book.id,title);
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
