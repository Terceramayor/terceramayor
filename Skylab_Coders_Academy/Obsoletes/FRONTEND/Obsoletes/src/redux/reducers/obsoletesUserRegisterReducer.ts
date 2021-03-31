import actionTypes from '../actions/actionTypes';
import { Action, actionObjectReturnRegister } from '../../utils/interfaces';

interface InitialState {}

export default function obsoletesUserRegisterReducer (state = { result: false }, action: Action):actionObjectReturnRegister['data'] | InitialState {
  switch (action.type) {
    case actionTypes.REGISTER:

      return action.data;

    case actionTypes.LOG_OUT:

      return action.data;

    default:
      return state;
  }
}
