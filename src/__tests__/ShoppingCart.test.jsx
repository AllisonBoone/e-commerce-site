import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from '../components/ShoppingCart';
import { ShoppingCartProvider, useShoppingCart } from '../ShoppingCartContext';

test('renders shopping cart', () => {
  const Wrapper = () => {
    const { addToCart } = useShoppingCart();
    return (
      <div>
        <ShoppingCart />
        <button
          onClick={() => addToCart({ id: 1, name: 'Bed Frame', price: 250 })}
        >
          Add Bed Frame
        </button>
      </div>
    );
  };

  render(
    <ShoppingCartProvider>
      <Wrapper />
    </ShoppingCartProvider>
  );

  fireEvent.click(screen.getByText(/Add Bed Frame/i));

  expect(screen.getByText(/Bed Frame/i)).toBeInTheDocument();
  expect(screen.getByText(/250/i)).toBeInTheDocument();
});
