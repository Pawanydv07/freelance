import React from 'react';
import "../../css/Home/HomeP3.css";
import img from '../../assets/image.png';
import backgroundImage from '../../assets/white-4.jpg'; // Import the new background image

const HomeP3 = () => {
  return (
    <div className="two-column-container bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="left-column bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
        {/* <h2 className="heading">Left Side Heading</h2> */}
        <p className="description text-black">
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
