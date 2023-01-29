import React from 'react'

export default function BookShow({ books }) {
  return books.map((book)=><li>{book.title}</li>)
}
