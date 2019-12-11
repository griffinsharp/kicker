import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class CategoryFeatured extends React.Component {

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.state = {
            filtProj: [this.props.projects]
        };
    }

    componentDidMount () {
        this.props.fetchProjects().then( () => {
            this.filter(this.props.projects);
        });
    }

    filter(projects) {
        let categoryId = this.props.category;
        let filteredProjects = projects.filter(project => project.category_id == categoryId);
        this.setState({filtProj: filteredProjects});
    }

render() {

    let proj = this.state.filtProj;

    return (
        <div className="featured-project">
            <p className="small-header">FEATURED PROJECT</p>
            {/* render picture based on id! src={FeaturedPic} */}
            <img className="featured-pic" src={proj[0].photoURL}/>
            <Link to={`/projects/${proj[0].id}`} className="mid-header">
                {proj[0].title}
                    </Link>
            <p className="mid-paragraph">
                {proj[0].sub_title}
                    </p>
            <p className="author">
                By <Link to={`/projects/${proj[0].id}`} >{proj[0].authorName}</Link>
            </p>
        </div>
    )

}


};

export default withRouter(CategoryFeatured);

