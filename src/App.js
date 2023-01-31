import { useEffect, useState } from "react";
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App(){
    const [books, setBooks] = useState([]);

    const fetchBooks = async () =>{
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    useEffect(()=>{
        fetchBooks();
    }, []);

    const addBook = async (title)=>{
        const response = await axios.post('http://localhost:3001/books',{
            title
        });
        setBooks([...books, response.data]);
    }
    const deleteBookById = async (id)=>{
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        console.log(response);
        const updatedBooks = books.filter((book)=>{
            return book.id!==id;
        });
        setBooks(updatedBooks);
    }

    const editBookById = async (id,title)=>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title
        });
        console.log(response);
        const updatedBooks = books.map((book)=>{
            if(book.id===id){
                book.title = title;
            }
            return book;
        });
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} deleteBookById = {deleteBookById} onEdit = {editBookById}/>
            <BookCreate addBook={addBook}/>
        </div>
        
    )
}
export default App;