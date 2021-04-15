import axios from 'axios';
import { Dispatch } from 'react';
import { actions, petitionRoutes } from '../../utils/noMagicStrings';
import deleteAddproduct from '../../utils/deleteAddproduct';
import {
  ShoppingCart, Store, Item, ActionProductsRelatedActions
} from '../../utils/interfaces';

export function loadShoppingCart():Function {
  return async (dispatch: Dispatch<ActionProductsRelatedActions>):Promise<void> => {
    const { data } = await axios.get(petitionRoutes.drinksAndCo);
    const actionObject = {
      type: actions.loadShoppingcart,
      data
    };
    dispatch(actionObject);
  };
}

export function increaseDecreaseQuantity(
  productId:number,
  storeId:number,
  currentShoppingCart:ShoppingCart,
  operation:string
):ActionProductsRelatedActions {
  let updatedProductsArray:Item[] | [] = [];
  let storeIndex:number;

  const shoppingCartUpdated = JSON.parse(JSON.stringify(currentShoppingCart));
  shoppingCartUpdated.data.stores.data.forEach((
    store:Store,
    index:number
  ) => {
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
