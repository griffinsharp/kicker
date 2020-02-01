import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../app/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAppear: "hidden",
      modalAppearClear: "hidden"
    };
  }

  handleExplore() {
    if (this.state.modalAppear === "hidden") {
      document.body.style.overflow = "hidden";
      this.setState({ modalAppear: "modal" });
      this.setState({ modalAppearClear: "modalclear" });
    } else if (this.state.modalAppear === "modal") {
      document.body.style.overflow = "auto";
      this.setState({ modalAppear: "hidden" });
      this.setState({ modalAppearClear: "hidden" });
    }
  }

  render() {
    let stateButton;
    if (this.props.currentUser === null) {
      stateButton = (
        <Link to="/login" className="nav-link">
          Log in
        </Link>
      );
    } else {
      stateButton = (
        <Link to="/" className="nav-link" onClick={() => this.props.logout()}>
          Log out
        </Link>
      );
    }

    let notLogged;

    if (this.props.currentUser === null) {
      notLogged = "/login";
    } else {
      notLogged = "/projects/new";
    }

    return (
      <div className="navbar-and-modal">
        <div className={this.state.modalAppear}>
          <div className={this.state.modalAppearClear}>
            <div className="modal-wrapper">
              <div className="modal-top">
                <div className="modal-header">Collections</div>

                <div
                  className="modal-x-btn"
                  onClick={() => this.handleExplore()}
                >
                  <FontAwesomeIcon className="times-icon" icon={faTimes} />
                </div>
              </div>
              <div className="modal-links">
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: "/search/Loved",
                    state: {
                      category_id: "",
                      location: "Earth",
                      filter: "Projects We Love"
                    }
                  }}
                >
                  {" "}
                  Projects We Love{" "}
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: "/search/MostFunded",
                    state: {
                      category_id: "",
                      location: "Earth",
                      filter: "Most Funded"
                    }
                  }}
                >
                  {" "}
                  Nearly Funded{" "}
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: "/search/Newest",
                    state: {
                      category_id: "",
                      location: "Earth",
                      filter: "Newest"
                    }
                  }}
                >
                  Just Launched{" "}
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: "/search/All",
                    state: {
                      category_id: "",
                      location: "Earth",
                      filter: "Magic"
                    }
                  }}
                >
                  Everything{" "}
                </Link>
              </div>

              <div className="modal-top">
                <div className="modal-header">Categories</div>
              </div>
              <div className="modal-links">
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/1"
                >
                  Arts
                </Link>
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/2"
                >
                  Comics & Illustration
                </Link>
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/3"
                >
                  Design & Tech
                </Link>
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/4"
                >
                  Film
                </Link>
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/5"
                >
                  Food & Craft
                </Link>
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/6"
                >
                  Games
                </Link>
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/7"
                >
                  Music
                </Link>
                <Link
                  onClick={() => this.handleExplore()}
                  className="modal-link"
                  to="/category/8"
                >
                  Publishing
                </Link>
              </div>
              <div className="modal-top">
                <div className="modal-header">Locations</div>
              </div>
              <div className="modal-links">
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Earth${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Earth"
                    }
                  }}
                >
                  Earth
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Australia${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Australia"
                    }
                  }}
                >
                  Australia
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Austria${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Austria"
                    }
                  }}
                >
                  Austria
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Belgium${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Belgium"
                    }
                  }}
                >
                  Belgium
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Canada${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Canada"
                    }
                  }}
                >
                  Canada
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Denmark${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Denmark"
                    }
                  }}
                >
                  Denmark
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/France${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "France"
                    }
                  }}
                >
                  France
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Germany${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Germany"
                    }
                  }}
                >
                  Germany
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Ireland${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Ireland"
                    }
                  }}
                >
                  Ireland
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Italy${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Italy"
                    }
                  }}
                >
                  Italy
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Japan${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Japan"
                    }
                  }}
                >
                  Japan
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Luxembourg${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Luxembourg"
                    }
                  }}
                >
                  Luxembourg
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Mexico${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Mexico"
                    }
                  }}
                >
                  Mexico
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/NewZealand${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "New Zealand"
                    }
                  }}
                >
                  New Zealand
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Norway${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Norway"
                    }
                  }}
                >
                  Norway
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Singapore${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Singapore"
                    }
                  }}
                >
                  Singapore
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Spain${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Spain"
                    }
                  }}
                >
                  Spain
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Sweden${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Sweden"
                    }
                  }}
                >
                  Sweden
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Switzerland${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "Switzerland"
                    }
                  }}
                >
                  Switzerland
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/Netherlands${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "the Netherlands"
                    }
                  }}
                >
                  the Netherlands
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/UK${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "the United Kingdom"
                    }
                  }}
                >
                  the United Kingdom
                </Link>
                <Link
                  className="modal-link"
                  onClick={() => this.handleExplore()}
                  to={{
                    pathname: `/search/USA${Math.floor(
                      100 * Math.random(1000)
                    )}`,
                    state: {
                      category_id: "",
                      filter: "Magic",
                      location: "the United States"
                    }
                  }}
                >
                  the United States
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="left-bar">
            <p className="nav-link" onClick={() => this.handleExplore()}>
              Explore
            </p>
            <Link to={notLogged} className="nav-link">
              Start a project
            </Link>
          </div>
          <div className="logo-bar">
            <Link to="/" className="nav-link">
              <img className="logo-img" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="right-bar">
            <div className="nav-link">
              <Link
                to="/search"
                className="link"
                onClick={() => {
                  if (this.props.location.pathname.slice(0, 7) === "/search")
                    window.location.reload();
                }}
              >
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

export default withRouter(Navbar);
