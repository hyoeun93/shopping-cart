export const DELETE = 'DELETE';
export const ADD_TO_CART = 'ADD_TO_CART';

export function deleteItem(id) {
  return {
    type: DELETE,
    payload: id,
  };
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}
