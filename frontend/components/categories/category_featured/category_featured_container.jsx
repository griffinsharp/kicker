import { connect } from 'react-redux';
import categoryFeatured from './category_featured';
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from '../../../actions/project_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    projects: Object.values(state.entities.projects),
    category: ownProps.match.params.categoryId
});

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(categoryFeatured));