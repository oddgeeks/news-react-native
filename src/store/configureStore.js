import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducer';


// const asyncDispatchMiddleware = store => next => (action) => {
//   let syncActivityFinished = false;
//   let actionQueue = [];

//   function flushQueue() {
//     actionQueue.forEach(a => store.dispatch(a)); // flush queue
//     actionQueue = [];
//   }

//   function asyncDispatch(asyncAction) {
//     actionQueue = actionQueue.concat([asyncAction]);

//     if (syncActivityFinished) {
//       flushQueue();
//     }
//   }

//   const actionWithAsyncDispatch =
//       Object.assign({}, action, { asyncDispatch });

//   next(actionWithAsyncDispatch);
//   syncActivityFinished = true;
//   flushQueue();
// };

const middleware = [logger, thunk, reduxImmutableStateInvariant()];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
