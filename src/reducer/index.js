import { combineReducers } from 'redux';
import sourceReducer from './sources';
import articleReducer from './articles';

const rootReducer = combineReducers({
  sourceReducer,
  articleReducer
});

export default rootReducer;
