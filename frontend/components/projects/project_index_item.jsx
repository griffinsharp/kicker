import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: this.props.project.authorName
    };
  }

  componentDidMount() {
    this.props.fetchProject(this.props.project.id);
  }

render() {
        
        return (
            <div className="author-name">By {this.state.authorName}</div>
        )
}

  // render() {

  //     const {project} = this.props;
  //     let {authorName} = this.state.authorName;

  //     return (
  //         <div className="author-name">By {authorName}</div>
  //     )
  // }
}

export default ProjectIndexItem;