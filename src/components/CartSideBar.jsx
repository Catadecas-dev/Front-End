import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./CartSideBar.module.css";

const CartSidebar = ({ isOpen, onClose, showToast }) => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className={styles["cart-modal"]}>
      <div className={styles["cart-modal__content"]}>
        <button className={styles["cart-modal__close"]} onClick={onClose}>
          ×
        </button>
        <h2 className={styles["cart-modal__title"]}>Carrito</h2>
        {cart.length === 0 ? (
          <p className={styles["cart-modal__empty"]}>El carrito está vacío.</p>
        ) : (
          <>
            <ul className={styles["cart-modal__list"]}>
              {cart.map((item) => (
                <li key={item.id} className={styles["cart-modal__item"]}>
                  <img
                    src={
                      item.image ||
                      "https://via.placeholder.com/50x75.png?text=No+Image"
                    }
                    alt={item.title}
                    className={styles["cart-modal__image"]}
                  />
                  <div className={styles["cart-modal__details"]}>
                    <h3>{item.title}</h3>
                    <div className={styles["cart-modal__quantity-container"]}>
                      <span className={styles["cart-modal__quantity-label"]}>
                        Cantidad:
                      </span>
                      <div className={styles["cart-modal__quantity-controls"]}>
                      <button
                        className={styles["cart-modal__button"]}
                        onClick={() => decreaseQuantity(item.id)} 
                      >
                        -
                      </button>
                        <span>{item.quantity}</span>
                        <button
                          className={styles["cart-modal__button"]}
                          onClick={() => {
                            addToCart(item);
                            showToast(`Añadiste "${item.title}" al carrito`);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className={styles["cart-modal__remove"]}
                      onClick={() => {
                        removeFromCart(item.id);
                        showToast(`Eliminaste "${item.title}" del carrito`);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles["cart-modal__footer"]}>
              <button
                className={styles["cart-modal__checkout-btn"]}
                onClick={() => {
                  navigate("/checkout");
                  onClose();
                }}
              >
                Proceder al Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
