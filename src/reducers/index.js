/* Root Reducer */
import {combineReducers} from 'redux';
import facesReducer from './facesReducer';
import graphReducer from './graphReducer';
import keysReducer from './keysReducer';

const allReducers = {
  graph: graphReducer,
  keys: keysReducer,
  faces: facesReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
