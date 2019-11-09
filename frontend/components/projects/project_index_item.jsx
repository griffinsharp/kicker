import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const {project} = this.props;

    return (
    <div className="author-name">By {project.authorName}</div>
    );
  }

}

export default ProjectIndexItem;