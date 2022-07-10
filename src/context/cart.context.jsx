import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
});

const addCartItem = (cartItems, productToAdd) => {
  const itemAlreadyInCart = cartItems.find(item => item.id === productToAdd.id);
  if (itemAlreadyInCart) {
    return cartItems.map(item =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = productToAdd =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
