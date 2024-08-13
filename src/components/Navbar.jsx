import React from 'react';
import { Link } from 'react-router-dom';

// Allows Navbar to appear on top of page
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="store-name">Generic Furniture Store</div>
        <div className="nav-links">
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
