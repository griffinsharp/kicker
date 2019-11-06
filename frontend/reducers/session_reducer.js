import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

// RECEIVE_CURRENT_USER - sets id to the action's user.id
// LOGOUT_CURRENT_USER - sets id to null

const _nullSession = Object.freeze({
    id: null
});

// Reducers need to take in a state and action and return a new state.
// Freezing state prevents our oldstate from ever being accidently modified/mutated.
// Setup a new state object, essentially copying oldState so we can return a modified version as the newState.
const sessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            const id = action.currentUser.id;
            return id;
        case LOGOUT_CURRENT_USER:
            return null;
        default:
            return oldState;
    }
}

export default sessionReducer;

// session: {
// id: null,
//   },