
import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const Filters = () => {
  const { books } = useContext(BookContext);
  const [filter, setFilter] = useState({
    term: "",
    field: "title",
  });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredBooks = books.filter((book) =>
    book[filter.field].toLowerCase().includes(filter.term.toLowerCase())
  );

  return (
    <div className="mb-6 p-4 bg-green-50 rounded-lg shadow-lg border border-green-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Filtros</h2>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <select
          name="field"
          value={filter.field}
          onChange={handleChange}
          className="p-2 border border-green-300 rounded focus:outline-green-500"
        >
          <option value="title">Título</option>
          <option value="author">Autor</option>
          <option value="genre">Género</option>
        </select>
        <input
          type="text"
          name="term"
          value={filter.term}
          onChange={handleChange}
          placeholder="Buscar..."
          className="w-full p-2 border border-green-300 rounded focus:outline-green-500 focus:ring-2 focus:ring-green-200"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-green-800">Resultados:</h3>
        {filteredBooks.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {filteredBooks.map((book) => (
              <li
                key={book.id}
                className="bg-green-100 p-2 rounded border border-green-300"
              >
                {book.title} - {book.author} - {book.genre}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-600">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default Filters;