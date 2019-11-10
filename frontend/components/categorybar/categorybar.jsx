import React from "react";
import { Link } from "react-router-dom";

class CategoryBar extends React.Component {
  render() {
    return (
      <div className="category-list">
          <Link className="cat-list-item" to="/category/arts">Arts</Link>
        
          <Link className="cat-list-item" to="/category/comics-illustration">Comics & Illustration</Link>
        
          <Link className="cat-list-item" to="/category/design-tech">Design & Tech</Link>
        
          <Link className="cat-list-item" to="/category/film">Film</Link>
        

          <Link className="cat-list-item" to="/category/food-craft">Food & Craft</Link>
        

          <Link className="cat-list-item" to="/category/games">Games</Link>
        

          <Link className="cat-list-item" to="/category/music">Music</Link>
        

          <Link className="cat-list-item" to="/category/publishing">Publishing</Link>
        
      </div>
    );
  }
}

export default CategoryBar;
