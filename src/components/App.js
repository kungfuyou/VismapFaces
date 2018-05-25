/* Handle the App Template used on every page */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import RenderRoutes from './routes/RenderRoutes';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MainMenu from './ui/MainMenu';
import PageTemplate from './ui/PageTemplate';

const App = (props) => {
  return (
      <PageTemplate loading={props.loading}>
        <RenderRoutes routes={Routes} />
      </PageTemplate>
    );
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

App.propTypes = {
  loading: PropTypes.bool
};

export default withRouter(connect(mapStateToProps)(App));
