import 'babel-polyfill';
/* React */
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
/* Store */
import initialState from './state/initialState';
import configureStore from './store/configureStore';
import { loadFields } from './actions/fieldsActions';
import history from './routes/History';
/* Components */
import App from './components/App';
import './sass/app.scss';

const store = configureStore(initialState);

store.subscribe(() => localStorage['vismap-store'] = JSON.stringify(store.getState()));

store.dispatch(loadFields());

render((
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>),
    document.getElementById('app')
);
