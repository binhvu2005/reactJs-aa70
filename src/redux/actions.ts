// src/actions/cartActions.ts
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

export const addToCart = (product: any) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateCartItem = (productId: number, quantity: number) => ({
  type: UPDATE_CART_ITEM,
  payload: { productId, quantity },
});

export const deleteCartItem = (productId: number) => ({
  type: DELETE_CART_ITEM,
  payload: productId,
});
