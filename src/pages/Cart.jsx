import React from "react";
import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((book) => (
            <CartItem
              key={book.id}
              book={book}
              onRemove={() => removeFromCart(book.id)}
            />
          ))}
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;
