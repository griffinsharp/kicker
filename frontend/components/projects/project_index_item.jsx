import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

    componentDidMount() {
        this.props.fetchProject();
    }

    render() {

        const {project} = this.props;
        return (
            <div>{project.title}</div>
        )
    }

}

export default ProjectIndexItem;