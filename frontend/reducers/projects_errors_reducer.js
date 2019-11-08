import { RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';

// see "sessionErrorsReducer" regarding reasoning for this decision in modulatiry
// for handling errors of each type. see "errorsReducer" for all errorReducers in this project. 

const projectErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PROJECT_ERRORS:
            return action.errors;
        case RECEIVE_PROJECT:
            return [];
        default:
            return oldState;
    }
}

export default projectErrorsReducer;