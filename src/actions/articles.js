import axios from 'axios';
import actionTypes from '../constants/actionTypes';
import { beginAjaxCall } from './ajaxCallStatus';

const getArticlesSuccess = articles => ({
  type: actionTypes.GET_ARTICLES_SUCCESS,
  articles
});
const getArticlesFailure = message => ({
  type: actionTypes.GET_ARTICLES_FAILURE,
  message
});

const getArticles = source => async (dispatch) => {
  dispatch(beginAjaxCall());
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=213327409d384371851777e7c7f78dfe&sources=${source}`);
    setTimeout(() => {
      dispatch(getArticlesSuccess(res.data.articles));
    }, 0);
  } catch (err) {
    dispatch(getArticlesFailure(`Failed to load articles from ${source}`));
  }
};

export {
  getArticlesSuccess,
  getArticlesFailure,
  getArticles
};
