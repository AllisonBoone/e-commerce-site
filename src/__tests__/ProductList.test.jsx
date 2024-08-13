import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductList from '../components/ProductList';

test('renders product list', () => {
  render(
    <Router>
      <ProductList />
    </Router>
  );

  expect(screen.getByText(/Bed Frame/i)).toBeInTheDocument();
  expect(screen.getByText(/Couch/i)).toBeInTheDocument();
  expect(screen.getByText(/Bar Chairs/i)).toBeInTheDocument();
  expect(screen.getByText(/Kitchen Table/i)).toBeInTheDocument();
  expect(screen.getByText(/Wardrobe/i)).toBeInTheDocument();
});
