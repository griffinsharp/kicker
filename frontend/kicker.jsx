import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from './util/project_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    // window.fetchProjects = fetchProjects();
    // window.fetchProject = fetchProject;
    // window.createProject = createProject;
    // window.updateProject = updateProject;
    // window.deleteProject = deleteProject;



})

