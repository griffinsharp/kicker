import React from 'react';
import CategoryBar from '../../categorybar/categorybar';
import CatReccProjIndex from '../category_reccomended/cat_recc_proj_index';
import CategoryFeatured from "../category_featured/category_featured";
import CategoryProjectIndex from "../category_project/category_project_index";
import { withRouter } from "react-router-dom";

class CategoryHome extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        const { projects, fetchProject, category } = this.props;
        let proj = this.props.projects;
        if (!this.props.projects[0]) return null;
        return (
            <div className="home-container">
                <div className="category-bar-container">
                    <div className="category-bar">
                        <CategoryBar />
                    </div>
                </div>
                <div className="mid-section-container">
                    <div className="mid-section">
                        <div className="featured-project-container">
                            <CategoryFeatured proj={proj}/>
                        </div>
                        <div className="reccomended-project-container">
                            <p className="small-header-recc">RECOMMENDED</p>
                            <CatReccProjIndex proj={proj}/>
                        </div>
                    </div>
                </div>
               
                <div className="project-index-container">
                    <CategoryProjectIndex proj={proj}/>
                </div>
            </div>
        );
    }
}

export default withRouter(CategoryHome);