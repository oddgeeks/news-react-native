import actionTypes from '../constants/actionTypes';

const sourcesReducer = (state = { sources: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_SOURCES_SUCCESS:
      return {
        ...state, sources: action.sources
      };
    default:
      return state;
  }
};

export default sourcesReducer;
