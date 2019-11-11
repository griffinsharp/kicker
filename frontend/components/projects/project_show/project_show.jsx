import React from "react";
import { Link } from "react-router-dom";

class ProjectShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render() {
        <h1>Test</h1>
    }


    
}

export default ProjectShow;
