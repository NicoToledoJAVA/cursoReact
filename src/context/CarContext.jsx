import React, { createContext, useState, useContext } from 'react';

// Cambiar a CartContext para mayor claridad
export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un ítem, actualiza la cantidad si ya existe en el carrito
  const addItem = (wine, quantity) => {
    setCartItems((prevItems) => {
      const existingWine = prevItems.find(vino => vino.id === wine.id);
      
      if (existingWine) {
        return prevItems.map((item) =>
          item.id === wine.id
            ? { ...item, quantity } // Actualizar la cantidad del producto
            : item
        );
      } else {
        return [...prevItems, { ...wine, quantity }]; // Agregar el producto con cantidad inicial
      }
    });
  };

  // Función para eliminar un ítem
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Verificar si un ítem está en el carrito
  const isInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};