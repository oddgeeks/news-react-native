import actionTypes from '../constants/actionTypes';

const searchArticlesReducer = (state = { articles: [], isLoading: false, errorMessage: '' }, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_ARTICLES_SUCCESS:
      return {
        ...state, articles: action.articles, isLoading: false
      };
    case actionTypes.START_SEARCH_ARTICLES:
      return {
        isLoading: true, errorMessage: '', articles: []
      };
    case actionTypes.RESET_SEARCH_ARTICLES:
      return {
        articles: [], isLoading: false, errorMessage: ''
      };
    case actionTypes.SEARCH_ARTICLES_FAILURE:
      return {
        ...state, isLoading: false, errorMessage: action.message
      };
    default:
      return state;
  }
};

export default searchArticlesReducer;
