import actionTypes from './../constants/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default authReducer;
