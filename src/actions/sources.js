import axios from 'axios';
import actionTypes from '../constants/actionTypes';


const getSourcesSuccess = sources => ({
  type: actionTypes.GET_SOURCES_SUCCESS,
  sources
});
const getSourcesFailure = () => ({
  type: actionTypes.GET_SOURCES_SUCCESS,
});

const getSources = category => async (dispatch) => {
  try {
    const res = await axios.get(`https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe&category=${category}`);
    console.log(res);
    dispatch(getSourcesSuccess(res.data.sources));
  } catch (err) {
    console.log(err);
    dispatch(getSourcesFailure());
  }
};

export {
  getSourcesSuccess,
  getSourcesFailure,
  getSources
};
