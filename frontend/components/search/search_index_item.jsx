import React from 'react';
import { Link } from "react-router-dom";

class SearchIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.percentFunded = this.percentFunded.bind(this);
    }

    percentFunded(pledged, total) {
        return Math.floor((pledged / total) * 100);
    }

    render() {

        const { project, key } = this.props;

        let percent = Math.floor(100 * (project.newPledgeAmount / project.goal_amount));

        if (percent > 100) percent = 100;

        let progressBar = {
            width: `${percent}%`
        };

        return (
            <div className="search-index-item">
                <div className="search-img-container">
                    <img className="search-index-item-pic" src={project.photoURL} alt="" />
                </div>
                <div className="search-index-item-info">
                    <Link
                        to={`/projects/${project.id}`}
                        className="search-index-item-title"
                    >
                        {project.title}
                    </Link>
                    <div className="search-index-item-subtitle">{project.sub_title}</div>
                    <p className="search-author">
                        By <Link to={`/projects/${project.id}`}>{project.authorName}</Link>
                    </p>
                </div>
                <div className="search-index-item-bottom">
                    <div>{`$${project.newPledgeAmount} pledged`}</div>
                    <div>{this.percentFunded(
                        project.newPledgeAmount,
                        project.goal_amount
                    )}% funded</div>
                    <div>{project.days_left} days to go</div>
                    <Link to={{
                        pathname: '/search',
                        state: {
                            category_id: '', location: `${project.lcategory}`, filter: '', filtprojects: ''
                        }
                    }}> {project.category}</Link>
                    <Link to={{
                        pathname: '/search',
                        state: {
                            category_id: '', location: `${project.location}`, filter: '', filtprojects: ''
                        }
                    }}> {project.location}</Link>
                
                
                </div>
                
            </div>
        );
    }

}

export default SearchIndexItem;