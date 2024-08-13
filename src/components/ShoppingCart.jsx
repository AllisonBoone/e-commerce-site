import React, { useState } from 'react';
import { useShoppingCart } from '../ShoppingCartContext';
import { Link } from 'react-router-dom';

//Shows the name and description od item
const ShoppingCart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useShoppingCart();
  const [quantities, setQuantities] = useState(
    cartItems.map((item) => item.quantity)
  );

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return;
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = quantity;
    setQuantities(updatedQuantities);
    const updatedItem = { ...cartItems[index], quantity };
    updateCartItem(updatedItem);
  };

  //Allows user to edit the quantity of item they want as well as option to remove it or add it to cart
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <div className="item" key={item.id}>
            <div>
              {item.name} - ${item.price} x
              <input
                type="number"
                min="1"
                value={quantities[index]}
                onChange={(e) => updateQuantity(index, Number(e.target.value))}
              />
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </ul>
      <Link to="/checkout">
        <button className="checkout-button">Go to Checkout</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
