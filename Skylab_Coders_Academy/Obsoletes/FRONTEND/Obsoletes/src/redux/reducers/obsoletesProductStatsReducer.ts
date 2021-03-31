import actionTypes from '../actions/actionTypes';
import { ObsoleteProductInterface, Action } from '../../utils/interfaces';

interface InitialState {}

export default function obsoletesProductStatsReducer (state = {}, action: Action):ObsoleteProductInterface | InitialState {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT_STATS:

      return action.data;

    case actionTypes.FEEDBACK_NEW:

      return action.data;

    case actionTypes.FEEDBACK_BROKEN:

      return action.data;

    default:
      return state;
  }
}
