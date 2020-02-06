import React from "react";
import ProjectIndexItem from "./project_index_item";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.projectDisplay = this.projectDisplay.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  // First project (id of 0) is featured. The next 3 are reccomended. After that, they are just in the banners.
  projectDisplay(project) {
    if (project.id > 3 && project.id < 8) {
      return (
        <ProjectIndexItem
          project={project}
          key={project.id}
          fetchProject={this.props.fetchProject}
        />
      );
    }
  }

  render() {
    const { projects, fetchProject } = this.props;
    return (
      <div className="project-bar">
        <div className="small-header-proj-index">
          FRESH FAVORITES{" "}
          <Link className="discover-link" to="/search">
            Discover more
            <FontAwesomeIcon
              className="arrow-svg"
              icon={faChevronRight}
              alt=""
            />
          </Link>
        </div>
        <div className="project-index-item-container">
          {projects.map(project => this.projectDisplay(project))}
        </div>
      </div>
    );
  }
}

export default ProjectIndex;
