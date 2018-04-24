import React from 'react';
import PropTypes from 'prop-types';
import ExamplesMenu from './ExamplesMenu';

const Examples = ({children}) =>
  <div className="examples">
    <ExamplesMenu />
    {children}
  </div>;

Examples.propTypes = {
  children: PropTypes.node
};

export default Examples;
