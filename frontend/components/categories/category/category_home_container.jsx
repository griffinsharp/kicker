import { connect } from "react-redux";
import categoryHome from "./category_home";
import {
  fetchProjects,
  fetchProject,
  createProject,
  updateProject,
  deleteProject
} from "../../../actions/project_actions";
import { Route, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  projects: Object.values(state.entities.projects).filter(
    project => project.category_id == ownProps.match.params.categoryId
  ),
  category: ownProps.match.params.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(categoryHome)
);
