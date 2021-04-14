import axios from 'axios';
import { Dispatch } from 'react';
import { ObsoleteProductInterface, actionObjectReturnLoadSearch } from '../../utils/interfaces';
import { actions, petitionRoutes } from '../../utils/noMagicStrings';

export default function loadShoppingCart():Function {
  return async (dispatch: Dispatch<actionObjectReturnLoadSearch>):Promise<void> => {
    const { data } = await axios.get(petitionRoutes.drinksAndCo);

    const actionObject = {
      type: actions.loadShoppingcart,
      data
    };
    dispatch(actionObject);
  };
}

export function deleteProduct(productToBeDeleted) {
  const actionObject = {

    type: actions.deleteProduct,
    data: productToBeDeleted

  };
  return actionObject;
}
