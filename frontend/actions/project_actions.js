import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS"

// regular action creators

export const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
});

export const receiveProject = (payload) => ({
    type: RECEIVE_PROJECT,
    payload
    // payload will have project and rewards (show.json.jbuilder)
});

// Can delete later:
// export const receiveProject = ({ project, user }) => ({
//     type: RECEIVE_PROJECT,
//     project,
//     user
// });

export const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
});

export const receiveProjectErrors = (errors) => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
});

// thunk action creators

export const fetchProjects = () => dispatch => {
    return APIUtil.fetchProjects()
    .then((projects) => dispatch(receiveProjects(projects))); 
};

export const fetchProject = (projectId) => dispatch => {
    return APIUtil.fetchProject(projectId)
    .then((project) => dispatch(receiveProject(project)));
};

export const createProject = (project) => dispatch => {
    return APIUtil.createProject(project)
        .then((project) => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {
    return APIUtil.updateProject(project)
        .then((project) => dispatch(receiveProject(project)));
};

export const deleteProject = (projectId) => dispatch => {
    return APIUtil.deleteProject(projectId)
    .then((projectId) => dispatch(removeProject(projectId)));
};