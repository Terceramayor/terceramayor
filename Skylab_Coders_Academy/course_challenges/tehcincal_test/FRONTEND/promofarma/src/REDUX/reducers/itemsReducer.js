import actionTypes from '../actions/actionTypes';

export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_AVAILABLE_ITEMS:

      return action.data;

    case actionTypes.INCREASE_ITEM_STOCK:

      return action.data;

    case actionTypes.DELETE_ALL_CART_ITEMS:

      return action.data;

    default:
      return state;
  }
}
