import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import projectsErrorsReducer from './projects_errors_reducer';

// This file will keep track of all the error messages for Kicker.
// To be modular, we will combine all of our reducers here that handle errors. 

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    projects: projectsErrorsReducer
});

export default errorsReducer;


// We get access to combineReducers function via the redux library (see import above).
// This function accepts a single argument, which is an object whose properties 
// will represent slices (session, for example) of our application state.
// The values correspond to our reducers for various states' errors. 

// errors: {
//     session: []
// }