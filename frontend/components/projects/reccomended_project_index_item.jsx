import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class ReccomendedProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projectId, project } = this.props;

    return (
      <div>
        <div className="author">
          <Link to={`/projects/${projectId}`}>
            <p className="author-name">By {project.authorName}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default ReccomendedProjectIndexItem;
