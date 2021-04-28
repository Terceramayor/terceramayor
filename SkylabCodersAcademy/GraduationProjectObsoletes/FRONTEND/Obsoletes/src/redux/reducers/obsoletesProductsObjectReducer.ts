import actionTypes from '../actions/actionTypes';
import { Action, actionObjectReturnLoadSearch } from '../../utils/interfaces';

interface InitialState {}

export default function obsoletesProductsObjectReducer (state = {}, action: Action):actionObjectReturnLoadSearch | InitialState {
  switch (action.type) {
    case actionTypes.LOAD_DASHBOARD:

      return action.data;

    case actionTypes.SEARCH_PRODUCT:

      return action.data;

    default:
      return state;
  }
}
