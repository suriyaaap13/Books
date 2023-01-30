import { useState } from "react";

export default function BookShow({book, deleteBookById, onEdit}) {
  
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = ()=>{
    deleteBookById(book.id);
  }
  const handleEditClick = ()=>{
    setShowEdit(!showEdit);
  }
  return (
    <div className='book-show'>
      {book.title}
      <div className='actions'>
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
      
    </div>
  );
}

