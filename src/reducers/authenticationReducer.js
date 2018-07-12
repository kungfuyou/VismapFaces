import C from '../actions/constants';

export default function authenticationReducer (state={}, action) {
  switch(action.type) {
    case C.AUTHENTICATION_LOGIN_REQUEST:
      console.log('login request');
      return {
        loginRequest: true
      };

    case C.AUTHENTICATION_LOGIN_SUCCESS:
      console.log('login success');
      return {
        loggedIn: true
      };

      case C.AUTHENTICATION_LOGIN_ERROR:
        console.log('login error', action.error);
        return {
          loginError: action.error
        };

    case C.AUTHENTICATION_LOGOUT:
      return {};

    default: return state;
  }
}
