import { actions } from '../../utils/noMagicStrings';
import { Action, ActionProductsRelatedActions } from '../../utils/interfaces';

interface InitialState {}

export default function productsRelatedReducer(state = {},
  action:Action):InitialState | ActionProductsRelatedActions {
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
