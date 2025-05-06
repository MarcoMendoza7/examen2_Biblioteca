
import { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.author && form.genre && form.year) {
      addBook(form);
      setForm({ title: "", author: "", genre: "", year: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-green-50 p-6 rounded-lg shadow-lg border border-green-200 mb-6"
    >
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Agregar Nuevo Libro
      </h2>
      <div className="mb-4">
        <label className="block text-green-700 mb-1">Título</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded focus:outline-green-500 focus:ring-2 focus:ring-green-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-green-700 mb-1">Autor</label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded focus:outline-green-500 focus:ring-2 focus:ring-green-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-green-700 mb-1">Género</label>
        <input
          type="text"
          name="genre"
          value={form.genre}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded focus:outline-green-500 focus:ring-2 focus:ring-green-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-green-700 mb-1">Año de Publicación</label>
        <input
          type="number"
          name="year"
          value={form.year}
          onChange={handleChange}
          className="w-full p-2 border border-green-300 rounded focus:outline-green-500 focus:ring-2 focus:ring-green-200"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
      >
        Agregar Libro
      </button>
    </form>
  );
};

export default BookForm;