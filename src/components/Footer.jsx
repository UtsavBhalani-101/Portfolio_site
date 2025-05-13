import React from 'react';
import './Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="simple-footer">
        <p className="copyright">© {currentYear} Utsav Bhalani. All rights reserved.</p>
        <p className="footer-tagline">Web Designer & Developer based in Berlin, Germany</p>
      </div>
    </footer>
  );
};

export default Footer;
