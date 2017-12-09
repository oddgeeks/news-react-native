import { combineReducers } from 'redux';
import sourceReducer from './sources';
import articleReducer from './articles';
import categoryReducer from './categories';
import nav from './nav';
import authReducer from './auth';

const rootReducer = combineReducers({
  sourceReducer,
  articleReducer,
  categoryReducer,
  authReducer,
  nav
});

export default rootReducer;
