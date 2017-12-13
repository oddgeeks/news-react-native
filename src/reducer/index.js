import { combineReducers } from 'redux';
import sourceReducer from './sources';
import articleReducer from './articles';
import categoryReducer from './categories';
import nav from './nav';
import ajaxCallStatus from './ajaxCallStatus';
import authReducer from './auth';
import searchArticleReducer from './SearchArticles';

const rootReducer = combineReducers({
  sourceReducer,
  articleReducer,
  categoryReducer,
  authReducer,
  ajaxCallStatus,
  nav,
  searchArticleReducer
});

export default rootReducer;
