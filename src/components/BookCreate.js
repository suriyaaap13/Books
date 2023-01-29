import { useState } from "react";



export default function BookCreate({ addBook }) {
    const [text, setText] = useState("");
    function handleChange(event){
        setText(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        const val = text;
        console.log(val);
        addBook(val);
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
