import React from 'react';
import ProjectIndexContainer from '../projects/project_index_container';
import CategoryBar from '../categorybar/categorybar';
import ReccomendedProjectIndexContainer from '../projects/reccomended_project_index_container';
import FeaturedProjectContainer from '../projects/featured_project_container';
import FeaturedPic from "../../../app/assets/images/featured.jpg";
import CtaPic from "../../../app/assets/images/retro.png";
import { Link } from "react-router-dom";

class Home extends React.Component {


    render () {
        return (
          <div className="home-container">
            <div className="category-bar-container">
              <div className="category-bar">
                <CategoryBar />
              </div>
            </div>
            <div className="mid-section-container">
              <div className="mid-section">
                <div className="featured-project-container">
                  <div className="featured-project">
                    <p className="small-header">FEATURED PROJECT</p>
                    <img className="featured-pic" src={FeaturedPic} />
                    <Link to="/projects/0" className="mid-header">
                      Can I Kick It?
                    </Link>
                    <p className="mid-paragraph">
                      Yes, you can. Introducing, Kick It. The newest app for
                      buying, selling, and trading your favorite sneakers all
                      from your smartphone.
                    </p>
                    <p className="author">
                      By <Link to="/projects/0"> Kick It</Link>
                    </p>
                  </div>
                </div>
                <div className="reccomended-project-container">
                  <p className="small-header-recc">RECOMMENDED</p>
                  <ReccomendedProjectIndexContainer />
                </div>
              </div>
            </div>
            <div className="newsletter-banner-container">
              <div className="newsletter-banner">
                <p className="mid-header">
                  Discover the best and brightest projects on Kickstarter.
                </p>
                <p className="mid-paragraph">
                  Sign up to receive our weekly Projects We Love newsletter.
                </p>
                <div className="newsletter-inputs">
                  <input
                    className="session-type-input"
                    type="text"
                    value="Enter email address"
                  />
                  <input
                    className="session-type-button"
                    type="button"
                    value="Subscribe"
                  />
                </div>
              </div>
            </div>
            <div className="call-to-action-container">
              <div className="cta">
                <img className="cta-pic" src={CtaPic} alt="" />
              </div>
            </div>
            <div className="project-index-container">
              <ProjectIndexContainer />
            </div>
          </div>
        );
    }
}

export default Home;