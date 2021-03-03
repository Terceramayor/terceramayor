import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import shoppingCartReducer from './shoppingCartReducer';
import shoppingCartPriceReducer from './shoppingCartPriceReducer';

const rootReducer = combineReducers({
  itemsList: itemsReducer,
  shoppingCartItems: shoppingCartReducer,
  shoppingCartPrice: shoppingCartPriceReducer
});

export default rootReducer;
