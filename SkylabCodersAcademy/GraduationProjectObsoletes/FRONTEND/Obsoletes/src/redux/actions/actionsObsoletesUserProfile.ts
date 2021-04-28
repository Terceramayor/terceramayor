import axios from 'axios';
import actionTypes from './actionTypes';
import { actionObjectReturnLoadUserProfile } from '../../utils/interfaces';
import petitionsRoutes from './petitionsRoutes';

import { Dispatch } from 'react';

import { Casuistic } from '../../utils/enums';

export function loadUserProfile (user:string):Function {
  return async (dispatch: Dispatch<actionObjectReturnLoadUserProfile>):Promise<void> => {
    const { data } = await axios.get(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_CASA);
    let identifiedArray = [];

    data.forEach(product => {
      identifiedArray.push({ ...product, place: Casuistic.Obsoletes });
    });

    const userRated = [];
    identifiedArray.forEach((product) => {
      product.stats.forEach(stat => {
        if (stat.user === user) {
          userRated.push(product);
        }
      });
    });
    identifiedArray = [...userRated];

    const actionObject = {
      type: actionTypes.LOAD_USER_PROFILE,
      data: {
        productsArray: identifiedArray
      }
    };
    dispatch(actionObject);
  };
}
