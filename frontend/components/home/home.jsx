import React from 'react';
import ProjectIndexContainer from '../projects/project_index_container';

class Home extends React.Component {

    render () {
        return(
            <div className="home-container">
                <div><ProjectIndexContainer className="project-index-container"/></div>
            </div>
        )
    }
}

export default Home;