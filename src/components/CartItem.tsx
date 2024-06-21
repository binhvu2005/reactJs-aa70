// src/components/CartItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem, deleteCartItem } from '../redux/actions';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleUpdate = (quantity: number) => {
    dispatch(updateCartItem(item.id, quantity));
  };

  const handleDelete = () => {
    dispatch(deleteCartItem(item.id));
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.price} USD</td>
      <td>
        <input
          name={`cart-item-quantity-${item.id}`}
          type="number"
          defaultValue={item.quantity}
          onChange={(e) => handleUpdate(Number(e.target.value))}
        />
      </td>
      <td>
        <a className="label label-info update-cart-item" onClick={() => handleUpdate(item.quantity)}>
          Update
        </a>
        <a className="label label-danger delete-cart-item" onClick={handleDelete}>
          Delete
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
