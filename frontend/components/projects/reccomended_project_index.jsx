import React from "react";
import ReccomendedProjectIndexItem from "./reccomended_project_index_item";

class ReccomendedProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.projectReccomended = this.projectReccomended.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  projectReccomended(project) {
    if (project.id > 0 && project.id < 4) {
      return (
        <ReccomendedProjectIndexItem
          project={project}
          key={project.id}
          projectId={project.id}
          fetchProject={this.props.fetchProject}
        />
      );
    }
  }

  render() {
    const { projects, fetchProject } = this.props;
    return (
      <div className="reccomended-project-bar">
        {projects.map(project => this.projectReccomended(project))}
      </div>
    );
  }
}

export default ReccomendedProjectIndex;
