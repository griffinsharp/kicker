import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

// Session errors reducer keeps track of any error messages concerning our session. We will combine all of our error reducers in the errorsReducer.
// Default state should be an array here because that's how we store our errors for Kicker.
// Reducer will listen for two actions: receive session errors and receive current user.
// If the action is receive session errors, it will set the errors key equal to the actions errors.
// If the action is receive current user, it will clear the errors key in the new state (no errors currently).

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