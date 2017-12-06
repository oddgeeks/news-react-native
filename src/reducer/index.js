import { combineReducers } from 'redux';
import sourceReducer from './sources';
import articleReducer from './articles';
import categoryReducer from './categories';
import nav from './nav';

const rootReducer = combineReducers({
  sourceReducer,
  articleReducer,
  categoryReducer,
  nav
});

export default rootReducer;
