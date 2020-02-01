import React from "react";
import CategoryBar from "../../categorybar/categorybar";
import CatReccProjIndex from "../category_reccomended/cat_recc_proj_index";
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

  checkCategory(projectCategory) {
    let text = "";
    if (projectCategory == "Arts") {
      text =
        "Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art and performance.";
    } else if (projectCategory == "Comics & Illustration") {
      text =
        "Explore fantastical worlds and original characters from Kickstarter’s community of comics creators and illustrators.";
    } else if (projectCategory == "Design & Tech") {
      text =
        "From fine design to innovative tech, discover projects from creators working to build a more beautiful future.";
    } else if (projectCategory == "Film") {
      text =
        "Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.";
    } else if (projectCategory == "Food & Craft") {
      text =
        "See how artisans and entrepreneurs are using Kickstarter to break new ground in food, fashion, and crafts.";
    } else if (projectCategory == "Games") {
      text =
        "From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.";
    } else if (projectCategory == "Music") {
      text =
        "Discover new albums, performances, and independent venues from creators using Kickstarter to shape the future of sound.";
    } else if (projectCategory == "Publishing") {
      text =
        "Explore how writers and publishers are using Kickstarter to bring new literature, periodicals, podcasts, and more to life.";
    }
    return text;
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

        <div className="category-banner-container">
          <div className="category-banner">
            <p className="mid-header">{projects[0].category}</p>
            <p className="mid-paragraph">
              {this.checkCategory(projects[0].category)}
            </p>
          </div>
        </div>

        <div className="mid-section-container">
          <div className="mid-section">
            <div className="featured-project-container">
              <CategoryFeatured proj={proj} />
            </div>
            <div className="reccomended-project-container">
              <p className="small-header-recc">RECOMMENDED</p>
              <CatReccProjIndex proj={proj} />
            </div>
          </div>
        </div>

        <div className="project-index-container">
          <CategoryProjectIndex proj={proj} />
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryHome);
