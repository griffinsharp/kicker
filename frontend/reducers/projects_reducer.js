import {RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';

const projectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_PROJECT:
            newState[action.project.id] = action.project;
            return newState;
        default:
            return oldState;
    }
}

export default projectsReducer();