import React from 'react';
import render from 'react-dom';
import PropTypes from 'prop-types';

const NoMatch = ({ location }) => (
  <div>
      <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

NoMatch.propTypes = {
  location : PropTypes.object.isRequired
};

export default NoMatch;
