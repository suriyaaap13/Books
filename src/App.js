import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App(){
    const [books, setBooks] = useState([]);
    const addBook = (title)=>{
        setBooks([...books, title]);
    }
    return (
        <>
            <h1>Hello World!!</h1>
            <BookCreate addBook={addBook}/>
        </>
        
    )
}
export default App;