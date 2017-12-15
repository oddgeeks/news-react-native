import actionTypes from '../constants/actionTypes';

const articlesReducer = (state = { articles: [], isLoading: false, errorMessage: '' }, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES_SUCCESS:
      return {
        ...state, articles: action.articles, isLoading: false
      };
    case actionTypes.START_GET_ARTICLES:
      return {
        isLoading: true, errorMessage: '', articles: []
      };
    case actionTypes.GET_ARTICLES_FAILURE:
      return {
        ...state, isLoading: false, errorMessage: action.message
      };
    default:
      return state;
  }
};

export default articlesReducer;
