import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useStickyNavbar } from "./useStickyNavbar";
import logo from "../assets/logo.jpg"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSticky = useStickyNavbar();

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <Link to="/" className="title">
        <img src={logo} alt="Website Logo" className="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>PAGES</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>CLASSES</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>COURSES</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>INSTRUCTOR</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>CONTACT US</NavLink>
        </li>
      </ul>
    </nav>
  );
};
