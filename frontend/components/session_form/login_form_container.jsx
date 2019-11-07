import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link className="session-link" to="/signup"> Sign up</Link>,
    }
};

const mapDispatchToProps = (dispatch) => ({
     processForm: (formUser) => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

