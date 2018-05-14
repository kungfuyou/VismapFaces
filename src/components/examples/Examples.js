import React from 'react';
import PropTypes from 'prop-types';
import ExamplesMenu from './ExamplesMenu';
import Routes from '../routes/Routes';
import RenderRoutes from '../routes/RenderRoutes';

const Examples = ({ routes }) => (
  <section>
    <ExamplesMenu />
    <RenderRoutes routes={routes}/>
  </section>
);

Examples.propTypes = {
  routes: PropTypes.array
};

export default Examples;
