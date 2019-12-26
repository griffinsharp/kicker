import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../app/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalAppear: "hidden",
          modalAppearClear: "hidden"
        };

        this.handleExplore = this.handleExplore.bind(this);
    }

  handleExplore() {
    if (this.state.modalAppear === "hidden") {
      this.setState({ modalAppear: "modal" });
      this.setState({ modalAppearClear: "modalclear" });
    } else if (this.state.modalAppear === "modal") {
      this.setState({ modalAppear: "hidden" });
      this.setState({ modalAppearClear: "hidden" });
    }

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
              <div className={this.state.modalAppearClear}>
              <div className="modal-wrapper">
                <div className="modal-top">
                  <div className="modal-header">Collections</div>
                  
                  <div className="modal-x-btn" onClick={() => this.handleExplore()}><FontAwesomeIcon className="times-icon" icon={faTimes} /></div>
                </div>
                  <div className="modal-links">
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                      pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: 'loved', filtprojects: ''
                    }
                      }}> Projects We Love </Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: 'funded', filtprojects: ''
                    }
                  }}> Nearly Funded </Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: 'newest', filtprojects: ''
                    }
                  }}>Just Launched </Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: '', filter: '', filtprojects: ''
                    }
                  }}>Everything </Link>
                  </div>
                
                <div className="modal-top">
                  <div className="modal-header">Categories</div>
                </div>
                  <div className="modal-links">
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/1">Arts</Link>
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/2">Comics & Illustration</Link>
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/3">Design & Tech</Link>
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/4">Film</Link>
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/5">Food & Craft</Link>
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/6">Games</Link>
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/7">Music</Link>
                  <Link onClick={() => this.handleExplore()} className="modal-link" to="/category/8">Publishing</Link>
                </div>
                  <div className="modal-top">
                    <div className="modal-header">Locations</div>
                  </div>
                  <div className="modal-links">
                    <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                      pathname: '/search',
                      state: {
                        category_id: '', location: 'Earth', filter: '', filtprojects: ''
                      }
                    }}>Earth</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Australia', filter: '', filtprojects: ''
                    }
                  }}>Australia</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Austria', filter: '', filtprojects: ''
                    }
                  }}>Austria</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Belgium', filter: '', filtprojects: ''
                    }
                  }}>Belgium</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Canada', filter: '', filtprojects: ''
                    }
                  }}>Canada</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Denmark', filter: '', filtprojects: ''
                    }
                  }}>Denmark</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'France', filter: '', filtprojects: ''
                    }
                  }}>France</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Germany', filter: '', filtprojects: ''
                    }
                  }}>Germany</Link>
                                    <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Ireland', filter: '', filtprojects: ''
                    }
                  }}>Ireland</Link>
                                    <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Italy', filter: '', filtprojects: ''
                    }
                  }}>Italy</Link>
                                    <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Japan', filter: '', filtprojects: ''
                    }
                  }}>Japan</Link>
                                    <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Luxembourg', filter: '', filtprojects: ''
                    }
                  }}>Luxembourg</Link>
                                    <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Mexico', filter: '', filtprojects: ''
                    }
                  }}>Mexico</Link>
                                    <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'New Zealand', filter: '', filtprojects: ''
                    }
                  }}>New Zealand</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Norway', filter: '', filtprojects: ''
                    }
                  }}>Norway</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Singapore', filter: '', filtprojects: ''
                    }
                  }}>Singapore</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Spain', filter: '', filtprojects: ''
                    }
                  }}>Spain</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Sweden', filter: '', filtprojects: ''
                    }
                  }}>Sweden</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'Switzerland', filter: '', filtprojects: ''
                    }
                  }}>Switzerland</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'the Netherlands', filter: '', filtprojects: ''
                    }
                  }}>the Netherlands</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'the United Kingdom', filter: '', filtprojects: ''
                    }
                  }}>the United Kingdom</Link>
                  <Link className="modal-link" onClick={() => this.handleExplore()} to={{
                    pathname: '/search',
                    state: {
                      category_id: '', location: 'the United States', filter: '', filtprojects: ''
                    }
                  }}>the United States</Link>
                
                  </div>
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