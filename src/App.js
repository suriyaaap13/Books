import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App(){
    const [books, setBooks] = useState([]);
    const addBook = (title)=>{
        setBooks([...books, {id: books.length, title: title}]);
    }
    return (
        <div className="app">
            <BookList books={books}/>
            <BookCreate addBook={addBook}/>
        </div>
        
    )
}
export default App;