import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { ShoppingCartProvider } from './ShoppingCartContext';

// Renders app into a root element
ReactDOM.render(
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>,
  document.getElementById('root')
);
