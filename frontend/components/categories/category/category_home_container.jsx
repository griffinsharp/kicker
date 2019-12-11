import { connect } from 'react-redux';
import categoryHome from './category_home';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
    projects: Object.values(state.entities.projects),
    category: ownProps.match.params.categoryId
});

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(categoryHome);