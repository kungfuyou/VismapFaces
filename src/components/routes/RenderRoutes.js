import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import RouteWithSubroutes from './RouteWithSubroutes';

const RenderRoutes = ({routes}) => {
  return <Switch>{routes.map((route, i) =><RouteWithSubroutes key={i} {...route} />)}</Switch>
};

RenderRoutes.propTypes = {
  routes: PropTypes.array
};

export default RenderRoutes;
