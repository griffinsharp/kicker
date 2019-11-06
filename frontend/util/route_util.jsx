// Defined some routes here to conditionall render the component or a redirect
// based on whether the user is logged in or not.

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
            render={props =>
                !loggedIn ? <Component {...props} /> : <Redicrect to="/" />} />
);

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
})

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
);