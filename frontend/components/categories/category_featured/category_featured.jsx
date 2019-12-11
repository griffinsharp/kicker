import React from "react";
import { Link } from "react-router-dom";

class CategoryFeatured extends React.Component {

    constructor(props) {
        super(props);
    }

    

render() {


    
    return (
        <div className="featured-project">
            <p className="small-header">FEATURED PROJECT</p>
            {/* render picture based on id! src={FeaturedPic} */}
            <img className="featured-pic" />
            <Link to={`/projects/${this.props.project[0].id}`} className="mid-header">
                {this.props.project[0].title}
                    </Link>
            <p className="mid-paragraph">
                {this.props.project[0].sub_title}
                    </p>
            <p className="author">
                By <Link to={`/projects/${this.props.project[0].id}`} >{this.props.project[0].authorName}</Link>
            </p>
        </div>
    )

}


};

export default CategoryFeatured;

