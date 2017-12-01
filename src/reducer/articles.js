import actionTypes from '../constants/actionTypes';

const articlesReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES_SUCCESS:
      return {
        ...state, articles: action.articles
      };
    default:
      return state;
  }
};

export default articlesReducer;
