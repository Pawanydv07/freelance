import React from "react";
import "../css/classpage.css";
import degree from "../assets/degree.png";
import badge from "../assets/badge.png";
import hero from "../assets/herosection.jpg";
import background from "../assets/28147.jpg";
import person from "../assets/64730.jpg";
const ClassPage = () => {
  return (
    <div className="main h-full w-full">
      <div className="classhero">
        <img src={hero} alt="hero" className="img-hero" />
        <h1 className="text-white font-bold">Pawan Yadav</h1>
      </div>
      <div className="maincontent">
        <div className="classMain">
          <div className="flex main-content glass">
            <div className="featured">
              <p className="star">&#9733;</p>
              <p className="featured-text">Featured</p>
            </div>
            <div className="flex main-content-2">
              <div className="badge glass">
                <img src={badge} alt="badge" className="w-20 h-10 mt-2" />
              </div>
              <div className="badge glass">
                <img src={degree} alt="badge" className="w-20 h-10 mt-2" />
              </div>
            </div>
          </div>
          <div className="onlineclass">
            <div className="online-1">
              <h4>Online Class</h4>
            </div>
            <div className="online-2">
              <div className="dot"></div>
              <h4>Online</h4>
            </div>
          </div>
          <div className="profile">
            <div className="person">
              <img src={person} alt="person" className="person-img" />
            </div>

            <hr />
            <div className="instructor-details">
              <h3>Instructor</h3>
              <p>John Doe</p>
            </div>
            <hr />
            <div className="class-details">
              <p>Courses</p>
              <p>Introduction to Programming</p>
            </div>
            <hr />
            <div className="review-stars">
              <p>Review</p>
              <p>★★★★☆ (6)</p>
            </div>
          </div>
          <div className="fees flex">
            <div className="payment"> $ 15 </div>
            <div className="cart">
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
