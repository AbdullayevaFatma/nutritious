import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span>nutritious.</span>
          <p>
          Stay updated with our latest meals, promotions, and news!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="fb-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+90-501-999-99-99</li>
            <li>contact@nutritious.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Nutritious.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
