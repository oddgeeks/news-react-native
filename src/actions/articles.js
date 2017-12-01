import axios from 'axios';
import actionTypes from '../constants/actionTypes';

const getArticlesSuccess = articles => ({
  type: actionTypes.GET_ARTICLES_SUCCESS,
  articles
});
const getArticlesFailure = () => ({
  type: actionTypes.GET_ARTICLES_FAILURE,
});

const getArticles = source => async (dispatch) => {
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=213327409d384371851777e7c7f78dfe&sources=${source}`);
    console.log(res);
    dispatch(getArticlesSuccess(res.data.articles));
  } catch (err) {
    console.log(err);
    dispatch(getArticlesFailure());
  }
};

export {
  getArticlesSuccess,
  getArticlesFailure,
  getArticles
};
