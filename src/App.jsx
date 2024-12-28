import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSideBar";
import styles from "./App.module.css";
import LandingPage from "./pages/LandingPage";
import AddToCart from "./components/AddToCart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [toast, setToast] = useState({ visible: false, message: "" }); 

  const showToast = (message) => {
    setToast({ visible: true, message });

    setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar setCartOpen={() => setIsCartOpen(true)} />

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          showToast={showToast} 
        />
        <AddToCart message={toast.message} visible={toast.visible} />
        <main className={styles.app__content}>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route
              path="/"
              element={<HomePage showToast={showToast} />} 
            />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
