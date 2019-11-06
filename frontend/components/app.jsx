import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { Provider } from 'react-redux';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Purely functional component

const App = () => (
    <div>
        <header>
            <h1>Kicker!</h1>
            <LogInFormContainer/>
        </header>
        <Switch>
            <Route exact path="/login" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={Home}/>
        </Switch>
    </div>
);

export default App;