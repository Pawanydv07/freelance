import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaEllipsisV, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import { useStickyNavbar } from "./useStickyNavbar";
import logo from "../assets/logo.jpg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSticky = useStickyNavbar();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <Link to="/" className="title">
        <img src={logo} alt="Website Logo" className="logo" />
      </Link>
      <div className="menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaEllipsisV />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home" activeClassName="active">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/pages" activeClassName="active">PAGES</NavLink>
        </li>
        <li>
          <NavLink to="/classes" activeClassName="active">CLASSES</NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeClassName="active">COURSES</NavLink>
        </li>
        <li>
          <NavLink to="/instructor" activeClassName="active">INSTRUCTOR</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">CONTACT US</NavLink>
        </li>
        <li className="icon">
          <FaSearch />
        </li>
        <li className="icon">
          <FaShoppingCart />
        </li>
        <li className="icon">
          <FaEllipsisV />
        </li>
      </ul>
    </nav>
  );
};
