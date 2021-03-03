import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import reducersCombined from '../reducer/combineReducers';

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducersCombined,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), thunk))

  );
}

export default configureStore;
