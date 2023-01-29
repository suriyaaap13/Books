import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookShow from "./components/BookShow";

function App(){
    const [books, setBooks] = useState([]);
    const addBook = (title)=>{
        setBooks([...books, {id: books.length, title: title}]);
    }
    return (
        <>
            {books.length}
            <BookShow books={books}/>
            <BookCreate addBook={addBook}/>
        </>
        
    )
}
export default App;