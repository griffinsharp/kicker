import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

class ProjectIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const {project, key} = this.props;

    return (
      <div>
        <div className="author-name">By {project.authorName}</div>
        <p className="author">
          By <Link to={`/projects${key}`}> Kick It</Link>
        </p>
      </div>
    );
  }

}

export default ProjectIndexItem;