import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import RewardIndex from "../../rewards/reward_index";
import Odometer from 'react-odometerjs';


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
         
        const { fetchProject, project, createBacking, user, errors, rewards } = this.props;

        let loved;
        if (this.props.project.loved === true) {
            loved = "loved";
        } else {
            loved = "hidden";
        }

        let futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + project.days_left);
        futureDate.setMinutes(0);
        futureDate.setSeconds(0);
        
        return (
        <div>
          <div className="project-show-container">
            <div className="project-summary-section">
              <div className="project-summary-container">
                <p>{project.title}</p>
                <p>{project.sub_title}</p>
                <img src={project.photoURL} alt="" />
                <div>
                    <Odometer value={project.newPledgeAmount} format="(,ddd)" /> pledged of {project.goal_amount} goal
                </div>
                <p>{project.newTotalBackers} backers</p>
                <p>{project.days_left} days to go</p>
                <input type="submit" value="Back this project" />
                <input type="submit" value="Remind me" />
                <div>favicons!!!</div>
                <p>
                  All or nothing. This project will only be funded if it reaches
                  its goal by {futureDate.toString()}
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
                  <div className="user-info-container">
                    {project.authorName}
                  </div>
                  <div className="reward-header"> Support</div>
                  <RewardIndex
                    // rewards={Object.values(project.rewards)}
                    createBacking={createBacking}
                    fetchProject={fetchProject}
                    user={user}
                    project={project}
                    errors={errors}
                    rewards={rewards}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        );
       
    }


    
}

export default withRouter(ProjectShow);
