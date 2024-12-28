import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./BookDetails.module.css";

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook({
          ...data.volumeInfo,
          description: data.volumeInfo.description?.replace(/<\/?[^>]+(>|$)/g, "") || "No hay descripción disponible.",
        });
      })
      .catch((error) => console.error("Error al obtener los detalles del libro:", error));
  }, [id]);

  if (!book) return <p>Cargando detalles...</p>;

  return (
    <div className={styles["book-details-container"]}>
      <div className={styles["book-details"]}>
        <img
          src={book.imageLinks?.thumbnail || "https://via.placeholder.com/300x400.png"}
          alt={book.title}
          className={styles["book-details__image"]}
        />
        <div className={styles["book-details__info"]}>
          <h1 className={styles["book-details__title"]}>{book.title}</h1>
          <h3 className={styles["book-details__author"]}>
            {book.authors?.join(", ") || "Autor desconocido"}
          </h3>
          <p className={styles["book-details__description"]}>
            {book.description}
          </p>
          <button
            className={styles["book-details__add-to-cart"]}
            onClick={() => addToCart(book)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
