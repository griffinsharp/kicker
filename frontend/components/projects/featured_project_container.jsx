import { connect } from "react-redux";
import {
  fetchProjects,
  fetchProject,
  createProject,
  updateProject,
  deleteProject
} from "../../actions/project_actions";
import FeaturedProject from "./featured_project";

const mapStateToProps = (state, ownProps) => ({
  projects: Object.values(state.entities.projects)
  
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProject);
