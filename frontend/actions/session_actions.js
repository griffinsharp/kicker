import * as APIUtil from '../util/session_api_util';

// Action type constants
// Our reducers will fail silently if we keep out action types as strings, so make them constants to avoid this.
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// Most action creators will generally accept a user object as a parameter, except where noted.
// Regular action creators to be utilized by our thunk action creators.
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

// Does not accept a parameter.
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

// The 'errors' param is an array of errors.
export const receiveErrors = (errors) => {
    return {
    type: RECEIVE_SESSION_ERRORS,
    errors
};
}
// Thunk action creators
export const login = (user) => (dispatch) => {
    return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

// Also does not accept a parameter.
export const logout = () => (dispatch) => {
    debugger
    return APIUtil.logout()
    .then((user) => dispatch(logoutCurrentUser()));
};

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
};