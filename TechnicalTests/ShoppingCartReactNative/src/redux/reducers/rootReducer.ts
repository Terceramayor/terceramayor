import { combineReducers } from 'redux';
import productsRelatedReducer from './productsRelatedReducer';

const rootReducer = combineReducers({
  shoppingCart: productsRelatedReducer
});

export default rootReducer;
