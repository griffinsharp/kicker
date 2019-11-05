import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './util/session_api_util';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDOM.render(<h1>Welcome To Kicker!</h1>, root);

    // *** BELOW IS FOR TESTING ONLY, REMOVE ONCE PUSHED TO PRODUCTION ***
    window.login = login;
    window.logout = logout;
    window.signup = signup;
})

