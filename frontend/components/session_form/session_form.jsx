import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      email: "",
      password: "",
      name: "",
      repeatPassword: "hidden",
      repeatEmail: "hidden"
    }),
      (this.handleSubmit = this.handleSubmit.bind(this));
    this.handleErrors = this.handleErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  // Notes on the following functions/logic:
  // Prevent the default action for a submit, which is to navigate away from the page.
  // Make a new user object based on the local state.
  // Call processForm with the user object as a param.
  // ProcessForm passed down in props and used to handle dispatching both signin/sign up on one form.
  // Upon reponse for processForm, we should call handle Errors with .then.
  // At this point, we should either have dispatched either receieveErrors or receiveCurrentUser.
  // If we dispatched any errors, now our errors array should not be empty (handleErrors checks this).
  // If there are no errors, navigate to the home page. If not, since we altered state, our component should rerender
  // calling this.renderErrors again, which should then render the errors on the page.

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.handleErrors());
  }

  handleErrors() {
    if (this.props.errors.length === 0) {
      if (this.props.location.state.rerouted === "true") {
        this.props.history.push("/projects/new");
      } else if (this.props.location.state.rerouted === "project") {
        this.props.history.push(this.props.location.state.path);
      } else {
        this.props.history.push("/");
      }
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  // want to trigger a local state change so that react knows to rerender.

  handleClick() {
    if (this.props.location.pathname === "/signup") {
      this.setState({ repeatPassword: "session-type-input s-two" });
    }
  }

  handleEmail() {
    if (this.props.location.pathname === "/signup") {
      this.setState({ repeatEmail: "session-type-input s-two" });
    }
  }

  demoUserLogin() {
    const user = Object.assign(
      {},
      {
        email: "demouser@demo.com",
        password: "demo123",
        name: "Demo User"
      }
    );

    // This will either route to create a new project or back to home depending on where the page was accessed from
    // If the user tries to click the navbar's "start a project" without being logged in, this "rerouted" portion of state should signify so.
    // Same logic for trying to donate to a project.
    // Both of these require the user to be logged in and errors to be displayed accordingly. 
    this.props.login(user).then(() => {
      if (this.props.location.state.rerouted === "true") {
        this.props.history.push("/projects/new");
      } else if (this.props.location.state.rerouted === "project") {
        this.props.history.push(this.props.location.state.path);
      } else {
        this.props.history.push("/");
      }
    });
  }

  // Our Errors are stored in an array. Need to map through them and present them individually if they exist.
  // I will call this function below within the render function when appropriate.
  // routeErrors are the custom errors we want to display if we are rerouting from a protected route.
  renderErrors() {
    let routeErrors;
    let sessionErrors;

    if (this.props.location.state || this.props.errors.length > 0) {
      sessionErrors = "session-errors";
    } else {
      sessionErrors = "hidden";
    }

    if (this.props.location.state) {
      routeErrors = this.props.location.state.errors;
    } else {
      routeErrors = null;
    }

    return (
      <div className={sessionErrors}>
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="error-li" key={`error-number-${i}`}>
              {error}
            </li>
          ))}
        </ul>
        <ul className="error-li" >{routeErrors}</ul>
      </div>
    );
  }

  render() {
    debugger;
    let onlySignUp;
    let onlyLogIn;
    


    if (this.props.location.pathname === "/login") {
      onlySignUp = "hidden";
      onlyLogIn = "session-type-input";
    } else if (this.props.location.pathname === "/signup") {
      onlySignUp = "session-type-input";
      onlyLogIn = "hidden";
    }

    const { formType, navLink } = this.props;
    return (
      <div className="main-session">
        <div className="session-form-container">
          {/* top on signin */}
          <div className={`${onlySignUp} have-acc`}>
            {" "}
            Have an account? {navLink}{" "}
          </div>
          {/*  mid */}
          <div className="session-top">
            <form className="session-form" onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <p className="session-header">{formType}</p>
              <input
                className={`${onlySignUp} s-two`}
                type="text"
                placeholder="Name"
                onChange={this.update("name")}
              />

              <input
                className="session-type-input s-two"
                type="text"
                placeholder="Email"
                onChange={this.update("email")}
                onClick={this.handleEmail}
              />

              <input
                className={this.state.repeatEmail}
                type="text"
                placeholder="Re-enter email"
              />

              <input
                className="session-type-input s-two"
                type="password"
                placeholder="Password"
                onChange={this.update("password")}
                onClick={this.handleClick}
              />

              <input
                className={this.state.repeatPassword}
                type="password"
                placeholder="Re-enter password"
              />

              <a className={onlyLogIn}>Forgot your password?</a>

              <input
                className="session-btn-top"
                type="submit"
                value={formType}
              />
              <div className={`${onlyLogIn} s-two check-container`}>
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="or-line-container">
                <div className="or-line"></div>
                <div className="or">or</div>
                <div className="or-line"></div>
              </div>
              <input
                className="session-btn"
                type="submit"
                value="Demo User"
                onClick={this.demoUserLogin}
              />
            </form>
            {/* bottom */}
            <div className="session-bottom">
              <div className={`${onlyLogIn} s-two bottom-call`}>
                New to Kickstarter?{navLink}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
