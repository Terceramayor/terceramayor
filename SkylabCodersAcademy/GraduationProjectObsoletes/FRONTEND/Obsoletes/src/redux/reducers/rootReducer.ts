import { combineReducers } from 'redux';
import obsoletesProductsObjectReducer from './obsoletesProductsObjectReducer';
import obsoletesProductStatsReducer from './obsoletesProductStatsReducer';
import obsoletesUserRegisterReducer from './obsoletesUserRegisterReducer';
import obsoletesUserLogInReducer from './obsoletesUserLogInReducer';
import deathReasonValidatorReducer from './deathReasonValidatorReducer';
import actionsObsoletesUserProfileReducer from './actionsObsoletesUserProfileReducer';

const rootReducer = combineReducers({
  obsoletesProductsObject: obsoletesProductsObjectReducer,
  obsoletesProductStats: obsoletesProductStatsReducer,
  userRegister: obsoletesUserRegisterReducer,
  userLogIn: obsoletesUserLogInReducer,
  okToSubmitDeathReason: deathReasonValidatorReducer,
  userprofileProducts: actionsObsoletesUserProfileReducer
});

export default rootReducer;
