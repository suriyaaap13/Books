import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App(){
    const [books, setBooks] = useState([]);
    const addBook = (title)=>{
        setBooks([...books, {id: books.length, title: title}]);
    }
    const deleteBookById = (id)=>{
        const updatedBooks = books.filter((book)=>{
            return book.id!==id;
        });
        setBooks(updatedBooks);
    }

    const editBookById = (id,title)=>{
        const updatedBooks = books.map((book)=>{
            if(book.id==id){
                book.title = title;
            }
        });
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <BookList books={books} deleteBookById = {deleteBookById} onEdit = {editBookById}/>
            <BookCreate addBook={addBook}/>
        </div>
        
    )
}
export default App;