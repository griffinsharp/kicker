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
        this.scrollReward = this.scrollReward.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
    }

    scrollReward() {
      this.refs.header.scrollIntoView({ behavior: 'smooth' });
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
                      <div className="bottom-project-bar">
                        <div className={loved}>Project We Love</div>
                        <div className="project-bar-item">{project.category}</div>
                        <div className="project-bar-item">{project.location}</div>
                      </div>
                  </div>
                  <div className="project-details-container">
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={progressBar}></div>
                    </div>
                      <div className="pledged-container">
                        <div className="odometer">$<Odometer value={project.newPledgeAmount} format="(,ddd)" className="odometer" /> </div> 
                        <div className="light-grey sub-text">pledged of ${project.goal_amount} goal </div>
                      </div>
                      <p className="main-text light-grey">{project.newTotalBackers}</p>
                      <p className="light-grey sub-text">backers</p>
                      <p className="main-text light-grey">{project.days_left}</p>
                      <p className="light-grey sub-text">days to go</p>
                      <input type="submit" value="Back this project" className="backing-btn" onClick={this.scrollReward}/>
                     <div className="remind-and-favs">
                        <div className="project-remind-btn-container">
                          <input type="submit" value="Remind me" className="project-remind-btn"/>
                        </div>
                        <div className="social-icons-container">
                          <div className="social-icons"><a href="https://github.com/griffinsharp" target="_blank"><FontAwesomeIcon className="gHub" icon={faGithub} alt="github-icon" /></a></div>
                          <div className="social-icons"><a href="https://www.linkedin.com/in/griffinesharp/" target="_blank"><FontAwesomeIcon icon={faLinkedin} alt="linkedin-icon" /></a></div>
                          <div className="social-icons"><a href="mailto:gsharpdev@gmail.com"><FontAwesomeIcon icon={faEnvelope} alt="envelope-icon" /></a></div>
                        </div>
                      </div>
                      <div className="all-or-nothing">
                      <p className="underline">All or nothing.</p> 
                        <p> This project will only be funded if it reaches
                        its goal by {futureDate.toString()}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="project-nav-bar-container">
              <div className="project-nav-bar-inner-container">
              <div className="project-nav-bar">
                
              <a className="campaign-tab" href="">Campaign</a>
                
              </div>
              </div>
            </div>

          <div className="lower-project-show-container">
            <div className="lower-project-show">
            <div className="project-campaign-container">
              <p className="project-campaign">About</p>
              <div className="project-campaign-body">{project.campaign}</div>
            </div>

            
                <div className="info-and-rewards-container">
                  <div className="user-info-container">
                    <div className="author-name-badge">{project.authorName}</div>
                    <div>{project.about}</div>
                  </div>
                  <div ref="header" className="reward-header">Support</div>
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
