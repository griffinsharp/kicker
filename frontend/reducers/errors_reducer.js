import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

// This file will keep track of all the error messages for Kicker.
// To be modular, we will combine all of our reducers here that handle errors. 
// Note that since our keys and values are the same here, we can use syntactic sugar if we wish to just name the key name.
// However, just as a preference I like to explicitly say both to be clear about what is going on here. 

const errorsReducer = combineReducers({
    sessionErrorsReducer: sessionErrorsReducer
})

export default errorsReducer;