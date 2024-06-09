import React from 'react';
import "../../css/Home/Footer1.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h2>Upgrade Your Skills With Us</h2>
        <input type="email" placeholder="Add your email..." className="email-input" />
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <div className="footer-social">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
        <div className="footer-copy">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
