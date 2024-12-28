import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

const BookCard = ({ book, onAddToCart }) => {
  const placeholderImage =
    "https://via.placeholder.com/200x300.png?text=No+Image";

  return (
    <div className={styles["book-card"]}>
      <Link to={`/book/${book.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <img
      src={book.image || "https://via.placeholder.com/200x300.png?text=No+Image"}
      alt={book.title}
      className={styles["book-card__image"]}
      />
        <h3 className={styles["book-card__title"]}>{book.title}</h3>
        <p className={styles["book-card__author"]}>Autor: {book.author}</p>
       </Link>
      <button
        onClick={() => onAddToCart(book)} 
        className={styles["book-card__button"]}
      >
        Agregar al carrito
      </button>
    </div>
 );
};

export default BookCard;
