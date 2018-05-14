import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import RouteWithSubroutes from './components/routes/RouteWithSubroutes';

const RenderRoutes = ({data}) => {
  return <Switch>{data.map((route, i) => <RouteWithSubroutes key={i} {...route} />)}</Switch>
};

RenderRoutes.propTypes = {
  data: PropTypes.array
};

export default RenderRoutes;
