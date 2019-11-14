import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import RewardIndex from "../../rewards/reward_index";
import Odometer from 'react-odometerjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

        let percent = Math.floor(100*(this.props.project.newPledgeAmount / this.props.project.goal_amount));
        
        if (percent > 100) percent = 100;
        
        let progressBar = {
          width: `${percent}%`
        };

        let futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + project.days_left);
        futureDate.setMinutes(0);
        futureDate.setSeconds(0);
        
        return (
        <div>
          <div className="project-show-container">
            <div className="project-summary-section">
              <div className="project-summary-container">
                <div className="project-intro">
                  <p className="project-title">{project.title}</p>
                  <p className="project-subtitle">{project.sub_title}</p>
                </div>

                <div className="project-picture-and-details">
                  <div className="project-pic-container">
                      <img className="project-pic" src={project.photoURL} alt="" />
                  </div>
                  <div className="project-details-container">
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={progressBar}>

                        </div>
                    </div>
                      <div className="pledged-container">
                        <div className="odometer">$<Odometer value={project.newPledgeAmount} format="(,ddd)" className="odometer" /> </div> 
                        <div className="light-grey sub-text">pledged of ${project.goal_amount} goal </div>
                      </div>
                      <p className="main-text light-grey">{project.newTotalBackers}</p>
                      <p className="light-grey sub-text">backers</p>
                      <p className="main-text light-grey">{project.days_left}</p>
                      <p className="light-grey sub-text">days to go</p>
                      <input type="submit" value="Back this project" className="backing-btn"/>
                     <div className="remind-and-favs">
                        <input type="submit" value="Remind me" className="project-remind-btn"/>
                        <div className="social-icons-container">
                          <div className="social-icons"><FontAwesomeIcon icon={faGithub} alt="github-icon"/></div>
                          <div className="social-icons"><FontAwesomeIcon icon={faLinkedin} alt="linkedin-icon" /></div>
                          <div className="social-icons"><FontAwesomeIcon icon={faEnvelope} alt="envelope-icon" /></div>
                        </div>
                      </div>
                      <p>
                        All or nothing. This project will only be funded if it reaches
                        its goal by {futureDate.toString()}
                      </p>
                  </div>

                </div>

                <div className={loved}>Project We Love</div>
                <div>{project.category}</div>
                <div>{project.location}</div>
              </div>
            </div>
            <div className="project-nav-bar">
              <div className="campaign-tab">Campaign</div>
              {project.campaign}
            </div>
            <div className="project-content-container">
              <div className="project-content">
                <div className="campaign-content-container">About</div>
                  {project.about}
                <div className="info-and-rewards-container">
                  <div className="user-info-container">
                    {project.authorName}
                  </div>
                  <div className="reward-header"> Support</div>
                  <RewardIndex
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
