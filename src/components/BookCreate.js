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
        setText("");
        addBook(val);
    }
    return (
        <>
            <br/>
            <h1>Add a book</h1> 
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder='Book Title...' value={text}/>
                <button type='submit'>Submit</button>
            </form>
        </>
  )
}
