import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

// RECEIVE_CURRENT_USER - sets id to the action's user.id
// LOGOUT_CURRENT_USER - sets id to null

const _nullUser = Object.freeze({
    id: null
});

// Reducers need to take in a state and action and return a new state.
// Freezing state prevents our oldstate from ever being accidently modified/mutated.
// Setup a new state object, essentially copying oldState so we can return a modified version as the newState.
const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldState;
    }
}

export default sessionReducer;