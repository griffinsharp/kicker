import { connect } from 'react-redux';
import categoryIndex from './category_index';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
    projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(categoryIndex);