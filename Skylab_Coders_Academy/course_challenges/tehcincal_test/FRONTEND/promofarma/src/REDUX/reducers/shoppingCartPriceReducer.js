/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.CALCULATE_TOTAL_PRICE:

      return action.data;

    default:
      return state;
  }
}
