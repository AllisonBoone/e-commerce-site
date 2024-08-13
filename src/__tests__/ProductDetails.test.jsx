import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { ShoppingCartProvider } from '../ShoppingCartContext';

test('renders product details', () => {
  render(
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );

  window.history.pushState({}, 'Test Page', '/product/1');

  expect(screen.getByText(/Bed Frame/i)).toBeInTheDocument();
  expect(screen.getByText(/Sturdy wooden bed frame./i)).toBeInTheDocument();
  expect(screen.getByText(/Price: \$250/i)).toBeInTheDocument();
});
