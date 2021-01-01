import * as APIUtil from '../util/session_api_util';
// import jwt_decode from 'jwt-decode';

export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
// export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

// export const receiveUserSignIn = () => ({
//     type: RECEIVE_USER_SIGN_IN
// });
  