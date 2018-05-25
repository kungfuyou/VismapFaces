import 'babel-polyfill';
/* React */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
/* Store */
import initialState from './state/initialState';
import configureStore from './store/configureStore';
import { loadFields } from './actions/fieldsActions';
/* Components */
import App from './components/App';
import './sass/app.scss';

const store = configureStore(initialState);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(loadFields())
.then(() => {
  console.log(store.getState())
  //unsubscribe();
});

render((
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>),
    document.getElementById('app')
);
