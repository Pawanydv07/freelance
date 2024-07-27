import React from 'react';
import "../../css/Home/HomeP2.css";
import img1 from '../../assets/home_study_planner.png';
import img2 from '../../assets/test_generator.png';
import img3 from '../../assets/updated_challenge_zone1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCheck } from "react-icons/fa6";
import { faCoffee, faAppleAlt, faLeaf, faBook } from '@fortawesome/free-solid-svg-icons';

const HomeP2 = () => {
  const boxes = [
    {icon: FaCheck, image: img1, heading: 'Study Planner', text: 'Build concepts step by step', li1:'Improve score exponentially', li2:'Improve time management ', li3:"Stay stress free" , color: '#E8AD1A'},
    {icon: FaCheck, image: img2, heading: 'Test Generator', text: 'Create your test the way you want' , li1:'Make it short, make it long', li2: 'Keep it timed, keep it relaxed', li3:'Make it tough, make it easy', color: '#7FBA57'},
    {icon: FaCheck, image: img3, heading: 'Challenge Zone', text: 'Beat self, beat the world' ,  li1:'Choose & challenge friends', li2:'Compete in real time', li3:'Share scores and certificates', color: '#478DCD'},
    // { icon: faBook, heading: 'Learning Resources', text: 'Access a wide range of educational materials and resources.' },
  ];

  return (
    <div className="info-boxes-container">
      <h1 className="component-heading">
        {/* <span className="first-part">Our</span><br /> */}
        <h3 className="second-part">Toppers Use These Tools</h3>
      </h1>
      <div className="boxes">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <div className="box-content">
              <span className="box-number">{index + 1}</span>
             <div className='img-box'>
             <img src={box.image} alt={box.heading} className="img" />
             </div>
              <h3 className='heading-text'>{box.heading}</h3>
              <p className=''>{box.text}</p>
              {/* <div className=''> */}
                {/* <icon={box.icon} /> */}

              <ul className='ul'>
                <li><box.icon className='icon' style={{ color: box.color }} />{box.li1}</li>
                <li><box.icon  style={{ color: box.color }}/>{box.li2}</li>
                <li><box.icon  style={{ color: box.color }}/>{box.li3}</li>
              </ul>
              {/* </div> */}
              
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HomeP2;
