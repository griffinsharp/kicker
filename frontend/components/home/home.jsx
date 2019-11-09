import React from 'react';
import ProjectIndexContainer from '../projects/project_index_container';
import CategoryBar from '../categorybar/categorybar';

class Home extends React.Component {

    render () {
        return(
            <div className="home-container">
                <div className="category-bar"><CategoryBar/></div>
                <div><ProjectIndexContainer /></div>
            </div>
        )
    }
}

export default Home;