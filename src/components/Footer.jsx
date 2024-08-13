import React from 'react';

// Allow footer to appear at the bottom of page and have current year
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Generic Furniture Store</p>
    </footer>
  );
};

export default Footer;
