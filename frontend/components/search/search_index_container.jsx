import { connect } from "react-redux";
import { fetchProjects } from "../../actions/project_actions";
import SearchIndex from "./search_index";

const mapStateToProps = (state, ownProps) => ({
  projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
