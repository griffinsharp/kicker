import React from "react";

class FeaturedProject extends React.Component {

  
  constructor(props) {
    super(props);
  }

  render() {
    const { author } = this.props.projects.first.authorName;
    // debugger

    return (
      <div className="">By {author}</div>
    );
  }
}

export default FeaturedProject;

