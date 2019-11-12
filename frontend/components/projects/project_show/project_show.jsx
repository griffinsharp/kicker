import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ProjectShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
    }

    render() {
       
        // On the first render of a refresh (not navigated to via the HomeComponent),
        // we want to return null so that our componentDidMount has a chance to fetch the correct project.
        if (!this.props.project) return null;
        
        const { project } = this.props;

        let loved;
        if (this.props.project.loved === true) {
            loved = "loved";
        } else {
            loved = "hidden";
        }

        return (
          <div className="project-show-container">
            <div className="project-summary-section">
              <div className="project-summary-container">
                <p>{project.title}</p>
                <p>{project.sub_title}</p>
                <img src={project.photoURL} alt="" />
                <p>
                  {project.total_pledged} pledged of {project.goal_amount} goal
                </p>
                <p>{project.num_backers} backers</p>
                <p>{project.days_left} days to go</p>
                <input type="submit" value="Back this project" />
                <input type="submit" value="Remind me" />
                <div>favicons!!!</div>
                <p>
                  All or nothing. This project will only be funded if it reaches
                  its goal by Fri, April 15 2020 8:59 PM PST.{" "}
                </p>
                <div className={loved}>Project We Love</div>
                <div>{project.category}</div>
                <div>{project.location}</div>
              </div>
            </div>
            <div className="project-nav-bar">
              <div className="campaign-tab">Campaign</div>
              {/* Can add other tabs here later! */}
            </div>
            <div className="project-content-container">
              <div className="project-content">
                <div className="campaign-content-container">About</div>
                    <div className="info-and-rewards-container">
                        <div className="user-info-container">{project.authorName}</div>
                        <div className="reward-header"> Support</div>
                        <div className="reward-component">Reward Component</div>
                    </div>
              </div>
            </div>
          </div>
        );
       
    }


    
}

export default withRouter(ProjectShow);
