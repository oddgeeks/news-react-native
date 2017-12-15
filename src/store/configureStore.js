import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducer';


const middleware = [thunk];

export default function configureStore(initialState) {
  if (__DEV__) { // eslint-disable-line
    middleware.push(logger, reduxImmutableStateInvariant());
  }
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
