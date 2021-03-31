import axios from 'axios';
import actionTypes from './actionTypes';
import { ObsoleteProductInterface, actionObjectReturnLoadSearch } from '../../utils/interfaces';
import petitionsRoutes from './petitionsRoutes';
import loadCase from '../../utils/loadCase';
import { Dispatch } from 'react';
import { searchPetitionsAxiosConfig } from '../../utils/searchPetitionsAxiosConfig';
import { removeRepeatedEntries } from '../../utils/removeRepeatedEntries';
import { checkIfInObsoletesDb } from '../../utils/checkIfInObsoletesDb';
import { Casuistic } from '../../utils/enums';

export function loadDashboard (casuistic:string):Function {
  return async (dispatch: Dispatch<actionObjectReturnLoadSearch>):Promise<void> => {
    const { data } = await axios.get(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_CASA);
    const identifiedArray = [];

    data.forEach(product => {
      identifiedArray.push({ ...product, place: Casuistic.Obsoletes });
    });
    if (casuistic === loadCase.TOP_RATED) {
      identifiedArray.sort((a:ObsoleteProductInterface, b:ObsoleteProductInterface) => a.obsoletion - b.obsoletion);
    } else {
      identifiedArray.sort((a:ObsoleteProductInterface, b:ObsoleteProductInterface) => Date.parse(b.updatedDate.toString()) - Date.parse(a.updatedDate.toString()));
    }
    const actionObject = {
      type: actionTypes.LOAD_DASHBOARD,
      data: {
        productsArray: identifiedArray,
        casuistic
      }
    };
    dispatch(actionObject);
  };
}

export function searchProduct (searchQuery:string): Function {
  return async (dispatch: Dispatch<actionObjectReturnLoadSearch>):Promise<void> => {
    try {
      let fullSearchResponse = [];
      const petitionsArray = searchPetitionsAxiosConfig(searchQuery);

      for (let i = 0; i < petitionsArray.length; i = i + 1) {
        const { data: searchPost } = await axios.post(petitionsRoutes.SEARCH_COMMERCIAL_PRODUCTS_CASA, petitionsArray[i]);
        fullSearchResponse = fullSearchResponse.concat(searchPost);
      }
      const { data: searchGet } = await axios.get(petitionsRoutes.OBSOLETES_RATED_PRODUCTS_CASA);

      const filteredSearch = removeRepeatedEntries(fullSearchResponse);
      const arrayToPresent = checkIfInObsoletesDb(filteredSearch, searchGet);
      const actionObject = {
        type: actionTypes.SEARCH_PRODUCT,
        data: {
          productsArray: arrayToPresent,
          casuistic: actionTypes.SEARCH_PRODUCT
        }
      };
      dispatch(actionObject);
    } catch (error) {
      const actionObject = {
        type: actionTypes.SEARCH_PRODUCT,
        data: {
          productsArray: [],
          casuistic: actionTypes.SEARCH_PRODUCT
        }
      };
      dispatch(actionObject);
    }
  };
}
