import React from "react";
import ProjectIndexItem from "./project_index_item";
import { Link } from "react-router-dom";

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props);
    this.projectDisplay = this.projectDisplay.bind(this)
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  // First project (id of 0) is featured. The next 3 are reccomended. After that, they are just in the banners. 
  projectDisplay(project) {
    if (project.id > 3) {
      return <ProjectIndexItem
        project={project}
        key={project.id}
        fetchProject={fetchProject}
      />;
    }
  }

  render() {
    const { projects, fetchProject } = this.props;
    return (
      <div>
          {projects.map(project => (this.projectDisplay(project)))}
      </div>
    );
  }
}

export default ProjectIndex;