/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadAvailableItems() {
  return async (dispatch) => {
    const itemsList = await axios.get('http://localhost:5000/profarma/api/items');
    const actionObject = {
      type: actionTypes.LOAD_AVAILABLE_ITEMS,
      data: itemsList.data
    };
    dispatch(actionObject);
  };
}

export function decreaseItemStock(productId) {
  return async (dispatch) => {
    const foundItem = await axios.get(`http://localhost:5000/profarma/api/items/${productId}`);
    const stockUpdated = foundItem.data.stock - 1;
    await axios.put(`http://localhost:5000/profarma/api/items/${productId}`, { stock: stockUpdated });
    const updatedList = await axios.get('http://localhost:5000/profarma/api/items/');

    const actionObject = {
      type: actionTypes.INCREASE_ITEM_STOCK,
      data: updatedList.data

    };

    dispatch(actionObject);
  };
}

export function increaseItemStock(productId) {
  return async (dispatch) => {
    const foundItem = await axios.get(`http://localhost:5000/profarma/api/items/${productId}`);
    const stockUpdated = 1 + foundItem.data.stock;
    await axios.put(`http://localhost:5000/profarma/api/items/${productId}`, { stock: stockUpdated });
    const updatedList = await axios.get('http://localhost:5000/profarma/api/items/');

    const actionObject = {
      type: actionTypes.INCREASE_ITEM_STOCK,
      data: updatedList.data

    };

    dispatch(actionObject);
  };
}

export function addItemToShoppingCart(product) {
  const actionObject = {
    type: actionTypes.ADD_ITEM_TO_SHOPCART,
    data: product
  };
  return actionObject;
}

export function deleteItemFromShoppingCart(productId) {
  const actionObject = {
    type: actionTypes.DELETE_ITEM_FROM_SHOPCART,
    data: productId
  };
  return actionObject;
}

export function deleteAllShoppingCartItems() {
  const actionObject = {};
  return actionObject;
}

export function calculateTotalPrice(products) {
  const totalPrice = products.reduce((acumulator, product) => acumulator + product.price, 0);

  const actionObject = {
    type: actionTypes.CALCULATE_TOTAL_PRICE,
    data: totalPrice
  };
  return actionObject;
}

export function deleteAllCartItems(products) {
  let stockUpdated;
  let foundItem;

  return async (dispatch) => {
    for (let i = 0; i < products.length; i += 1) {
      foundItem = await axios.get(`http://localhost:5000/profarma/api/items/${products[i]._id}`);
      stockUpdated = 1 + foundItem.data.stock;
      await axios.put(`http://localhost:5000/profarma/api/items/${products[i]._id}`, { stock: stockUpdated });
    }
    const itemList = await axios.get('http://localhost:5000/profarma/api/items');

    const actionObject = {
      type: actionTypes.DELETE_ALL_CART_ITEMS,
      data: itemList.data
    };
    dispatch(actionObject);
  };
}
