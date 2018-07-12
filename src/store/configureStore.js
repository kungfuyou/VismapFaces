import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {

  return createStore(
    rootReducer,
    //(localStorage['vismap-store'])
    //? JSON.parse(localStorage['vismap-store'])
    //:
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
