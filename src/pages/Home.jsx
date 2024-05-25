import React from "react";
import "../css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import photo from "../assets/photo.jpg";
const Home = () => {
  return (
    <>
      <div className="main flex">
        <div className="left-half"></div>
        <div className="right-half">
          <img src={photo} alt="photo" className="photo" />
          <div className="navbar flex">
            <div className="menu">
              <div className="hamburger">
                <div className="line small"></div>
                <div className="line big"></div>
                <div className="line small"></div>
              </div>
              <span>Menu</span>
            </div>
            <div className="icons-right">
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="choose">
        {/* why choose us */}

        <div className="choose-us text-center font-bold text-black text-lg mt-10">
          <p>Why Choose US</p>
          <p className="benefits">BENEFITS OF THIS</p>
          <p className="courses">COURSES</p>
        </div>
        {/* Boxes */}

        <div className="flex box">
          <div className="box-1 border-2 border-red-900"></div>
          <div className="box-1 border-2 border-green-900"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
