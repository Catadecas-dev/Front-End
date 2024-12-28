import React from "react";
import styles from "./CartItem.module.css"; 

const CartItem = ({ book, onRemove }) => {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-item__details"]}>
        <p className={styles["cart-item__title"]}>{book.title}</p>
        <p className={styles["cart-item__price"]}>${book.price}</p>
      </div>
      <button
        onClick={onRemove}
        className={styles["cart-item__button"]}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
