import {RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';

const projectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.projects; 
        case RECEIVE_PROJECT:
            newState[action.payload.project.id] = action.payload.project;
            newState[action.payload.project.id].rewardsIds.push(action.payload.rewards);

            // newState[action.review.bench_id].reviewIds.push(action.review.id);
            // newState[action.review.bench_id].action.average_rating = action.average_rating;
            return newState;
        // case REMOVE_PROJECT:
        //     return null;
        default:
            return oldState;
    }
};

export default projectsReducer;