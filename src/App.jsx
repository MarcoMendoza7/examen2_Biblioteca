
import React from "react";
import { BookProvider } from "./context/BookContext";
import BookForm from "./components/BookForm";
import Filters from "./components/Filters";
import BookList from "./components/BookList";
import ReadBooks from "./components/ReadBooks";

function App() {
  return (
    <BookProvider>
      {}
      <div className="min-h-screen bg-gradient-to-r from-green-700 to-orange-700 p-8">
        
        {}
        <h1 className="text-4xl uppercase text-center font-bold mb-8 p-4 rounded shadow-lg bg-gradient-to-r from-green-500 to-orange-500 text-white">
          Gestor de Libros - Biblioteca
        </h1>
        
        <div className="container mx-auto">
          <BookForm />
          <Filters />
          <BookList />
          <ReadBooks />
        </div>
      </div>
    </BookProvider>
  );
}

export default App;