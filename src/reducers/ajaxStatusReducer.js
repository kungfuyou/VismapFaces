import C from '../actions/constants';


export default function appAjaxCalls(state=0, action) {
  switch(action.type) {
    case C.AJAX_CALL_BEGIN :
      return state + 1;
    case C.AJAX_CALL_ERROR:
      return state - 1;
    case C.AJAX_CALL_SUCCESS:
      return state - 1;
    default:
      return state;
  }
}
