import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaEllipsisV, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import { useStickyNavbar } from "./useStickyNavbar";
import logo from "../assets/logo.jpg";
import { auth, signOut } from '../firebase';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const isSticky = useStickyNavbar();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
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
          <NavLink to="/quiz" activeClassName="active">QUIZ</NavLink>
        </li>
        <li>
          {user ? (
            <button onClick={handleLogout} className="logout-button text-black">Logout</button>
          ) : (
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          )}
        </li>
        <li className="icon">
          <FaSearch />
        </li>
        <li className="icon">
          <FaShoppingCart />
        </li>
      </ul>
    </nav>
  );
};
