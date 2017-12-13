import actionTypes from '../constants/actionTypes';

const beginAjaxCall = () => ({
  type: actionTypes.BEGIN_AJAX_CALL
});

const resetErrorMessage = () => ({
  type: actionTypes.RESET_ERROR_MESSAGE
});

export { beginAjaxCall, resetErrorMessage };
