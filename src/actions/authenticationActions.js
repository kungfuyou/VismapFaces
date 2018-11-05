import C from './constants';
//import fetch from 'cross-fetch';
import history from '../routes/History';
import * as message from './messagesActions';
import axios from 'axios';

export const login =({username, password}) => {
  return (dispatch) => {
    dispatch(loginRequest());
    dispatch(message.clearMessages());

    return axios('http://localhost:3002/Token', {
        method: 'post',
        headers: {
          'Accept': 'appliction/json',
          'content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=password&username=${username}&password={$password}`
      })
      .then(response => {
        console.log(response.data);
        const data = JSON.stringify(response.data);
        dispatch(loginSuccess(data));
        history.replace('/');
      })
      .catch(error => {
        let errorMessage;

        if (error.response) {
          const data = error.response.data;
          errorMessage = data.error_description;
        } else if (error.request) {
          errorMessage = "Request error. No response from the server.";
        } else {
          errorMessage = error.message;
        }

        dispatch(loginError(errorMessage));

        dispatch(message.addMessage({
          messageType: 'error',
          messageContent: errorMessage
        }));
    });
  };
};

const loginRequest = () => {
  return {
    type: C.AUTHENTICATION_LOGIN_REQUEST
  };
};

const loginSuccess = (token) => {
  if (token) {
    localStorage.setItem('v2c_authtoken', token);
  }

  return {
    type: C.AUTHENTICATION_LOGIN_SUCCESS,
    token: token
  };
};

const loginError = (error) => {
  return {
    type: C.AUTHENTICATION_LOGIN_ERROR,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('authtoken');

  return {
    type: C.AUTHENTICATION_LOGOUT
  };
};
