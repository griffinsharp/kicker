import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">Sign up</Link>,
    // path: ownProps.location.pathname
    }
};

const mapDispatchToProps = (dispatch) => ({
     processForm: (formUser) => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

