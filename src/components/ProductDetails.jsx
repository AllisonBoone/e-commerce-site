import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../ShoppingCartContext';
import { getProductById } from '../api';

// Shows item details
const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addToCart } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);

  // Shows error message when item is not found
  if (!product) {
    return <p>Product not found</p>;
  }

  // Adds and removes items when user selects the number and adds to cart
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Quantity selector */}
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
