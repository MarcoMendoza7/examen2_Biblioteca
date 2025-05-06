
import { useState, useEffect } from "react";

const useBooks = () => {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    
    setBooks([...books, { ...book, id: Date.now(), read: false }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const toggleRead = (id) => {
    setBooks(
      books.map(book =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };

  return { books, addBook, removeBook, toggleRead, updateBook };
};

export default useBooks;