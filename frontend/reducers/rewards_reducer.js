import { RECEIVE_PROJECT, RECEIVE_BACKING, REMOVE_PROJECT } from '../actions/project_actions';

const projectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.payload.rewards;
        case RECEIVE_BACKING:
            return action.payload.rewards;
        default:
            return oldState;
    }
};

export default projectsReducer;