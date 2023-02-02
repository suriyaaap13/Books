import { useEffect } from "react";
import { Provider } from './context/books';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App(){
    
    const { fetchBooks } = useBooksContext();

    
    useEffect(()=>{
        
        fetchBooks()
        
    }, []);

    

    return (
        <div className="app">
            <Provider>
                <h1>Reading List</h1>
                <BookList />
                <BookCreate />
            </Provider>
        </div>
        
        
    )
}
export default App;