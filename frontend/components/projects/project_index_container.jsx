import {connect} from 'react-redux';
import projectIndex from './project_index';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
    projects: Object.values(state.entities.projects),
    // errors: state.errors.projects - Prob won't user until the show/edit page or something.
});

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(projectIndex);