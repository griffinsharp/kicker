import React from "react";
import { Link } from "react-router-dom";

class CategoryBar extends React.Component {
  render() {
    return (
      <div className="category-list">
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/1">Arts</Link>
          <div className="cat-list-line"></div>
        </div>
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/2">Comics & Illustration</Link>
          <div className="cat-list-line"></div>
        </div>
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/3">Design & Tech</Link>
          <div className="cat-list-line"></div>
        </div>
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/4">Film</Link>
          <div className="cat-list-line"></div>
        </div>
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/5">Food & Craft</Link>
          <div className="cat-list-line"></div>
        </div>
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/6">Games</Link>
          <div className="cat-list-line"></div>
        </div>
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/7">Music</Link>
          <div className="cat-list-line"></div>
        </div>
        <div className="cat-item-and-line">
          <Link className="cat-list-item" to="/category/8">Publishing</Link>
          <div className="cat-list-line"></div>
        </div>
        
      </div>
    );
  }
}

export default CategoryBar;
