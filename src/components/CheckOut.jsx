import React from 'react';
import { useShoppingCart } from '../ShoppingCartContext';

//Shows contents of cart
const CheckOut = () => {
  const { cartItems, clearCart } = useShoppingCart();

  // Shows the cost of the items
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  //Shows the user that check out was successful
  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  //Confirms purchase purchase and price
  return (
    <div className="container">
      <h1>Checkout</h1>
      <ul>
        {cartItems.map((item) => (
          <div className="item" key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = $
            {item.price * item.quantity}
          </div>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2>
      <button className="checkout-button" onClick={handleCheckout}>
        Confirm Purchase
      </button>
    </div>
  );
};

export default CheckOut;
