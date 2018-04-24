import 'babel-polyfill';
/* React */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
/* Store */
import configureStore from './store/configureStore';
import initialState from './state/initialState';
import { editGraph } from './actions/graphActions';
/* Components */
import App from './components/App';
import './sass/app.scss';

const store = configureStore(initialState);
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(editGraph('red' , 'My First Graph', 'New X', 'New Y'));

unsubscribe();

render((
    <Router>
      <App />
    </Router>),
    document.getElementById('app')
);
