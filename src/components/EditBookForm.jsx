
import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const EditBookForm = ({ book, onCancel }) => {
  const [form, setForm] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    year: book.year,
  });
  
  const { updateBook } = useContext(BookContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    updateBook({ ...book, ...form });
    onCancel(); 
  };

  return (
    <form onSubmit={handleSubmit} className="bg-orange-50 p-4 rounded shadow-md mt-2">
      <div className="mb-2">
        <label className="block mb-1">Título</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Autor</label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Género</label>
        <input
          type="text"
          name="genre"
          value={form.genre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Año de Publicación</label>
        <input
          type="number"
          name="year"
          value={form.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="flex space-x-2">
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
          Actualizar Libro
        </button>
        <button type="button" onClick={onCancel} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default EditBookForm;