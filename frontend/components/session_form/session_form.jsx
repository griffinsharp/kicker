import React from 'react';
import {withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'Password',
            email: 'Email'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // prevent the default action for a submit, which is to navigate away from the page. 
        // make a new user object based on the local state.
        // Call processForm with the user object as a param.
        // ProcessForm passed down in props and used to handle dispatching both signin/sign up on one form.
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(this.props.history.push("/"));
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    // Our Errors are stored in an array. Need to map through them and present them individually if they exist. 
    // I will call this function below within the render function when appropriate.
    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-number-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () {
        let onlySignUp
        let onlyLogIn
        if (this.props.location.pathname === "/login") {
            onlySignUp = "hidden"
            onlyLogIn = "session-type-input"
        } else if (this.props.location.pathname === "/signup") {
            onlySignUp = "session-type-input"
            onlyLogIn = "hidden"
        }

        const { formType, navLink, processForm } = this.props;

        return (
            <div className="session-form-container">
                <form className="session-box" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div className={onlySignUp}>Have an account? {navLink}</div>
                    <p className="session-header">{formType}</p>
                    <br/>
                    <input className="session-type-input" type="text" placeholder="Email" onChange={this.update('email')}/>
                    <br />
                    <input className="session-type-input" type="password" placeholder="Password" onChange={this.update('password')}/>
                    <br />
                    <a className="session-link">Forgot your password?</a>
                    <br />
                    <input type="text" className={onlySignUp} type="password" placeholder="re enter Password"/>
                    <br className={onlySignUp}/>
                    <input className="session-button" type="submit" value={formType}/>
                    <br />
                    <input type="checkbox" className="onlyLogIn"/> Remember Me
                    <br />
                </form>
                <div className={onlyLogIn}>New to Kickstarter? {navLink}</div>
            </div>
        )
    }
}

export default withRouter(SessionForm);
