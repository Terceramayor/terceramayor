import actionTypes from '../actions/actionTypes';
import { Action, actionObjectReturnLoadUserProfile } from '../../utils/interfaces';

interface InitialState {}

export default function actionsObsoletesUserProfileReducer (state = {}, action: Action):actionObjectReturnLoadUserProfile | InitialState {
  return (action.type === actionTypes.LOAD_USER_PROFILE) ? action.data : state;
}
