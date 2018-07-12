/* Handle the App Template used on every page */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MainMenu from './ui/MainMenu';
import PageTemplate from './ui/PageTemplate';

import PrivateRoute from '../routes/PrivateRoute';
import DashBoard from './dashboard/DashBoard';
import Login from './login/LoginContainer';
import Examples from './examples/Examples';
import * as messages from '../actions/messagesActions';
import History from '../routes/History';
import toastr from 'toastr';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    const { dispatch } = this.props;
    //dispatch(messages.clear());
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.messages);
  }

  render() {
    return (
        <PageTemplate
          loading={this.props.loading}
          loggedIn={this.props.loggedIn}
        >
          <PrivateRoute exact path="/" component={DashBoard} loggedIn={this.props.loggedIn}/>
          <PrivateRoute path="/examples" component={Examples} loggedIn={this.props.loggedIn}/>
          <Route path="/login" component={Login} />
        </PageTemplate>
      );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    //loading: state.ajaxCallsInProgress > 0
    loading: false,
    loggedIn: state.authentication.loggedIn
  };
}

App.propTypes = {
  loading: PropTypes.bool,
  loggedIn: PropTypes.bool
};

export default withRouter(connect(mapStateToProps)(App));
