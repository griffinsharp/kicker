import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      email: "",
      password: "",
      repeatPassword: "hidden",
      repeatEmail: "hidden"
    }),
    (this.handleSubmit = this.handleSubmit.bind(this));
    this.handleErrors = this.handleErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  // Notes on the following functions/logic:
  // Prevent the default action for a submit, which is to navigate away from the page.
  // make a new user object based on the local state.
  // Call processForm with the user object as a param.
  // ProcessForm passed down in props and used to handle dispatching both signin/sign up on one form.
  // Upon reponse for processForm, we should call handle Errors with .then.
  // At this point, we should either have dispatched either receieveErrors or receiveCurrentUser.
  // If we dispatched any errors, now our errors array should not be empty (handleErrors checks this.
  // If there are no errors, navigate to the home page. If not, since we altered state, our component should rerender
  // calling this.renderErrors again, which should then render the errors on the page.

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.handleErrors());
  }

  handleErrors() {
    if (this.props.errors.length === 0) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  // want to trigger a local state change so that react knows to rerender.

  handleClick() {
    if (this.props.location.pathname === "/signup") {
      this.setState({ repeatPassword: "session-type-input" });
    }
  }

  handleEmail() {
    if (this.props.location.pathname === "/signup") {
      this.setState({ repeatEmail: "session-type-input" });
    }
  }

  // Our Errors are stored in an array. Need to map through them and present them individually if they exist.
  // I will call this function below within the render function when appropriate.
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-number-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
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
                className={onlySignUp}
                type="text"
                placeholder="Name"
                onChange={this.update("name")}
              />

              <input
                className="session-type-input"
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
                className="session-type-input"
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

              <input className="session-btn" type="submit" value={formType} />
              <div className={onlyLogIn}>
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="or-line-container">
                <div className="or-line"></div>
                <div className="or">or</div>
                <div className="or-line"></div>
              </div>
              <input className="session-btn" type="submit" value="Demo User" />
            </form>
            {/* bottom */}
            <div className="session-bottom">
              <div className={onlyLogIn}>New to Kickstarter?{navLink}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
