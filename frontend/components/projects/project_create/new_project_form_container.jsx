import { connect } from 'react-redux';
import newProjectForm from './new_project_form';
import { createProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
    user: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createProject: (project) => dispatch(createProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(newProjectForm);
