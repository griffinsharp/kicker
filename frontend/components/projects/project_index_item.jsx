import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

class ProjectIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    
    const {project, key} = this.props;

    return (
      <div className="project-index-item">
        <img className="project-index-item-pic" src={project.photoURL} alt="" />
        <p className="author">
          <div className="proj-index-item-title">{project.title}</div>
          <div className="proj-index-item-subtitle">{project.sub_title}</div>
          <div className="author-name">By {project.authorName}</div>
        </p>
      </div>
    );
  }

}

export default ProjectIndexItem;