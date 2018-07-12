import C from './constants';
import fetch from 'cross-fetch';
import history from '../routes/History';
import * as message from './messagesActions';

export const login =({username, password}) => {
  return (dispatch) => {
    dispatch(loginRequest());
    dispatch(message.clearMessages());
    return fetch('http://localhost:3002/Token', {
      method: 'post',
      headers: {
        'Accept': 'appliction/json',
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        'grant_type': 'password',
        'username': username,
        'password': password
      })
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.message);
      } else {
        return response.json();
      }
    })
    .then((response) => {
      dispatch(loginSuccess(response.token));
      history.replace('/');
    })
    .catch(error => {
      const errorMessage = error.toString();
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
    localStorage.setItem('authtoken', token);
  }

  return {
    type: C.AUTHENTICATION_LOGIN_SUCCESS,
    token: token
  };
};

const loginError = (error) => {
  console.log(error);

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
