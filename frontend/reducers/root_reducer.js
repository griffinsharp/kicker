import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import { combineReducers } from "redux";

// RootReducer combines all the other higher level reducers we have made for Kicker.
// This will allow our store to take in a single RootReducer.

const RootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer
});

export default RootReducer;

// Just for reference, application state example at time of RootReducer creation
// should look something like this:
//
// {
//     entities: {
//         users: {
//           1: {
//             id: 1,
//             title: "user1"
//           },
//         },
//         projects: {
//           1: {
//             id: 1,
//             title: "project1"
//           },
//         },
//     },
//     session: {
//         id: null,
//     },
//     errors: {
//         session: [],
//         projects: []
//     }
// }
