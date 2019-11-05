import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
// Session errors reducer keeps track of any error messages
// Default state should be an array here because that's how we store our errors for Kicker.

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState[errors] = action.errors;
            return newState;
        case RECEIVE_CURRENT_USER:
            newState[errors] = [];
            return newState;
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;