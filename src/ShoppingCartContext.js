// Shopping cart context
import React, { createContext, useContext, useReducer } from 'react';

const ShoppingCartContext = createContext();

// Function that allows the cart to be edited based on what the user does (add, remove items from cart)
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find((item) => item.id === action.product.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
      } else {
        return [...state, action.product];
      }
    case 'UPDATE_CART_ITEM':
      return state.map((item) =>
        item.id === action.product.id
          ? { ...item, quantity: action.product.quantity }
          : item
      );
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.productId);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const updateCartItem = (product) => {
    dispatch({ type: 'UPDATE_CART_ITEM', product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
