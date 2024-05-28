import React from 'react';
import "../../css/Home/HomeP3.css";
import img from '../../assets/image.png';

const HomeP3 = () => {
  return (
    <div className="two-column-container">
      <div className="left-column">
        <h2 className="heading">Left Side Heading</h2>
        <p className="description">
          Some description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet semper libero, in volutpat justo lacinia id.
        </p>
        <button className="button">Click me</button>
      </div>
      <div className="right-column">
        <img src={img} alt="" className="image" />
      </div>
    </div>
  );
};

export default HomeP3;
