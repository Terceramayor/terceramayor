import axios from 'axios';
import actionTypes from './actionTypes';
import petitionsRoutes from './petitionsRoutes';
import { UserInterface, actionObjectReturnRegister, actionObjectReturnLoginLogout } from '../../utils/interfaces';
import { Dispatch } from 'react';

export function register (userCredentials:UserInterface | null):actionObjectReturnRegister | Function {
  if (userCredentials === null) {
    const actionObject = {

      type: actionTypes.REGISTER,
      data: { ...userCredentials, result: false, status: false }

    };
    return actionObject;
  }
  return async (dispatch: Dispatch<actionObjectReturnRegister>):Promise<void> => {
    const response = await axios.post(petitionsRoutes.REQUEST_REGISTER_CASA, userCredentials);
    const actionObject = {
      type: actionTypes.REGISTER,
      data: { ...userCredentials, result: response.data, status: (response.data === false) }
    };
    dispatch(actionObject);
  };
}

export function logIn (userCredentials:UserInterface): Function {
  let actionObject:actionObjectReturnLoginLogout;
  return async (dispatch: Dispatch<actionObjectReturnLoginLogout>):Promise<void> => {
    try {
      const { data } = await axios.post(petitionsRoutes.REQUEST_LOGIN_CASA, userCredentials);

      actionObject = {
        type: actionTypes.LOG_IN,
        data: { ...data, logInStatus: true }
      };
    } catch (error) {
      actionObject = {
        type: actionTypes.LOG_IN,
        data: { ...userCredentials, logInStatus: false }
      };
    }
    dispatch(actionObject);
  };
}

export function logOut (userCredentials:UserInterface):Function {
  return async (dispatch: Dispatch<actionObjectReturnLoginLogout>):Promise<void> => {
    await axios.get(petitionsRoutes.REQUEST_LOGOUT_CASA);

    const actionObject = {
      type: actionTypes.LOG_OUT,
      data: { ...userCredentials, logInStatus: false }
    };
    dispatch(actionObject);
  };
}
