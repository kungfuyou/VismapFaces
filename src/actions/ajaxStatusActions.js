import C from './constants';

export function ajaxCallBegin() {
  return {
    type: C.AJAX_CALL_BEGIN
  };
}

export function ajaxCallError() {
  return {
    type: C.AJAX_CALL_ERROR
  };
}

export function ajaxCallSuccess() {
  return {
    type: C.AJAX_CALL_SUCCESS
  };
}
