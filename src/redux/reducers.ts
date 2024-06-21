
import { ADD_TO_CART, UPDATE_CART_ITEM, DELETE_CART_ITEM } from './actions';

interface CartItem {
  id: number; }

const initialState = {
  cartItems: [] as CartItem[],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item: CartItem) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;