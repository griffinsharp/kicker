import { connect } from "react-redux";
import ProjectShow from "./project_show";
import {fetchProject, createBacking } from "../../../actions/project_actions";
import {receiveCurrentUser} from "../../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId],
    user: Object.values(state.entities.users)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createBacking: (backing) => dispatch(createBacking(backing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);