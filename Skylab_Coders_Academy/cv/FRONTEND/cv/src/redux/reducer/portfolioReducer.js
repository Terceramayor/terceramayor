/* eslint-disable no-debugger */
import actions from '../actions/actionsTypes';

export default function portfolioReducer(state = '', action) {
  switch (action.type) {
    case actions.LOAD_PORTFOLIO:
      return action.data;

    default:
      return state;
  }
}
