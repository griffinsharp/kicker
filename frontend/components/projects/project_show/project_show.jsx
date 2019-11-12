import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ProjectShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
    }

    render() {

        if (!this.props.project) return null;
        
        const { project } = this.props;

        return (
          <div className="project-summary-section">
            <div className="project-summary-container">
                <p>{project.title}</p>
                <p>{project.sub_title}</p>
                <p>
                {project.total_pledged} pledged of {project.goal_amount} goal
                 </p>
                <p>{project.num_backers} backers</p>
                <p>{project.days_left} days to go</p>
                <input type="submit" value="Back this project"/>
                <input type="submit" value="Remind me"/>
            </div>
          </div>
        );
       
    }


    
}

export default withRouter(ProjectShow);
