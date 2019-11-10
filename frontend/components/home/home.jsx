import React from 'react';
import ProjectIndexContainer from '../projects/project_index_container';
import CategoryBar from '../categorybar/categorybar';
import ReccomendedProjectIndexContainer from '../projects/reccomended_project_index_container';
import FeaturedProjectContainer from '../projects/featured_project_container';

class Home extends React.Component {


    render () {
        return (
          <div className="home-container">
            <div className="category-bar-container">
              <div className="category-bar">
                <CategoryBar />
              </div>
            </div>
            <div className="mid-section">
              <div className="featured-project-container"></div>
              <div className="reccomended-project-container">
                <ReccomendedProjectIndexContainer />
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