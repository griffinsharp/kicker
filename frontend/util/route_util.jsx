import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Defined some routes here to conditionall render the component or a redirect
// based on whether the user is logged in or not.
// So below, I setup some logic. Auth routes will not let users who are
// already logged in (session token exists) access certain pages like login/signup.
// Protected routes will not render for users who are not logged in. For Kicker,
// the latter is mostly just concerned with project creation and user specific pages.

// For loggedIn users trying to access session pages.
const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
            exact={exact}
                render={props =>
                    !loggedIn ? <Component {...props} /> : <Redicrect to="/" />
                }
    />  
);

// Pretty similar code to the above component, however it's concerned with loggedOut users.
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redicrect to="/" />
        }
    />
);


const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
})

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));