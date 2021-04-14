import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

function configureStore() {
  return createStore(
    rootReducer,

    compose(applyMiddleware(reduxImmutableStateInvariant(), thunk))

  );
}

export default configureStore;
