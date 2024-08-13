import React from 'react';
import { useNavigate } from 'react-router-dom';
import BedFrame from '../images/BedFrame.jpg';
import Couch from '../images/Couch.jpg';
import BarChairs from '../images/BarChairs.jpg';
import KitchenTable from '../images/KitchenTable.jpg';
import Wardrobe from '../images/Wardrobe.jpg';

//Shows product information
const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Bed Frame',
      description: 'Wooden bed frame.',
      price: 250,
      image: BedFrame,
    },
    {
      id: 2,
      name: 'Couch',
      description: 'Comfortable blue couch.',
      price: 300,
      image: Couch,
    },
    {
      id: 3,
      name: 'Bar Chairs',
      description: 'Stylish bar chairs.',
      price: 150,
      image: BarChairs,
    },
    {
      id: 4,
      name: 'Kitchen Table',
      description: 'Elegant dining table.',
      price: 400,
      image: KitchenTable,
    },
    {
      id: 5,
      name: 'Wardrobe',
      description: 'Spacious wardrobe.',
      price: 350,
      image: Wardrobe,
    },
  ];

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`);
  };

  //Sends user to product details page when the click "View" button
  return (
    <div className="container">
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleViewProduct(product)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
