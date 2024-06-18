import React from "react";
import "../css/classpage.css";
import degree from "../assets/degree.png"
import badge from '../assets/badge.png';
const ClassPage = () => {
  return (
    <div className="main h-full w-full">
      <div className="classhero">
        <div className="classMain">
          <div className="flex main-content ">
            <div className="featured">
              <p className="star">&#9733;</p>
              <p className="featured-text">Featured</p>
            </div>
            <div className="flex main-content-2">
              <div className="badge"><img src={badge}alt='badge' className="w-20 h-10 mt-2 "/></div>
              <div className="badge"><img src={degree}alt='badge' className="w-20 h-10 mt-2 "/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
<p class="star"></p>;
