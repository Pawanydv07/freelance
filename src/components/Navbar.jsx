import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/instructor">Instructor</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
