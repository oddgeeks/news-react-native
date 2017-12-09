import actionTypes from '../constants/actionTypes';

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  user
});

export default setCurrentUser;
