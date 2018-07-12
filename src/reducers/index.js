/* Root Reducer */
import {combineReducers} from 'redux';
import formsReducer from './formsReducer';
import fieldsReducer from './fieldsReducer';
import appAjaxCalls from './ajaxStatusReducer';
import authenticationReducer from './authenticationReducer';
import messagesReducer from './messagesReducer';

const allReducers = {
  authentication: authenticationReducer,
  forms: formsReducer,
  fields: fieldsReducer,
  ajaxCallsInProgress: appAjaxCalls,
  messages: messagesReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
