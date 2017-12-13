import axios from 'axios';
import actionTypes from '../constants/actionTypes';

const searchArticlesSuccess = articles => ({
  type: actionTypes.SEARCH_ARTICLES_SUCCESS,
  articles
});
const searchArticlesFailure = message => ({
  type: actionTypes.SEARCH_ARTICLES_FAILURE,
  message
});

const startSearchArticles = () => ({
  type: actionTypes.START_SEARCH_ARTICLES
});

const resetSearchArticles = () => ({
  type: actionTypes.RESET_SEARCH_ARTICLES
});
const searchArticles = query => async (dispatch) => {
  dispatch(startSearchArticles());
  try {
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=213327409d384371851777e7c7f78dfe&sortBy=relevancy`);
    if (res.data.articles.length === 0) {
      dispatch(searchArticlesFailure('no articles found matching search term'));
    } else {
      dispatch(searchArticlesSuccess(res.data.articles));
    }
  } catch (err) {
    dispatch(searchArticlesFailure('could not search for articles'));
  }
};

export {
  searchArticles,
  searchArticlesFailure,
  searchArticlesSuccess,
  resetSearchArticles
};
