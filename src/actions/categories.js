import actionTypes from '../constants/actionTypes';

const changeCurrentCategory = category => ({
  type: actionTypes.CHANGE_CATEGORY,
  category
});

export default changeCurrentCategory;
