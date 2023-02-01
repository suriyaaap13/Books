import { useState, useContext } from "react";
import BooksContext from "../context/books";


export default function BookCreate() {
    const [text, setText] = useState("");
    const { addBook } = useContext(BooksContext);


    function handleChange(event){
        setText(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        addBook(text);
        setText("");
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" onChange={handleChange} type='text' placeholder='Book Title...' value={text}/>
                <button className="button" type='submit'>Submit</button>
            </form>
        </div>
  )
}
