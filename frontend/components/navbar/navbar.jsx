import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../app/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalAppear: "hidden"
        };

        this.handleExplore = this.handleExplore.bind(this);
    }

    handleExplore() {
      this.setState({modalAppear: "navbar-and-modal"});
    }
    

    render() {
        let stateButton;
        if (this.props.currentUser === null) {
            stateButton = <Link to="/login" className="nav-link">Log in</Link>
        } else {
            stateButton = (
              <Link
                to="/"
                className="nav-link"
                onClick={() => this.props.logout()}
              >
                Log out
              </Link>
            );
        }

        let notLogged;

        if (this.props.currentUser === null) {
          notLogged = '/login'
        } else {
          notLogged = '/projects/new'
        }

        return (
          <div className="navbar-and-modal">
              <div className={this.state.modalAppear}>
                <div className="modal-header">Collections
                  <div className="modal-links">
                    <Link to="/search" >Projects We Love </Link>
                    <Link to="/search">Nearly Funded </Link>
                    <Link to="/search">Just Launched </Link>
                    <Link to="/search">Everything </Link>
                  </div>
                </div>
              <div className="modal-header">Categories
                  <div className="modal-links">
                  <Link className="" to="/category/1">Arts</Link>
                  <Link className="" to="/category/2">Comics & Illustration</Link>
                  <Link className="" to="/category/3">Design & Tech</Link>
                  <Link className="" to="/category/4">Film</Link>
                  <Link className="" to="/category/5">Food & Craft</Link>
                  <Link className="" to="/category/6">Games</Link>
                  <Link className="" to="/category/7">Music</Link>
                  <Link className="" to="/category/8">Publishing</Link>
                </div>
              </div>
              </div>
            <div className="navbar">
              <div className="left-bar">
                <p className="nav-link" onClick={ () => this.handleExplore()}>Explore</p>
                <Link to={notLogged} className="nav-link">Start a project</Link>
              </div>
              <div className="logo-bar">
                <Link to="/" className="nav-link">
                  <img className="logo-img" src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="right-bar">
                <div className="nav-link">
                  <Link to="/search" className="link">
                    Search{" "}
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                  </Link>
                </div>
                {stateButton}
              </div>
            </div>
          </div>
        );
    }
}

export default Navbar;