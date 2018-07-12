import React from 'react';
import render from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AuthenticationActions from '../../actions/authenticationActions';
import Login from './Login';

class LoginContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        username: '',
        password: '',
        submitted: false
      };

      /* Reset auth state on load component */
      this.props.actions.logout();
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(props) {
      console.log('component will recieve props', props);
      if (props.loginError) {
        this.setState({submitted: false});
      }
      //this.loginRequest = loginRequest;
    }

    onChange(event) {
      const {name, value} = event.target;
      this.setState({[name]: value});
    }

    onSubmit(event) {
      event.preventDefault();
      const {username, password} = this.state;
      this.setState({submitted: true});

      if (username && password) {
        this.props.actions.login({username, password});
      }
    }

    render() {
      return(
        <Login
          username = {this.state.username}
          password = {this.state.password}
          onChange = {this.onChange}
          onSubmit = {this.onSubmit}
          submitted = {this.state.submitted}
          disabled = {this.props.loginRequest}
          busy = {this.props.loginRequest}
        />
      );
    }
}

LoginContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  loginRequest: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  const { loginRequest, loginError } = state.authentication;

  return {
    loginRequest: loginRequest,
    loginError: loginError

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
