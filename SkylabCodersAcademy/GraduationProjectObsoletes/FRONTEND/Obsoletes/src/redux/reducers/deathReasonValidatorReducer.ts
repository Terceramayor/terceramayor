import actionTypes from '../actions/actionTypes';
import { actionObjectReturnvalidateDeathReason } from '../../utils/interfaces';

export default function deathReasonValidatorReducer (state = 0, action:actionObjectReturnvalidateDeathReason):number {
  return (action.type === actionTypes.VALIDATE_DEATH_REASON) ? action.data : state;
}
