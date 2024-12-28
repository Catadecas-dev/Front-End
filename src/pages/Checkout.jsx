import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("¡El pedido se ha realizado con éxito! 🎉"); 
    clearCart(); 
    navigate("/"); 
  };

  return (
    <div className={styles["checkout-container"]}>
      <h1 className={styles["checkout-title"]}>Resumen del Pedido</h1>
      {cart.length === 0 ? (
        <p className={styles["checkout-empty"]}>
          El carrito está vacío. No hay libros para procesar.
        </p>
      ) : (
        <>
          <ul className={styles["checkout-list"]}>
            {cart.map((item) => (
              <li key={item.id} className={styles["checkout-item"]}>
                <img
                  src={item.image || "https://via.placeholder.com/50x75.png?text=No+Image"}
                  alt={item.title}
                  className={styles["checkout-item__image"]}
                />
                <div className={styles["checkout-item__details"]}>
                  <h3 className={styles["checkout-item__title"]}>{item.title}</h3>
                  <p className={styles["checkout-item__author"]}>
                    Autor: {item.author || "Desconocido"}
                  </p>
                  <p className={styles["checkout-item__quantity"]}>
                    Cantidad: {item.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button
            className={styles["checkout-button"]}
            onClick={handlePayment}
          >
            Confirmar y Pagar
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
