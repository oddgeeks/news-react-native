import { combineReducers } from 'redux';
import sourceReducer from './sources';
import articleReducer from './articles';
import categoryReducer from './categories';
import nav from './nav';
import authReducer from './auth';
import searchArticleReducer from './SearchArticles';

const rootReducer = combineReducers({
  sourceReducer,
  articleReducer,
  categoryReducer,
  authReducer,
  nav,
  searchArticleReducer
});

export default rootReducer;
