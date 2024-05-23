import React from 'react';
import "../css/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import photo from "../assets/photo.jpg";
const Home = () => {
  return (
    <div className='main flex'>
      <div className='left-half'></div>
      <div className='right-half'>
        <img src={photo}alt="photo" className='photo'/>
        <div className='navbar flex'>
        <div className='menu'>
            <div className='hamburger'>
              <div className='line small'></div>
              <div className='line big'></div>
              <div className='line small'></div>
            </div>
            <span>Menu</span>
          </div>
          <div className='icons-right'>
            <FontAwesomeIcon icon={faSearch} className='icon' />
            <FontAwesomeIcon icon={faShoppingCart} className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
