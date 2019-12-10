import React from "react";
import CategoryIndexItem from "./category_index_item";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.projectDisplay = this.projectDisplay.bind(this);
        this.filter = this.filter.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    // First project (id of 0) is featured. The next 3 are reccomended. After that, they are just in the banners.
    filter(projects) {
        let categoryId = this.props.category;
        let filteredProjects = projects.filter(project => {
            if (project.category_id == categoryId) {
                return project;
            }
        });
        return filteredProjects.map(filteredProject => this.projectDisplay(filteredProject));
    }

    projectDisplay(project) {
       
            return (
                <CategoryIndexItem
                    project={project}
                    key={project.id}
                    fetchProject={this.props.fetchProject}
                />
            );
    }


    render() {
        const { projects, fetchProject, category } = this.props;
        return (

            <div className="project-bar">
                <div className="small-header-proj-index">
                    FRESH FAVORITES{" "}
                    <Link className="discover-link" to="/projects/discover">
                        Discover more <FontAwesomeIcon className="arrow-svg" icon={faChevronRight} alt="" />
                    </Link>
                </div>
                <div className="project-index-item-container">
                    {this.filter(projects)}
                </div>
            </div>
        );
    }
}

export default CategoryIndex;