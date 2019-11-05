import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {login, logout, signup} from './util/session_api_util';
// import {receiveCurrentUser}from "./actions/session_actions"

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);

    // *** BELOW IS FOR TESTING ONLY, REMOVE ONCE PUSHED TO PRODUCTION ***
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    // const store = configureStore();
    // window.receiveCurrentUser = receiveCurrentUser;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
})

