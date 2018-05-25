/* Root Reducer */
import {combineReducers} from 'redux';
import formsReducer from './formsReducer';
import fieldsReducer from './fieldsReducer';
import appAjaxCalls from './ajaxStatusReducer';

const allReducers = {
  forms: formsReducer,
  fields: fieldsReducer,
  ajaxCallsInProgress: appAjaxCalls
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
