import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

class ReccomendedProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.percentFunded = this.percentFunded.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      heartClass: "hidden"
    };
  }

  percentFunded(pledged, total) {
    return Math.floor((pledged / total) * 100);
  }

  onClick() {
    // Trigger is just so you can't spam the like button animation and make it glitchy.
    // Aka just one animation until the first animation has run its course.

    // first - set class from hidden to heart-notification-container
    // second - setTimeout for 2 seconds, which will then add a fadeout and second setTimeout
    // setTimeout number 2 will fire after 0.4 seconds, which will change class back to hidden.
    // Will also set our trigger back to true, so it can be fired again.
    // fade in and fade out are 0.5s animations
    let trigger = true;

    if (trigger) {
      trigger = false;
      this.setState({ heartClass: "heart-notification-container" });
      setTimeout(() => {
        this.setState({ heartClass: "heart-notification-container fadeout" });
        setTimeout(() => {
          this.setState({ heartClass: "hidden" });
          trigger = true;
        }, 400);
      }, 2000);
    }
  }

  render() {
    const { projectId, project } = this.props;

    return (
      <div className="recc-project-index-item">
        <div className="author">
          <div className="recc-pic-and-body">
            <Link to={`/projects/${projectId}`}>
              <img
                className="recc-project-index-item-pic"
                src={project.photoURL}
                alt=""
              />
              <div className="recc-contents">
                <p className="recc-project-title">{project.title}</p>
                <p className="funded-amount">
                  {this.percentFunded(
                    project.newPledgeAmount,
                    project.goal_amount
                  )}
                  % funded
                </p>
                <p className="author-name">
                  By&nbsp;
                  <p className="proj-name-underline">{project.authorName}</p>
                </p>
              </div>
            </Link>
            <div className="heart-container" onClick={this.onClick}>
              <div className={this.state.heartClass}>
                <div className="heart-notif-rel-cont">
                  <div className="heart-notification-inner">
                    feature in progress :)
                  </div>
                  <div className="heart-notification-tri"></div>
                </div>
              </div>
              <FontAwesomeIcon className="heart" icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReccomendedProjectIndexItem;
