import React from 'react';
import { Link } from "react-router-dom";

class SearchIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { project, key } = this.props;

        return (
            <div className="search-index-item">
                <div className="search-img-container">
                    <img className="search-index-item-pic" src={project.photoURL} alt="" />
                </div>
                <p className="search-index-item-info">
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
                </p>
            </div>
        );
    }

}

export default SearchIndexItem;