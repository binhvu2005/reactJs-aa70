// src/App.tsx
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
