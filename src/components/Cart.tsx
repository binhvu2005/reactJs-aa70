// src/components/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  return (
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h1 className="panel-title">Your Cart</h1>
      </div>
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '4%' }}>STT</th>
              <th>Name</th>
              <th style={{ width: '25%' }}>Price</th>
              <th style={{ width: '4%' }}>Quantity</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody id="my-cart-body">
            {cartItems.map((item: any, index: number) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </tbody>
          <tfoot id="my-cart-footer">
            <tr>
              <td colSpan={4}>
                There are <b>{cartItems.length}</b> items in your shopping cart.
              </td>
              <td colSpan={2} className="total-price text-left">
                {cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0)} USD
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
