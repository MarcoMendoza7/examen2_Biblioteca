
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const ReadBooks = () => {
  const { books, toggleRead } = useContext(BookContext);
  const readBooks = books.filter((book) => book.read);

  return (
    <div className="mb-6">
      {}
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        Libros Leídos
      </h2>
      {readBooks.length === 0 ? (
        <p className="text-green-600">No hay libros marcados como leídos.</p>
      ) : (
        <ul className="space-y-4">
          {readBooks.map((book) => (
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
              <button
                onClick={() => toggleRead(book.id)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-3 py-1 rounded transition-colors duration-200"
              >
                Desmarcar Leído
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReadBooks;