import React from 'react';
import "./Banner.css"; // Import your CSS file for styling
import bannerPhoto from '../Photos/bannerPhoto.jpg'; // Import the banner photo

const Banner = ({ title, subtitle }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerPhoto})` }}>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Banner;
