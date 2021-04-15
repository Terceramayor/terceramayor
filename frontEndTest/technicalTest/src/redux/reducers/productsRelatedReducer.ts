import { actions } from '../../utils/noMagicStrings';

export default function productsRelatedReducer(state = {}, action) {
  switch (action.type) {
    case actions.loadShoppingcart:

      return action.data;

    case actions.increaseProduct:

      return action.data;

    case actions.decreaseProduct:

      return action.data;

    default:
      return state;
  }
}
