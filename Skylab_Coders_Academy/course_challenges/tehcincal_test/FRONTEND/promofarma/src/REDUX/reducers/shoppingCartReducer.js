/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

export default function itemsReducer(state = [], action) {
  let updatedShoppingCartlist = [];
  let indexToDelete;
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_SHOPCART:

      updatedShoppingCartlist = [...state, action.data];

      return updatedShoppingCartlist;

    case actionTypes.DELETE_ITEM_FROM_SHOPCART:

      indexToDelete = state.findIndex(
        (item) => item._id === action.data
      );

      updatedShoppingCartlist = [...state]; // To prevent mutation when the splice method is invoked

      updatedShoppingCartlist.splice(indexToDelete, 1);

      return updatedShoppingCartlist;

    case actionTypes.DELETE_ALL_CART_ITEMS:

      return [];

    default:
      return state;
  }
}
