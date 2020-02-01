import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

// Session errors reducer keeps track of any error messages concerning our session. We will combine all of our error reducers in the errorsReducer.
// Default state should be an array here because that's how we store our errors for Kicker.
// Reducer will listen for two actions: receive session errors and receive current user.
// If the action is receive session errors, it will set the errors key equal to the actions errors.
// If the action is receive current user, it will clear the errors key value to an empty array in the new state (no errors currently).

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
