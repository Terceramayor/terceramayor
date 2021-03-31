import actionTypes from '../actions/actionTypes';
import { Action, actionObjectReturnLoginLogout } from '../../utils/interfaces';

interface InitialState {}

export default function obsoletesUserLogInReducer (state = { logInSuccess: false }, action: Action):actionObjectReturnLoginLogout['data'] | InitialState {
  switch (action.type) {
    case actionTypes.LOG_IN:

      return action.data;

    case actionTypes.LOG_OUT:

      return action.data;

    default:
      return state;
  }
}
