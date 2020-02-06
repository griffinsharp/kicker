import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project } = this.props;

    return (
      <div className="project-index-item">
        <img className="project-index-item-pic" src={project.photoURL} alt="" />
        <p className="project-index-item-info">
          <Link
            to={`/projects/${project.id}`}
            className="proj-index-item-title"
          >
            {project.title}
          </Link>
          <div className="proj-index-item-subtitle">{project.sub_title}</div>
          <p className="author">
            By{" "}
            <Link className="author-link" to={`/projects/${project.id}`}>
              {project.authorName}
            </Link>
          </p>
          {/* <div className="author-name">By {project.authorName}</div> */}
        </p>
      </div>
    );
  }
}

export default ProjectIndexItem;
