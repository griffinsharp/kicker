import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


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
                    <Link
                        to={`/projects/${project.id}`}
                        
                    >
                    <img className="search-index-item-pic" src={project.photoURL} alt="" />
                    </Link>
                </div>
                <div className="search-index-item-text">
                    <div className="search-index-item-info">
                        <Link
                            to={`/projects/${project.id}`}
                            className="search-index-item-title"
                        >
                            {project.title}
                        </Link>
                        <div className="search-index-item-subtitle">{project.sub_title}</div>
                        <p className="search-author">
                            by <Link to={`/projects/${project.id}`}>{project.authorName}</Link>
                        </p>
                    </div>
                    <div className="search-index-item-bottom">
                        <div className="progress-bar-search-container">
                            <div className="progress-bar-search" style={progressBar}></div>
                        </div>
                        <div className="search-pledge-amt">{`$${project.newPledgeAmount} pledged`}</div>
                        <div className="search-perc-funded">{this.percentFunded(
                            project.newPledgeAmount,
                            project.goal_amount
                        )}% funded</div>
                        <div className="search-days-left">{project.days_left} days to go</div>
                        <Link className="search-info-cat" to={{
                            pathname: '/search',
                            state: {
                                category_id: '', location: `${project.lcategory}`, filter: '', filtprojects: ''
                            }
                        }}>{project.category}</Link>

                        <Link className="search-info-loc" to={{
                            pathname: '/search',
                            state: {
                                category_id: '', location: `${project.location}`, filter: '', filtprojects: ''
                            }
                        }}><FontAwesomeIcon className="map-svg" icon={faMapMarkerAlt} alt="" />{project.location}</Link>
                    </div>
                </div>
                
                
            </div>
        );
    }

}

export default SearchIndexItem;