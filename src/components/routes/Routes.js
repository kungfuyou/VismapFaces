import React from 'react';
import PropTypes from 'prop-types';
import NoMatch from './RoutesNoMatch';
import DashBoard from '../dashboard/DashBoard';
import Examples from '../examples/Examples';
import SimpleBar from '../examples/SimpleBar';
import BarChart from '../examples/BarChart';
import LineChart from '../examples/LineChart';
import ScatterPlot from '../examples/ScatterPlot';
import Json1 from '../examples/Json1';
import Json2 from '../examples/Json2';
import WebApi from '../examples/WebApi';
import Scale from '../examples/Scale';
import Scale2 from '../examples/Scale2';
import Axis from '../examples/Axis';
import Filter from '../examples/Filter';
import Filter2 from '../examples/Filter2';

const routes = [
  {
    path: '/',
    component: DashBoard,
    exact: true
  },
  {
    path: '/examples',
    component: Examples,
    routes: [
      {
        path: "/examples/simplebar",
        component: SimpleBar
      },
      {
        path: "/examples/barchart",
        component: BarChart
      },
      {
        path: "/examples/linechart",
        component: LineChart
      },
      {
        path: "/examples/scatterplot",
        component: ScatterPlot
      },
      {
        path: "/examples/json1",
        component: Json1
      },
      {
        path: "/examples/json2",
        component: Json2
      },
      {
        path: "/examples/webapi",
        component: WebApi
      },
      {
        path: "/examples/scale",
        component: Scale
      },
      {
        path: "/examples/scale2",
        component: Scale2
      },
      {
        path: "/examples/axis",
        component: Axis
      },
      {
        path: "/examples/filter",
        component: Filter
      },
      {
        path: "/examples/filter2",
        component: Filter2
      }
    ]
  },
  {
    component: NoMatch
  }
];

export default routes;
