import React, { useState } from "react";
import CartSidebar from "./CartSideBar";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); 

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar__logo"]}>
          📚 Relatos de Papel
        </div>
        <div className={styles["navbar__links"]}>
          <Link to="/">Inicio</Link>
          <Link to="/checkout">Checkout</Link>
          <button
            className={styles["navbar__cart-button"]}
            onClick={() => setIsCartOpen(true)}
          >
            Carrito 🛒
          </button>
        </div>
      </nav>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
