import React from "react";
import ProjectIndexItem from "./project_index_item";
import { Link } from "react-router-dom";

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects, fetchProject } = this.props;
    return (
      <div>
        <div>
          {projects.map(project => (
            <ProjectIndexItem className="project-index-item" project={project} key={project.id} fetchProject={fetchProject} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectIndex;