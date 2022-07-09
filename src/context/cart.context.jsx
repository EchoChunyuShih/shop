import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
