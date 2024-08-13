import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';

//Main page of the app
const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
