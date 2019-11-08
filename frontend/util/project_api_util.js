// APU utility for our thunks to use that will request project data via
// AJAX from our Rails server.

// Below is a dispatch of an AJAX request and the return of a promise. 
// The success function will be chained onto this promise in the thunk aciton creator. 
// Errors optional (debugging purposes).

export const fetchProjects = () => (
    $.ajax({
        url: `api/projects`,
        method: `GET`,
    })
);

export const fetchProject = projectId => (
    $.ajax({
        url: `api/projects/${projectId}`,
        method: `GET`,
    })
);

export const createProject = project => (
    $.ajax({
        url: `api/projects`,
        method:`POST`,
        data: {project}
    })
)

export const updateProject = project => (
    $.ajax ({
        url: `api/projects/${project.id}`,
        method: `PATCH`,
        data: {project}
    })
);

export const deleteProject = projectId => (
    $.ajax({
        url: `api/projects/${projectId}`,
        method: `DELETE`
    })
)