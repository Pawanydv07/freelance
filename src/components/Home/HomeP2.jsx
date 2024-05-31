import React from 'react';
import "../../css/Home/HomeP2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faLeaf, faBook } from '@fortawesome/free-solid-svg-icons';

const HomeP2 = () => {
  const boxes = [
    { icon: faCoffee, heading: 'Quality Coffee', text: 'Enjoy the best coffee in town, freshly brewed and served with a smile.' },
    { icon: faAppleAlt, heading: 'Fresh Fruits', text: 'Our fruits are always fresh, providing you with the best nutrition.' },
    { icon: faLeaf, heading: 'Eco-Friendly', text: 'We are committed to protecting the environment with sustainable practices.' },
    { icon: faBook, heading: 'Learning Resources', text: 'Access a wide range of educational materials and resources.' },
  ];

  return (
    <div className="info-boxes-container">
      <h1 className="heading">
        {/* <span className="first-part">Our</span><br /> */}
        {/* <span className="second-part">Features</span> */}
      </h1>
      <div className="boxes">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <div className="box-content">
              <span className="box-number">{index + 1}</span>
              <FontAwesomeIcon icon={box.icon} className="icon" />
              <h2>{box.heading}</h2>
              <p>{box.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeP2;
