import React from 'react';
import CategoryIndexContainer from './category_index_container';
import CategoryBar from '../../categorybar/categorybar';
// import ReccomendedCategoryIndexContainer from '../projects/reccomended_project_index_container';
import FeaturedPic from "../../../../app/assets/images/featured.jpg";
import CtaPic from "../../../../app/assets/images/retro.png";
import { Link } from "react-router-dom";
import CategoryFeatured from "../category_featured/category_featured";

class CategoryHome extends React.Component {

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    filter(projects) {
       
        let categoryId = this.props.category;
        let filteredProjects = projects.filter(project => project.category_id == categoryId);
        return filteredProjects;
        
    }



    render() {
        const { projects, fetchProject, category } = this.props;
        debugger;
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
                            <CategoryFeatured project={this.filter(this.props.projects)}/>
                        </div>
                        <div className="reccomended-project-container">
                            <p className="small-header-recc">RECOMMENDED</p>
                            {/* <ReccomendedCategoryIndexContainer /> */}
                        </div>
                    </div>
                </div>
               
                <div className="project-index-container">
                    {/* <CategoryIndexContainer projects={this.filter(projects).slice(4,8)}/> */}
                </div>
            </div>
        );
    }
}

export default CategoryHome;