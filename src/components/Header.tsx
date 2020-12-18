import React from "react";
import "./styles/css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Blogs</h1>
      <div className="controls">
        <Link to="/add" className="button">
          New
        </Link>
        <Link to="/blogs" className="button">
          Blogs
        </Link>
      </div>
    </div>
  );
}

export default Header;
