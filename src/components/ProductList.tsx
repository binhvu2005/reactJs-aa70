// src/components/ProductList.tsx
import React from 'react';
import ProductItem from './Product';

const products = [
  { id: 1, name: 'Pizza', price: 30, img: 'images/pizza.jpg' },
  { id: 2, name: 'Hamburger', price: 15, img: 'images/hamburger.jpg' },
  { id: 3, name: 'Bread', price: 20, img: 'images/bread.jpg' },
  { id: 4, name: 'Cake', price: 10, img: 'images/cake.jpg' },
];

const ProductList: React.FC = () => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h1 className="panel-title">List Products</h1>
      </div>
      <div className="panel-body" id="list-product">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
