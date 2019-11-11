import { connect } from "react-redux";
import ProjectShow from "./project_show";
import {fetchProject} from "../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId]

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProject: (projectId) => dispatch(fetchProject(projectId))

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);