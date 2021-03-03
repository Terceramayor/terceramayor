import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import reducersCombined from '../reducers/combineReducers';

const listInitialState = {
  itemsList: [],
  shoppingCartItems: [],
  shoppingCartPrice: 0
};

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducersCombined,
    listInitialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), thunk))

  );
}

export default configureStore;
