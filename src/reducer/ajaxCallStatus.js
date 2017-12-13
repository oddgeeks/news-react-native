import actionTypes from '../constants/actionTypes';

const actionTypeEndsInSuccess = type =>
  (type.substring(type.length - 8) === '_SUCCESS');

const actionTypeEndsInFaliure = type =>
  (type.substring(type.length - 8) === '_FAILURE');

const ajaxCallStatus = (state = { loading: false, message: '' }, action) => {
  switch (true) {
    case action.type === actionTypes.BEGIN_AJAX_CALL:
      return { loading: true, message: '' };
    case actionTypeEndsInSuccess(action.type):
      return { loading: false, message: '' };
    case actionTypeEndsInFaliure(action.type):
      return { loading: false, message: action.message };
    case action.type === actionTypes.RESET_ERROR_MESSAGE:
      return { loading: false, message: '' };
    default:
      return state;
  }
};
export default ajaxCallStatus;
