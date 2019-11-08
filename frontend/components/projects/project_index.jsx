import React from "react";
import ProjectIndexItem from "./project_index_item";
import { Link } from "react-router-dom";

class ProjectIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {

        const {projects, fetchProject} = this.props;
        return (

            <div>
                <div>
                    {
                        projects.map(project => <ProjectIndexItem project={project} fetchProject={fetchProject}/>)
                    }
                </div>
            </div>
        )
    }
}

export default ProjectIndex;