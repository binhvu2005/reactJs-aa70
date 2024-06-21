// src/components/ProductItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={product.img} alt={product.name} />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{product.name}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button className="price" onClick={handleAddToCart}>{product.price} USD</button>
       
      </div>
    </div>
  );
};

export default ProductItem;
