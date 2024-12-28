import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useCart } from "../context/CartContext";
import styles from "./HomePage.module.css";

const HomePage = ({ showToast }) => {
  const { addToCart } = useCart();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState(""); 
  const [lastSearch, setLastSearch] = useState([]);

  useEffect(() => {
    const query = search || "fiction" || "love"; 
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          const formattedBooks = data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.[0] || "Desconocido",
            image: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/200x300.png?text=No+Image",
          }));
          setBooks(formattedBooks); 
          if (search) setLastSearch(formattedBooks); 
        } else {
          setBooks([]);
        }
      })
      .catch((error) => console.error("Error al cargar libros:", error));
  }, [search]);

  const handleAddToCart = (book) => {
    addToCart(book);
    showToast(`¡"${book.title}" agregado al carrito!`);
  };

  return (
    <div className={styles["home-page"]}>
      <h1 className={styles["home-page__title"]}>¿Qué libro estás buscando?</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className={styles["home-page__books-container"]}>
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
          ))
        ) : lastSearch.length > 0 ? (
          lastSearch.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
          ))
        ) : (
          <p>No se encontraron libros.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
