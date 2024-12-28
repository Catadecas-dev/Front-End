import React from "react";
import styles from "./AddToCart.module.css";

const AddToCart = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className={styles.toast}>
      {message}
    </div>
  );
};

export default AddToCart;
