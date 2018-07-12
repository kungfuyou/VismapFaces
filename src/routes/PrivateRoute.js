import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    //localStorage.getItem('authtoken')
    rest.loggedIn
    ? <Component {...props} location={props.location}/>
    : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
  )} />
);

PrivateRoute.propTypes = {
  location: PropTypes.string
};

export default PrivateRoute;
