import actionTypes from '../constants/actionTypes';

const sourcesReducer = (state = { sources: [], isLoading: false, errorMessage: '' }, action) => {
  switch (action.type) {
    case actionTypes.GET_SOURCES_SUCCESS:
      return {
        ...state, sources: action.sources, isLoading: false
      };
    case actionTypes.START_GET_SOURCES:
      return {
        isLoading: true, errorMessage: '', sources: []
      };
    case actionTypes.GET_SOURCES_FAILURE:
      return {
        ...state, isLoading: false, errorMessage: action.message
      };
    default:
      return state;
  }
};

export default sourcesReducer;
