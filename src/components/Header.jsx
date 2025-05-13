import React from 'react';
import './Header.css';
// Using a placeholder image URL instead of the local file
const profileImage = 'https://via.placeholder.com/120x120';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          <h1 className="name">MARK TAYLOR</h1>
          <p className="title">Product Designer</p>
          <div className="location">
            <span>New York, USA</span>
          </div>
          <div className="contact-info">
            <p>m.taylor@mail.com</p>
            <p>+1 800 555 1234</p>
          </div>
          <button className="download-btn">Download CV</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
