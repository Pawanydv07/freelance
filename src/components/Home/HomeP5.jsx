import React from 'react';
import "../../css/Home/HomeP5.css";
import backgroundVideo from '../../assets/bgimg.mp4';

const CinematicCircles = () => {
  return (
    <div className="cinematic-circles-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="background-overlay"></div>
      
      <div className="content">
        <h1 className="heading">Guide To The World Of Digitalization</h1>
        <div className="circles-container">
          {[
            { number: 75, text: "Satisfied Clients" },
            { number: 20, text: "Branches Globally" },
            { number: 35, text: "Expert Instructors" },
            { number: 5, text: "Years Experience" }
          ].map((item, index) => (
            <div key={index} className={`circle-item circle-${index + 1}`}>
              <div className="circle">
                <span className="circle-number">{item.number}</span>
              </div>
              <div className="circle-text">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CinematicCircles;
