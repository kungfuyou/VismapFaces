import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import FacesChartPage from './components/faceschart/FacesChartPage';
import Examples from './components/examples/Examples';
import SimpleBar from './components/examples/SimpleBar';
import BarChart from './components/examples/BarChart';
import LineChart from './components/examples/LineChart';
import ScatterPlot from './components/examples/ScatterPlot';
import Json1 from './components/examples/Json1';
import Json2 from './components/examples/Json2';
import WebApi from './components/examples/WebApi';
import Scale from './components/examples/Scale';
import Scale2 from './components/examples/Scale2';
import Axis from './components/examples/Axis';
import Filter from './components/examples/Filter';
import Filter2 from './components/examples/Filter2';

const NoMatch = ({ location }) => (
      <div>
          <h3>No match for <code>{location.pathname}</code></h3>
      </div>
    );

const Routes = ({circles, faces}) => {
  const props = {circles, faces};

  return (
    <Switch>
      <Route exact path="/" render={routeProps => (
          <FacesChartPage {...routeProps} {...props} />
        )}
      />
      <Route exact path="/examples/simplebar" component={SimpleBar} />
      <Route exact path="/examples/barchart" component={BarChart} />
      <Route exact path="/examples/linechart" component={LineChart} />
      <Route exact path="/examples/scatterplot" component={ScatterPlot} />
      <Route exact path="/examples/json1" component={Json1} />
      <Route exact path="/examples/json2" component={Json2} />
      <Route exact path="/examples/webapi" component={WebApi} />
      <Route exact path="/examples/scale" component={Scale} />
      <Route exact path="/examples/scale2" component={Scale2} />
      <Route exact path="/examples/axis" component={Axis} />
      <Route exact path="/examples/filter" component={Filter} />
      <Route exact path="/examples/filter2" component={Filter2} />
      <Redirect exact from="/examples" to="/examples/simplebar" />
      <Route component={NoMatch}/>
    </Switch>
  );
};

Routes.propTypes = {
  circles : PropTypes.array,
  faces: PropTypes.array
};

export default Routes;
