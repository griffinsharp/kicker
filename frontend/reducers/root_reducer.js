import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer'
import { combineReducers } from 'redux';

// RootReducer combines all the other higher level reducers we have made for Kicker.
// This will allow our store to take in a single RootReducer.

const RootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer
});

export default RootReducer;

// application state example at time of RootReducer creation: 
// {
//     entities: {
//         users: { }
//     },
//     session: {
//         id: null,
//   },
//     errors: {
//         session: []
//     }
// }
