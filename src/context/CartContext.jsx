import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, product) =>
          acc + parseInt(product.quantity) * parseInt(product.price),
        0
      )
    );
  }, [cart]);

  const isInCart = (isbn) => cart.some((item) => item.isbn === isbn);

  const addItem = (item, quantity) => {
    if (!isInCart(item.isbn)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (isbn) => {
    const cartUpdated = cart.filter((item) => item.isbn !== isbn);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
