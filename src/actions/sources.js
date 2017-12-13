import axios from 'axios';
import actionTypes from '../constants/actionTypes';

const getSourcesSuccess = sources => ({
  type: actionTypes.GET_SOURCES_SUCCESS,
  sources
});
const getSourcesFailure = () => ({
  type: actionTypes.GET_SOURCES_SUCCESS,
});

const startGetSources = () => ({
  type: actionTypes.START_GET_SOURCES
});

const getSources = category => async (dispatch) => {
  dispatch(startGetSources());
  try {
    const res = await axios.get(`https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe&category=${category}`);
    dispatch(getSourcesSuccess(res.data.sources));
  } catch (err) {
    dispatch(getSourcesFailure(`Failed to load sources for ${category}`));
  }
};

export {
  getSourcesSuccess,
  getSourcesFailure,
  getSources
};
