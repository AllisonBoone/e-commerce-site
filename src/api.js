import BedFrame from './images/BedFrame.jpg';
import Couch from './images/Couch.jpg';
import BarChairs from './images/BarChairs.jpg';
import KitchenTable from './images/KitchenTable.jpg';
import Wardrobe from './images/Wardrobe.jpg';

//Mock API content
const products = [
  {
    id: 1,
    name: 'Bed Frame',
    description: 'Sturdy wooden bed frame.',
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

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
