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
        let cn = ""
        if (this.props.location.pathname === "/login") {
            cn = "hidden"
        } else {
            cn = "login-type-input"
        }

        const { formType, navLink, processForm } = this.props;

        return (
            <div className="login-form-container">
                <form className="login-box" onSubmit={this.handleSubmit}>
                    <h2 className="login-header">{formType}</h2>
                    <br/>
                    <input className="login-type-input" type="text" placeholder="Email" onChange={this.update('email')}/>
                    <br />
                    <input className="login-type-input" type="password" placeholder="Password" onChange={this.update('password')}/>
                    <br />
                    <input type="text" className={cn} type="password" placeholder="re enter Password"/>
                    <input className="login-button" type="submit" value={formType}/>
                    <br />
                </form>
                <div className="">New to Kickstarter? {navLink}</div>
            </div>
        )
    }
}

export default withRouter(SessionForm);
