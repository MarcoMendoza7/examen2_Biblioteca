
import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import EditBookForm from "./EditBookForm";

const BookList = () => {
  const { books, removeBook, toggleRead } = useContext(BookContext);
  const [editingBookId, setEditingBookId] = useState(null);

  const unreadBooks = books.filter((book) => !book.read);

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        Libros Registrados
      </h2>
      {unreadBooks.length === 0 ? (
        <p className="text-green-600">No hay libros pendientes.</p>
      ) : (
        <ul className="space-y-4">
          {unreadBooks.map((book) => (
            <li
              key={book.id}
              className="bg-green-100 p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center border border-green-300"
            >
              <div className="mb-2 sm:mb-0">
                <h3 className="text-xl font-semibold text-green-800">
                  {book.title}
                </h3>
                <p className="text-green-600">
                  {book.author} - {book.genre} - {book.year}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleRead(book.id)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-3 py-1 rounded transition-colors duration-200"
                >
                  Marcar como leído
                </button>
                <button
                  onClick={() => removeBook(book.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded transition-colors duration-200"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => setEditingBookId(book.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1 rounded transition-colors duration-200"
                >
                  Editar
                </button>
              </div>
              {}
              {editingBookId === book.id && (
                <EditBookForm
                  book={book}
                  onCancel={() => setEditingBookId(null)}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;