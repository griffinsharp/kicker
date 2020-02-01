import React from "react";
import CatReccProjIndexItem from "./cat_recc_proj_index_item";
import { Route, Redirect, withRouter } from "react-router-dom";

class CatReccProjIndex extends React.Component {
  constructor(props) {
    super(props);
    this.projectReccomended = this.projectReccomended.bind(this);
  }

  projectReccomended(project) {
    return (
      <CatReccProjIndexItem
        project={project}
        key={project.id}
        projectId={project.id}
      />
    );
  }

  render() {
    const { proj } = this.props;

    return (
      <div className="reccomended-project-bar">
        {proj.slice(1, 4).map(project => this.projectReccomended(project))}
      </div>
    );
  }
}

export default withRouter(CatReccProjIndex);
