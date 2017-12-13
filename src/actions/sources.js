import axios from 'axios';
import actionTypes from '../constants/actionTypes';
import { beginAjaxCall } from './ajaxCallStatus';


const getSourcesSuccess = sources => ({
  type: actionTypes.GET_SOURCES_SUCCESS,
  sources
});
const getSourcesFailure = () => ({
  type: actionTypes.GET_SOURCES_SUCCESS,
});

const getSources = category => async (dispatch) => {
  dispatch(beginAjaxCall());
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
