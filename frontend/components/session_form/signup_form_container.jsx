import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Create account',
    navLink: <Link className="session-link" to="/login"> Log in</Link>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formUser) => dispatch(signup(formUser)),
    login: (formUser) => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

