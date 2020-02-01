import React from "react";
import CategoryProjectIndexItem from "./category_project_index_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class CategoryProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.projectReccomended = this.projectReccomended.bind(this);
  }

  projectReccomended(project) {
    return (
      <CategoryProjectIndexItem
        project={project}
        key={project.id}
        projectId={project.id}
      />
    );
  }

  render() {
    const { proj } = this.props;
    return (
      <div className="project-bar">
        <div className="small-header-proj-index">
          FRESH FAVORITES{" "}
          <Link className="discover-link" to="/search">
            Discover more{" "}
            <FontAwesomeIcon
              className="arrow-svg"
              icon={faChevronRight}
              alt=""
            />
          </Link>
        </div>
        <div className="project-index-item-container">
          {proj.slice(4, 8).map(project => this.projectReccomended(project))}
        </div>
      </div>
    );
  }
}

export default CategoryProjectIndex;
