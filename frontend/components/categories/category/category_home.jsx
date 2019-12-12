import React from 'react';
import CategoryBar from '../../categorybar/categorybar';
import CatReccProjIndex from '../category_reccomended/cat_recc_proj_index';
import CategoryFeatured from "../category_featured/category_featured";

class CategoryHome extends React.Component {

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.state = {
            filtProj: [this.props.projects]
        };
    }

    componentDidMount() {
        this.props.fetchProjects().then(() => {
            this.filter(this.props.projects);
        });
    }

    filter(projects) {
        let categoryId = this.props.category;
        let filteredProjects = projects.filter(project => project.category_id == categoryId);
        this.setState({ filtProj: filteredProjects });
    }

    render() {
        const { projects, fetchProject, category } = this.props;
        let proj = this.state.filtProj;
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
                    {/* <CategoryIndexContainer projects={this.filter(projects).slice(4,8)}/> */}
                </div>
            </div>
        );
    }
}

export default CategoryHome;