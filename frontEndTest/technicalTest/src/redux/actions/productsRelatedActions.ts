import axios from 'axios';
import { Dispatch } from 'react';
import { actions, petitionRoutes } from '../../utils/noMagicStrings';
import deleteAddproduct from '../../utils/deleteAddproduct';

export function loadShoppingCart():Function {
  return async (dispatch: Dispatch<actionObjectReturnLoadSearch>):Promise<void> => {
    const { data } = await axios.get(petitionRoutes.drinksAndCo);
    const actionObject = {
      type: actions.loadShoppingcart,
      data
    };
    dispatch(actionObject);
  };
}

export function increaseDecreaseQuantity(productId, storeId, currentShoppingCart, operation) {
  let updatedProductsArray = [];
  let storeIndex;
  const shoppingCartUpdated = JSON.parse(JSON.stringify(currentShoppingCart));
  shoppingCartUpdated.data.stores.data.forEach((store, index) => {
    if (store.id === storeId) {
      updatedProductsArray = deleteAddproduct(store.relationships.items, productId, operation);
      storeIndex = index;
    }
  });
  shoppingCartUpdated.data.stores.data[storeIndex].relationships.items = updatedProductsArray;
  const actionObject = {

    type: actions.decreaseProduct,
    data: shoppingCartUpdated

  };
  return actionObject;
}
