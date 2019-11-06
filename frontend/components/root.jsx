import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

// App will be rendered for all routes in Kicker. We will define our routes in the app component.
// Provider will pass down the store to the rest of our components for us. 

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;