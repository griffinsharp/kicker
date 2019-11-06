import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Log in</Link>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formUser) => dispatch(signup(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

