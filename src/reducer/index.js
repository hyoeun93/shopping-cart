import { DELETE, ADD_TO_CART } from '../action/index';

const initialState = [];

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case DELETE:
      return state.filter((item) => item.id !== action.payload);
  }
  return state;
}
