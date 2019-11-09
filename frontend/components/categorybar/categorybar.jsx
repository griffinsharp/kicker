import React from "react";
import { Link } from "react-router-dom";

class CategoryBar extends React.Component {
  render() {
    return (
      <div>
        <li>
          <ul>
            <Link to="/category/arts">Arts</Link>
          </ul>
          <ul>
            <Link to="/category/comics-illustration">Comics & Illustration</Link>
          </ul>
          <ul>
            <Link to="/category/design-tech">Design & Tech</Link>
          </ul>

          <ul>
            <Link to="/category/film">Film</Link>
          </ul>

          <ul>
            <Link to="/category/food-craft">Food & Craft</Link>
          </ul>

          <ul>
            <Link to="/category/games">Games</Link>
          </ul>

          <ul>
            <Link to="/category/music">Music</Link>
          </ul>

          <ul>
            <Link to="/category/publishing">Publishing</Link>
          </ul>
        </li>
      </div>
    );
  }
}

export default CategoryBar;
