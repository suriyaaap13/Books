import { useEffect } from "react";
import { Provider } from './context/books'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App(){
    
    const { fetchBooks } = useBooksContext();

    useEffect(()=>{
        fetchBooks();
    }, []);

    

    return (
        <Provider className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </Provider>
        
    )
}
export default App;