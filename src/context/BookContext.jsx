// src/context/BookContext.jsx
import { createContext } from "react";
import useBooks from "../hooks/useBooks";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { books, addBook, removeBook, toggleRead, updateBook } = useBooks();

  return (
    <BookContext.Provider
      value={{ books, addBook, removeBook, toggleRead, updateBook }}
    >
      {children}
    </BookContext.Provider>
  );
};