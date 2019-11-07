import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

// prevent the default action for a submit, which is to navigate away from the page.
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

  handleErrors () {
        if (this.props.errors.length === 0) {
            this.props.history.push("/")
        }
}

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
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

    const { formType, navLink, processForm } = this.props;

    return (
      <div className="session-form-container">
        <form className="session-box" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
          <div className={onlySignUp}>Have an account? {navLink}</div>
          <p className="session-header">{formType}</p>
          <input
            className={onlySignUp}
            type="text"
            placeholder="Name"
            onChange={this.update("name")}
          />
          <br />
          <input
            className="session-type-input"
            type="text"
            placeholder="Email"
            onChange={this.update("email")}
          />
          <br />
          <input
            className="session-type-input"
            type="password"
            placeholder="Password"
            onChange={this.update("password")}
          />
          <br />
          <a className={onlyLogIn}>Forgot your password?</a>
          <input
            type="text"
            className={onlySignUp}
            type="password"
            placeholder="Re-enter password"
          />
          <br className={onlySignUp} />
          <input className="session-button" type="submit" value={formType} />
          <div className={onlyLogIn}>
            <input type="checkbox" />
            Remember Me
          </div>
        </form>
        <div className={onlyLogIn}>New to Kickstarter? {navLink}</div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
