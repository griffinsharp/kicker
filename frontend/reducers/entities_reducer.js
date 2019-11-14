import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import rewardsReducer from './rewards_reducer';

// Keeps track of all of our relational data for Kicker.
// Combine our reducers that handle relational data

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    rewards: rewardsReducer
});

export default entitiesReducer;

