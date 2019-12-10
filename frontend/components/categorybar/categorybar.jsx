import React from "react";
import { Link } from "react-router-dom";

class CategoryBar extends React.Component {
  render() {
    return (
      <div className="category-list">
          <Link className="cat-list-item" to="/category/1">Arts</Link>
        
          <Link className="cat-list-item" to="/category/2">Comics & Illustration</Link>
        
          <Link className="cat-list-item" to="/category/3">Design & Tech</Link>
        
          <Link className="cat-list-item" to="/category/4">Film</Link>
        

          <Link className="cat-list-item" to="/category/5">Food & Craft</Link>
        

          <Link className="cat-list-item" to="/category/6">Games</Link>
        

          <Link className="cat-list-item" to="/category/7">Music</Link>
        

          <Link className="cat-list-item" to="/category/8">Publishing</Link>
        
      </div>
    );
  }
}

export default CategoryBar;
